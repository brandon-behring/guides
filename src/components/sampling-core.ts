/**
 * sampling-core.ts — pure, framework-free sampling math for the /lab/sampling demo.
 *
 * Given a dumped next-token logit vector, these functions reproduce exactly what a
 * decoder does between the model's raw logits and the token it draws:
 *
 *     temperature → softmax → (top-k ∩ top-p ∩ min-p truncation) → renormalize → sample
 *
 * No model runs here and nothing imports Preact — this is plain TypeScript so the
 * math is unit-testable and reusable. The committed JSON
 * (src/data/sampling_traces.json) supplies the logits.
 */

export interface TokenLogit {
  token: string;
  logit: number;
}
export interface PromptTrace {
  prompt: string;
  logits: TokenLogit[];
}
export interface SamplingData {
  model: string;
  generated: string;
  prompts: PromptTrace[];
}

export interface FilterOptions {
  temperature: number;
  topK: number; // candidate count when enabled
  topP: number; // nucleus mass when enabled
  minP: number; // floor (× max prob) when enabled
  topKEnabled: boolean;
  topPEnabled: boolean;
  minPEnabled: boolean;
}

export interface ReshapedToken {
  token: string;
  prob: number; // renormalized probability over the kept set (0 if truncated)
  rawProb: number; // probability after temperature, before truncation
  kept: boolean; // survives the enabled filters
  isArgmax: boolean; // highest rawProb — the greedy / deterministic pick
}

/** Numerically-stable softmax with temperature. T is clamped to a tiny epsilon. */
export function softmaxT(logits: number[], temperature: number): number[] {
  const T = Math.max(temperature, 1e-6);
  const scaled = logits.map((l) => l / T);
  const max = Math.max(...scaled);
  const exps = scaled.map((s) => Math.exp(s - max));
  const sum = exps.reduce((a, b) => a + b, 0) || 1;
  return exps.map((e) => e / sum);
}

/** Top-k: keep the k highest-probability tokens. k ≤ 0 or k ≥ n disables (keep all). */
export function keepTopK(probs: number[], k: number): boolean[] {
  if (k <= 0 || k >= probs.length) return probs.map(() => true);
  const kth = [...probs].sort((a, b) => b - a)[k - 1];
  // ≥ the k-th largest. Exact ties may keep slightly more than k — acceptable here.
  return probs.map((p) => p >= kth);
}

/** Top-p (nucleus): keep the smallest top set whose cumulative prob ≥ p. */
export function keepTopP(probs: number[], p: number): boolean[] {
  if (p >= 1) return probs.map(() => true);
  const order = probs.map((prob, i) => ({ prob, i })).sort((a, b) => b.prob - a.prob);
  const keep = probs.map(() => false);
  let cum = 0;
  for (const { prob, i } of order) {
    keep[i] = true; // include the token that crosses the threshold
    cum += prob;
    if (cum >= p) break;
  }
  return keep;
}

/** Min-p: keep tokens with prob ≥ m × max(prob). m ≤ 0 disables. */
export function keepMinP(probs: number[], m: number): boolean[] {
  if (m <= 0) return probs.map(() => true);
  const floor = m * Math.max(...probs);
  return probs.map((prob) => prob >= floor);
}

/**
 * Full reshape pipeline. Returns one ReshapedToken per input logit in input order
 * (the dump is sorted descending by logit). `prob` is renormalized over the kept
 * set; truncated tokens get prob 0 but retain `rawProb` for the "before" view.
 */
export function reshape(logits: TokenLogit[], opts: FilterOptions): ReshapedToken[] {
  const rawProbs = softmaxT(
    logits.map((t) => t.logit),
    opts.temperature,
  );

  const argmaxIdx = rawProbs.reduce((best, p, i) => (p > rawProbs[best] ? i : best), 0);

  const masks: boolean[][] = [];
  if (opts.topKEnabled) masks.push(keepTopK(rawProbs, opts.topK));
  if (opts.topPEnabled) masks.push(keepTopP(rawProbs, opts.topP));
  if (opts.minPEnabled) masks.push(keepMinP(rawProbs, opts.minP));

  const kept = rawProbs.map((_, i) => masks.every((mask) => mask[i]));
  const keptSum = rawProbs.reduce((s, p, i) => (kept[i] ? s + p : s), 0) || 1;

  return logits.map((t, i) => ({
    token: t.token,
    rawProb: rawProbs[i],
    prob: kept[i] ? rawProbs[i] / keptSum : 0,
    kept: kept[i],
    isArgmax: i === argmaxIdx,
  }));
}

/**
 * Draw one token index from the reshaped distribution (over kept tokens only).
 * `rng` defaults to Math.random; injectable for deterministic tests.
 */
export function drawToken(reshaped: ReshapedToken[], rng: () => number = Math.random): number {
  const r = rng();
  let cum = 0;
  for (let i = 0; i < reshaped.length; i++) {
    if (reshaped[i].prob <= 0) continue;
    cum += reshaped[i].prob;
    if (r <= cum) return i;
  }
  // Floating-point slack: return the last kept token.
  for (let i = reshaped.length - 1; i >= 0; i--) {
    if (reshaped[i].kept) return i;
  }
  return 0;
}

/** Render a token string for display: surface a leading space and control chars. */
export function displayToken(token: string): string {
  if (token === '') return '∅';
  return token
    .replace(/^ /, '␣')
    .replace(/\n/g, '\\n')
    .replace(/\t/g, '\\t');
}
