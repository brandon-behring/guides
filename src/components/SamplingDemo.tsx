/**
 * SamplingDemo — interactive next-token sampling demo (Preact island).
 *
 * Reads a pre-computed logit dump (src/data/sampling_traces.json) and lets the
 * reader reshape the next-token distribution with temperature / top-k / top-p /
 * min-p, then *draw* tokens from it. No model runs in the browser — all the math
 * is the pure TypeScript in ./sampling-core. Hydrated `client:visible`.
 *
 * Encoding in each bar:
 *   solid bar  = sampling probability after reshaping (what you draw from)
 *   faint bar  = probability before truncation (so you see what got cut)
 *   gold tick  = empirical frequency from your draws (converges to the bar — LLN)
 *   green dot  = the greedy / argmax token (what temperature=0 would always pick)
 */
import { useState, useMemo, useEffect, useCallback } from 'preact/hooks';
import {
  reshape,
  drawToken,
  displayToken,
  type SamplingData,
  type FilterOptions,
} from './sampling-core';

interface Props {
  data: SamplingData;
}

const SHOWN = 16; // chart rows; the math always uses all dumped candidates

const numVal = (e: Event) => parseFloat((e.currentTarget as HTMLInputElement).value);
const boolVal = (e: Event) => (e.currentTarget as HTMLInputElement).checked;

export default function SamplingDemo({ data }: Props) {
  const [promptIdx, setPromptIdx] = useState(0);
  const [temperature, setTemperature] = useState(1);
  const [topK, setTopK] = useState(10);
  const [topP, setTopP] = useState(0.9);
  const [minP, setMinP] = useState(0.05);
  const [topKEnabled, setTopKEnabled] = useState(false);
  const [topPEnabled, setTopPEnabled] = useState(false);
  const [minPEnabled, setMinPEnabled] = useState(false);

  const [tally, setTally] = useState<Record<string, number>>({});
  const [drawCount, setDrawCount] = useState(0);
  const [lastDraw, setLastDraw] = useState<string | null>(null);

  const prompt = data.prompts[promptIdx] ?? data.prompts[0];

  const opts: FilterOptions = {
    temperature,
    topK,
    topP,
    minP,
    topKEnabled,
    topPEnabled,
    minPEnabled,
  };

  const reshaped = useMemo(
    () => reshape(prompt.logits, opts),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [prompt, temperature, topK, topP, minP, topKEnabled, topPEnabled, minPEnabled],
  );

  // Draws are samples from the *current* distribution — reset them whenever the
  // distribution changes, so the empirical ticks always match the bars shown.
  useEffect(() => {
    setTally({});
    setDrawCount(0);
    setLastDraw(null);
  }, [promptIdx, temperature, topK, topP, minP, topKEnabled, topPEnabled, minPEnabled]);

  const sample = useCallback(
    (n: number) => {
      const counts: Record<string, number> = {};
      let last = '';
      for (let i = 0; i < n; i++) {
        const idx = drawToken(reshaped);
        const tk = reshaped[idx].token;
        counts[tk] = (counts[tk] ?? 0) + 1;
        last = tk;
      }
      setTally((prev) => {
        const next = { ...prev };
        for (const k in counts) next[k] = (next[k] ?? 0) + counts[k];
        return next;
      });
      setDrawCount((c) => c + n);
      setLastDraw(last);
    },
    [reshaped],
  );

  const clear = useCallback(() => {
    setTally({});
    setDrawCount(0);
    setLastDraw(null);
  }, []);

  const shown = reshaped.slice(0, SHOWN);
  const maxScale = Math.max(
    1e-6,
    ...shown.map((t) => Math.max(t.rawProb, t.prob)),
  );
  const pct = (v: number) =>
    `${Math.max(0, Math.min(100, (v / maxScale) * 100))}%`;
  const empFreq = (token: string) => (drawCount > 0 ? (tally[token] ?? 0) / drawCount : 0);

  const keptCount = reshaped.filter((t) => t.kept).length;

  return (
    <section class="sd" aria-labelledby="sd-title">
      <div class="sd-controls">
        <div class="sd-field-prompt">
          <label for="sd-prompt">Prompt (model: {data.model})</label>
          <select
            id="sd-prompt"
            value={promptIdx}
            onInput={(e) => setPromptIdx(parseInt((e.currentTarget as HTMLSelectElement).value, 10))}
          >
            {data.prompts.map((p, i) => (
              <option value={i}>{p.prompt} …</option>
            ))}
          </select>
        </div>

        <div class="sd-sliders">
          <div class="sd-field">
            <div class="sd-field-head">
              <label for="sd-temp">Temperature</label>
              <span class="sd-val">{temperature.toFixed(2)}</span>
            </div>
            <input
              id="sd-temp"
              type="range"
              min="0.1"
              max="2"
              step="0.05"
              value={temperature}
              aria-label="Temperature"
              aria-valuetext={temperature.toFixed(2)}
              onInput={(e) => setTemperature(numVal(e))}
            />
          </div>

          <div class={`sd-field${topKEnabled ? '' : ' sd-field-off'}`}>
            <div class="sd-field-head">
              <label class="sd-toggle">
                <input type="checkbox" checked={topKEnabled} onInput={(e) => setTopKEnabled(boolVal(e))} />
                <span>Top-k</span>
              </label>
              <span class="sd-val">{topKEnabled ? `k = ${topK}` : 'off'}</span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              step="1"
              value={topK}
              disabled={!topKEnabled}
              aria-label="Top-k value"
              aria-valuetext={`${topK}`}
              onInput={(e) => setTopK(numVal(e))}
            />
          </div>

          <div class={`sd-field${topPEnabled ? '' : ' sd-field-off'}`}>
            <div class="sd-field-head">
              <label class="sd-toggle">
                <input type="checkbox" checked={topPEnabled} onInput={(e) => setTopPEnabled(boolVal(e))} />
                <span>Top-p</span>
              </label>
              <span class="sd-val">{topPEnabled ? `p = ${topP.toFixed(2)}` : 'off'}</span>
            </div>
            <input
              type="range"
              min="0.05"
              max="1"
              step="0.01"
              value={topP}
              disabled={!topPEnabled}
              aria-label="Top-p value"
              aria-valuetext={topP.toFixed(2)}
              onInput={(e) => setTopP(numVal(e))}
            />
          </div>

          <div class={`sd-field${minPEnabled ? '' : ' sd-field-off'}`}>
            <div class="sd-field-head">
              <label class="sd-toggle">
                <input type="checkbox" checked={minPEnabled} onInput={(e) => setMinPEnabled(boolVal(e))} />
                <span>Min-p</span>
              </label>
              <span class="sd-val">{minPEnabled ? `m = ${minP.toFixed(2)}` : 'off'}</span>
            </div>
            <input
              type="range"
              min="0.01"
              max="0.5"
              step="0.01"
              value={minP}
              disabled={!minPEnabled}
              aria-label="Min-p value"
              aria-valuetext={minP.toFixed(2)}
              onInput={(e) => setMinP(numVal(e))}
            />
          </div>
        </div>
      </div>

      <p class="sd-echo">
        {prompt.prompt}
        <span class="sd-echo-blank" aria-hidden="true">▁▁▁?</span>
      </p>

      <div class="sd-draw">
        <button type="button" class="sd-btn" onClick={() => sample(1)}>
          Sample a token
        </button>
        <button type="button" class="sd-btn" onClick={() => sample(25)}>
          Sample ×25
        </button>
        <button type="button" class="sd-btn sd-btn-ghost" onClick={clear} disabled={drawCount === 0}>
          Clear
        </button>
        <span class="sd-draw-status" aria-live="polite">
          {drawCount === 0 ? `${keptCount} tokens in play` : `${drawCount} draw${drawCount === 1 ? '' : 's'}`}
          {lastDraw !== null && (
            <>
              {' '}· last: <code class="sd-tok">{displayToken(lastDraw)}</code>
            </>
          )}
        </span>
      </div>

      <ol class="sd-chart" aria-label={`Next-token probabilities for "${prompt.prompt}"`}>
        {shown.map((t) => {
          const pctLabel = t.kept ? `${(t.prob * 100).toFixed(t.prob >= 0.1 ? 0 : 1)}%` : '—';
          const aria = `${displayToken(t.token)}: ${t.kept ? `${(t.prob * 100).toFixed(1)} percent` : 'truncated'}${
            t.isArgmax ? ', greedy pick' : ''
          }`;
          return (
            <li
              class={`sd-row${t.kept ? '' : ' sd-row-dropped'}${t.token === lastDraw ? ' sd-row-hit' : ''}`}
              aria-label={aria}
            >
              <span class="sd-row-token">
                <code>{displayToken(t.token)}</code>
                {t.isArgmax && (
                  <span class="sd-argmax" title="greedy pick (argmax)" aria-hidden="true">
                    ●
                  </span>
                )}
              </span>
              <div class="sd-track">
                <div class="sd-ghost" style={{ width: pct(t.rawProb) }} aria-hidden="true" />
                <div class="sd-fill" style={{ width: pct(t.prob) }} aria-hidden="true" />
                {drawCount > 0 && t.kept && (
                  <div
                    class="sd-emp"
                    style={{ left: pct(empFreq(t.token)) }}
                    aria-hidden="true"
                    title={`empirical: ${(empFreq(t.token) * 100).toFixed(1)}% (${tally[t.token] ?? 0} draws)`}
                  />
                )}
              </div>
              <span class="sd-row-pct">{pctLabel}</span>
            </li>
          );
        })}
      </ol>

      <div class="sd-legend" aria-hidden="true">
        <span><i class="sd-swatch sd-swatch-fill" /> sampling prob</span>
        <span><i class="sd-swatch sd-swatch-ghost" /> before truncation</span>
        <span><i class="sd-swatch sd-swatch-emp" /> empirical (draws)</span>
        <span><i class="sd-swatch-argmax">●</i> greedy pick</span>
      </div>

      <p class="sd-caption">
        Showing top {shown.length} of {prompt.logits.length} candidates · {keptCount} kept after
        filtering. Probabilities are over the dumped candidates (a softmax of the top-50 logits),
        not the full vocabulary. Draw repeatedly and the gold ticks converge to the bars.
      </p>
    </section>
  );
}
