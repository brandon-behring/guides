# Cloudflare dashboard TODO — Workers-only flow

**Created**: 2026-06-12 · **Owner**: Brandon (dashboard) + Claude (post-checks)
**Context**: This account has **no Pages creation flow** — the dashboard offers **Workers only**
(Cloudflare's Pages→Workers convergence, discovered 2026-06-11 when `guides-hub`'s first deploy
failed with "Missing entry-point"). Both repos were converted to **Workers static assets** the
same day and pushed: hub `c540b3b`, guide repo `76b50f7`. All URL shapes verified locally under
`npx wrangler dev` before push — the repos are ready; only dashboard work remains.

Full detail: `docs/deploy-cloudflare-pages.md` (rewritten 2026-06-11 for Workers; filename kept
for link stability). Launch plan: `docs/plans/active/2026-06-10_series_roadmap_v2.md` §5.

---

## 1. Fix the existing `guides-hub` Worker (hub repo)

The failed project is **reusable — do not delete it**. The fixed `wrangler.toml`
(`[assets] directory = "./dist"`) is already on `main`.

- [ ] Dashboard → **Workers & Pages** → `guides-hub` → **Deployments**
- [ ] A new build may have auto-triggered from the `c540b3b` push. If not: **Retry build** on
      the failed deployment.
- [ ] Confirm the healthy log signature:
      `Success: Build command completed` → `Executing user deploy command: npx wrangler deploy`
      → asset upload → `Deployed guides-hub (https://….workers.dev)`
- [ ] Note the `.workers.dev` URL from the Worker's overview page.

The old failure mode (`Missing entry-point to Worker script or to assets directory`) is gone
once the build checks out a commit ≥ `c540b3b`.

## 2. Create the `guides-ai-engineering` Worker (guide repo)

- [ ] **Workers & Pages** → **Create application** → **Import a repository** →
      `brandon-behring/guides-ai-engineering`
- [ ] Settings (defaults are correct):

  | Field | Value |
  |---|---|
  | Worker name | `guides-ai-engineering` (must match `wrangler.toml`) |
  | Production branch | `main` |
  | Build command | `npm run build` |
  | Deploy command | `npx wrangler deploy` (default) |
  | Environment variables | **none** — Node 22 auto-detected (`nodejs@22.16.0` observed; Astro 6 needs ≥22.12.0) |

- [ ] Confirm the same healthy log signature and note the `.workers.dev` URL.

## 3. Spot-check the live deploys (~2 min)

Hub (`guides-hub.….workers.dev`):

- [ ] `/` — landing page
- [ ] `/methodology/` and `/about/` — root-mounted frontmatter pages
- [ ] `/search/` — Pagefind UI

Guide repo (`guides-ai-engineering.….workers.dev`):

- [ ] `/` — 302 → `/ai-engineering/` (via `public/_redirects`)
- [ ] `/ai-engineering/` — two-guide landing picker
- [ ] `/ai-engineering/chapters/evaluation/why-evaluation/` — guide-1 chapter; click an island
      demo to confirm hydration
- [ ] `/ai-engineering/chapters/llm-app-engineering/retrieval-101/` — guide-2 chapter
- [ ] `/chapters/` — also 200 (scaffold links ignore `base`, upstream
      [#140](https://github.com/brandon-behring/book-scaffold-astro/issues/140); the
      `_redirects` 200-rewrite makes both shapes resolve standalone)

All of these passed locally under `npx wrangler dev` 2026-06-11 — production should match.

## 4. Hand back to Claude

- [ ] Paste both `.workers.dev` URLs into a Claude session → Claude runs the scripted
      post-checks (link-check over live URLs, island hydration, demo-JSON loading) and marks
      Phase L0 done in the roadmap.

## 5. Phase L1 — custom domain (can do anytime after step 1)

- [ ] `guides-hub` Worker → **Settings** → **Domains & Routes** → **Add** → **Custom domain**
      → `guides.brandon-behring.dev` (Cloudflare inserts DNS automatically; 1–5 min propagation)
- [ ] Verify `https://guides.brandon-behring.dev/` + `/methodology/` + HTTPS cert

**Do NOT expect `/ai-engineering/*` on the custom domain yet.** The path proxy (hub-Worker
`main` script + `run_worker_first = ["/ai-engineering/*"]`) is Claude-side work and is
**blocked on scaffold [#140](https://github.com/brandon-behring/book-scaffold-astro/issues/140)**
— until that ships, guide navigation would escape the `/ai-engineering/` prefix onto hub routes.
Until then the guide lives standalone at its `.workers.dev` URL.

## 6. Phase L2 — later, mostly Claude-side

- [ ] (Brandon) Create a Cloudflare Web Analytics token when ready — the only user-side L2 item
- [ ] (Claude) OG metadata, guide-repo CI workflows, analytics wiring

---

## Troubleshooting quick reference

| Symptom | Cause / fix |
|---|---|
| `Missing entry-point to Worker script or to assets directory` | Build checked out a commit before the 2026-06-11 conversion — confirm `wrangler.toml` has `[assets] directory = "./dist"` |
| Build fails on Node version | Should auto-detect Node 22; if not, add a `.node-version` file containing `22` |
| Guide root or `/ai-engineering/` 404s | `dist/_redirects` missing the `/ai-engineering/* /:splat 200` rewrite — check `public/_redirects` on `main` |
| Search finds nothing | Pagefind index missing — confirm build log ran the full `npm run build` (Astro + Pagefind) |

---

**Lifecycle**: move this file to `docs/plans/done/` once L0 + L1 (domain) are checked off;
the #140-blocked path proxy stays tracked in roadmap v2 §5/§7.
