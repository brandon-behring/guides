# Cloudflare Workers — launch runbook (hub + guide repo)

How to wire `~/guides/` → `guides.brandon-behring.dev` and `~/guides-ai-engineering/` → its own
Worker (proxied at `/ai-engineering/*` in Phase L1). This is the dashboard half of roadmap
v2 §5 **Phase L0**.

**Rewritten 2026-06-11 (Workers static assets).** The first launch attempt surfaced that this
Cloudflare account has **no Pages creation flow** — the dashboard offers Workers only (Cloudflare's
Pages→Workers convergence). Both repos were converted the same day: `wrangler.toml` now uses
`[assets] directory = "./dist"` instead of `pages_build_output_dir`, and the guide repo's
`public/_redirects` gained a `/ai-engineering/* /:splat 200` rewrite (Workers assets supports
`_redirects` natively, including 200-rewrites). All URL shapes verified locally under
`npx wrangler dev` before this rewrite. The filename keeps "pages" for link stability; the
2026-06-10 Pages-based version is in git history.

**Time**: ~15 min total for both projects (dashboard config + 1–5 min DNS in L1).

---

## Prerequisites

- [ ] Both repos pushed with the Workers-assets `wrangler.toml` (2026-06-11 commits) and green
  local builds.
- [ ] Cloudflare account owning the `brandon-behring.dev` DNS zone; zone active in the dashboard.

---

## Step 1 — Create the two Worker projects (Workers Builds)

For each repo: dashboard → **Workers & Pages** → **Create application** → **Import a repository**
(the Git-connected Workers flow) → pick the repo.

| Field | Project A — hub | Project B — guide repo |
|---|---|---|
| Repo | `brandon-behring/guides` | `brandon-behring/guides-ai-engineering` |
| Project/Worker name | `guides-hub` (matches `wrangler.toml`) | `guides-ai-engineering` (matches `wrangler.toml`) |
| Production branch | `main` | `main` |
| Build command | `npm run build` | `npm run build` |
| Deploy command | `npx wrangler deploy` (default) | `npx wrangler deploy` (default) |

**No environment variables needed.** Workers Builds auto-detects Node from the build image
(observed: `nodejs@22.16.0` — satisfies Astro 6's ≥22.12.0). `NODE_VERSION` and `BOOK_PRESET`
are both obsolete here.

**If a project already exists from a failed attempt** (e.g. `guides-hub` created before the
2026-06-11 wrangler.toml conversion): don't delete it — the next push to `main` (or **Retry
build** on the failed deployment) picks up the fixed config and succeeds.

**A healthy build log**: `Success: Build command completed` → `Executing user deploy command:
npx wrangler deploy` → an upload of N assets → "Deployed guides-… (https://…workers.dev)".
The earlier failure mode ("Missing entry-point") is gone once `[assets]` is in wrangler.toml.

---

## Step 2 — Verify the `.workers.dev` deploys

URLs are `https://<name>.<account-subdomain>.workers.dev` (the dashboard shows the exact URL on
each Worker's overview page).

Hub (`guides-hub`):

- [ ] `/` — landing page
- [ ] `/methodology/` and `/about/` — root-mounted frontmatter pages
- [ ] `/search/` — Pagefind UI

Guide repo (`guides-ai-engineering`):

- [ ] `/` — 302 → `/ai-engineering/` (via `public/_redirects`)
- [ ] `/ai-engineering/` — landing picker (Evaluation + LLM app engineering + guide 3 "in progress")
- [ ] `/ai-engineering/chapters/evaluation/why-evaluation/` — guide-1 chapter renders; interact
  with an island demo to confirm hydration
- [ ] `/ai-engineering/chapters/llm-app-engineering/retrieval-101/` — guide-2 chapter renders
- [ ] `/chapters/` — also 200: scaffold-emitted links ignore the base (upstream
  [#140](https://github.com/brandon-behring/book-scaffold-astro/issues/140)); the `_redirects`
  200-rewrite makes both link shapes resolve standalone

All six checks passed locally under `npx wrangler dev` (2026-06-11) — production should match.
Then hand back to Claude for the scripted post-checks (`/url-freshness-check` over the live URLs +
island/demo-JSON verification).

---

## Step 3 (Phase L1) — custom domain + path proxy

1. `guides-hub` Worker → **Settings** → **Domains & Routes** → **Add** → **Custom domain** →
   `guides.brandon-behring.dev` (Cloudflare inserts DNS automatically; propagation 1–5 min).
2. Verify `https://guides.brandon-behring.dev/` + `/methodology/` + HTTPS cert.
3. **Path proxy**: Claude adds a `main` script to the hub Worker (assets binding + 
   `run_worker_first = ["/ai-engineering/*"]`) that proxies `/ai-engineering/*` to the
   `guides-ai-engineering` Worker; deploys via the normal push. **Blocked-aware**: scaffold
   [#140](https://github.com/brandon-behring/book-scaffold-astro/issues/140) (base-unaware links)
   must ship first, or guide-repo navigation escapes the `/ai-engineering/` prefix onto hub routes.

---

## Step 4 — Confirm auto-deploy

Push a trivial change to `main` in either repo and confirm the matching Worker fires a build
within ~30s and deploys. GitHub Actions runs separately (hub: astro-build, content-validate,
research-lint; guide repo: CI lands in Phase L2).

---

## Troubleshooting

**`Missing entry-point to Worker script or to assets directory`** — wrangler.toml predates the
2026-06-11 conversion; it must contain `[assets] directory = "./dist"` (not
`pages_build_output_dir`).

**`wrangler deploy` warns "run on a Pages project"** — same cause as above.

**Build fails on Node version** — Workers Builds should auto-detect Node 22; if not, add a
`.node-version` file containing `22` to the repo root.

**Guide repo root 404s or `/ai-engineering/` 404s** — `public/_redirects` missing the 2026-06-11
rules; confirm `dist/_redirects` has the `/ai-engineering/* /:splat 200` rewrite line.

**Pagefind "Discovered 0 languages"** — `<html lang>` missing; scaffold sets this, so check
`astro.config.mjs` wasn't overridden.

---

## Dashboard inputs (minimal summary)

1. Repos: `github.com/brandon-behring/guides`, `github.com/brandon-behring/guides-ai-engineering`
2. Production branch: `main` (both)
3. Build command: `npm run build` · deploy command: `npx wrangler deploy` (both, defaults)
4. Env vars: none
5. Custom domain (L1, hub only): `guides.brandon-behring.dev`

---

## Cross-references

- Launch plan: `docs/plans/active/2026-06-10_series_roadmap_v2.md` §5 (L0 → L1 → L2)
- Hub `wrangler.toml` + guide `wrangler.toml` — Workers-assets configs matching the settings above
- Upstream: base-unaware links [book-scaffold-astro#140](https://github.com/brandon-behring/book-scaffold-astro/issues/140)
- Superseded versions: 2026-06-10 Pages rewrite and the 2026-05-20 original — git history of this file
