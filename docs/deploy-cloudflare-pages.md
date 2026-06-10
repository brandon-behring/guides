# Cloudflare Pages — launch runbook (hub + guide repo)

How to wire `~/guides/` → `guides.brandon-behring.dev` and `~/guides-ai-engineering/` → its own
Pages project (proxied at `/ai-engineering/*` in Phase L1). This is the dashboard half of roadmap
v2 §5 **Phase L0**; the Claude pre-work (builds verified, `_redirects`, this runbook) is done.

**Rewritten 2026-06-10.** The 2026-05-20 original prescribed `NODE_VERSION=20` and a `BOOK_PRESET`
env var — both wrong since the scaffold v4 migration: presets were removed in v4.0.0 (style
composition now lives in `astro.config.mjs`), and Astro 6.1.7 requires **Node ≥22.12.0** in both
repos. It also verified `/frontmatter/...` URLs that v4 mounts at root.

**Time**: ~20 min total for both projects (dashboard config + 5–10 min DNS propagation in L1).

---

## Prerequisites

- [ ] Both repos pushed and green: `gh repo view brandon-behring/guides` and
  `gh repo view brandon-behring/guides-ai-engineering` don't error; local `npm run build` exits 0
  in both (re-verified 2026-06-10, hub on scaffold v4.14.2).
- [ ] Cloudflare account owning the `brandon-behring.dev` DNS zone; zone active in the dashboard
  (**Websites → brandon-behring.dev**).

---

## Step 1 — Create the two Pages projects

For each repo: Cloudflare dashboard → **Workers & Pages** → **Create application** → **Pages** →
**Connect to Git** → pick the repo → **Begin setup**.

**Project A — hub** (`brandon-behring/guides`):

| Field | Value |
|---|---|
| Project name | `guides-hub` |
| Production branch | `main` |
| Framework preset | **Astro** (confirm Cloudflare's auto-detect picked it) |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` (default) |

**Project B — guide repo** (`brandon-behring/guides-ai-engineering`): identical settings, project
name `guides-ai-engineering`.

**Environment variables** (both projects, Production + Preview):

| Name | Value | Why |
|---|---|---|
| `NODE_VERSION` | `22` | Astro 6.1.7 requires Node ≥22.12.0; Cloudflare's default may be older |

No other env vars. (`BOOK_PRESET` is obsolete — do not set it; the v4 scaffold reads its style
composition from `astro.config.mjs`, which is committed.)

**Save and Deploy**. Each first build runs ~2–3 min; the log should end with Pagefind output and
"Finished in 0.0Xs".

---

## Step 2 — Verify the `.pages.dev` deploys

Hub (`https://guides-hub.pages.dev`):

- [ ] `/` — landing page
- [ ] `/methodology/` and `/about/` — frontmatter pages (root-mounted; the old `/frontmatter/...`
  paths no longer exist)
- [ ] `/search/` — Pagefind UI

Guide repo (`https://guides-ai-engineering.pages.dev`):

- [ ] `/` — 302-redirects to `/ai-engineering/` (via `public/_redirects`; the site builds with
  `base=/ai-engineering/`, so the bare root would otherwise 404)
- [ ] `/ai-engineering/` — landing picker (Evaluation + LLM app engineering)
- [ ] `/ai-engineering/chapters/evaluation/why-evaluation/` — a guide-1 chapter renders, island
  demos hydrate (interact with one explorer)
- [ ] `/ai-engineering/chapters/llm-app-engineering/retrieval-101/` — a guide-2 chapter renders

If anything 404s, check the build log for the missing route; the most likely cause is an MDX parse
error the local build skipped. Then hand back to Claude for the scripted post-checks
(`/url-freshness-check` over the live URLs + island/demo-JSON verification).

---

## Step 3 (Phase L1) — custom domain + path proxy

1. Hub Pages project → **Custom domains** → add `guides.brandon-behring.dev` → **Activate**
   (Cloudflare inserts the CNAME automatically; propagation 1–5 min).
2. Verify `https://guides.brandon-behring.dev/` + `/methodology/` + HTTPS cert.
3. **Path proxy**: Claude writes a Worker in the hub repo routing
   `guides.brandon-behring.dev/ai-engineering/*` → the `guides-ai-engineering` Pages project; you
   deploy the route from the dashboard. (Fallback only if the Worker is unwanted: an
   `ai-engineering.` subdomain — avoid; it churns `site`/`base` in the guide repo.)

---

## Step 4 — Confirm auto-deploy

Push a trivial change to `main` in either repo and confirm the matching Pages project fires a
build within ~30s and goes green. GitHub Actions runs separately (hub: astro-build,
content-validate, research-lint; guide repo: CI lands in Phase L2).

---

## Troubleshooting

**Build fails with `command not found: book-scaffold`** — `@brandon_m_behring/book-scaffold-astro`
must be in `dependencies` (it is, both repos).

**Build fails on Node version** — confirm `NODE_VERSION=22` is set in the Pages project's
**Settings → Environment variables** (not GitHub).

**Build succeeds but pages 404** — confirm the framework preset is Astro so Cloudflare serves
`dist` correctly.

**Guide repo root 404s** — `public/_redirects` missing from the deploy; confirm the file exists in
the repo and shows up in the build's `dist/`.

**Pagefind "Discovered 0 languages"** — `<html lang>` missing; scaffold sets this, so check
`astro.config.mjs` wasn't overridden.

---

## Dashboard inputs (minimal summary)

1. Repos: `github.com/brandon-behring/guides`, `github.com/brandon-behring/guides-ai-engineering`
2. Production branch: `main` (both)
3. Build command: `npm run build` · output: `dist` (both)
4. Env var: `NODE_VERSION=22` (both)
5. Custom domain (L1, hub only): `guides.brandon-behring.dev`

---

## Cross-references

- Launch plan: `docs/plans/active/2026-06-10_series_roadmap_v2.md` §5 (L0 → L1 → L2)
- Hub `wrangler.toml` + guide `wrangler.toml` — Pages config stubs matching the settings above
- Old runbook content (Node 20 / `BOOK_PRESET` / `/frontmatter/` paths) — superseded; see git
  history of this file if needed
