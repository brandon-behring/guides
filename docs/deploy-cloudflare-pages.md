# Cloudflare Pages — hub deploy guide

How to wire `~/guides/` → `guides.brandon-behring.dev`. Phase 0b Step 5. Follow this once after `gh repo create + push`.

**Time**: ~15 min total (5 min dashboard config + 5–10 min DNS propagation).

---

## Prerequisites

Before you start, confirm all four:

- [ ] `~/guides/` is pushed to `github.com/brandon-behring/guides` (Phase 0b Step 9). Verify: `gh repo view brandon-behring/guides` doesn't error.
- [ ] Cloudflare account exists. The account that owns the `brandon-behring.dev` DNS zone.
- [ ] `brandon-behring.dev` DNS zone is active in Cloudflare. Verify in dashboard: **Websites → brandon-behring.dev** should resolve.
- [ ] Local `npm run build` in `~/guides/` exits 0 (already verified during Phase 0b, but re-confirm if you've made changes since).

---

## Step 1 — Create the Pages project

1. Cloudflare dashboard → **Workers & Pages** (left sidebar).
2. **Create application** → **Pages** tab → **Connect to Git**.
3. Authorize Cloudflare to access your GitHub if you haven't already (one-time per account).
4. Pick the `brandon-behring/guides` repo. **Begin setup**.

---

## Step 2 — Build settings

Cloudflare will ask for build configuration. Use these **exact** values:

| Field | Value |
|---|---|
| Project name | `guides-hub` (or `guides` — your call; affects only the `*.pages.dev` subdomain) |
| Production branch | `main` |
| Framework preset | **Astro** (Cloudflare detects this; confirm it's selected) |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory (advanced) | `/` (leave empty/default) |
| Node version | `20` (set via `NODE_VERSION` env var below if not auto-detected) |

**Environment variables** (click "Add variable" for each):

| Name | Value | Scope |
|---|---|---|
| `BOOK_PRESET` | `research-portfolio` | Production + Preview |
| `NODE_VERSION` | `20` | Production + Preview |

The `BOOK_PRESET` env var is critical — without it, `book-scaffold validate` and the Astro build resolve to `minimal` preset and skip research-portfolio features (KaTeX, AICollaborationDisclosure styling, etc.). The repo's `.env` file IS committed and sets this same value, but Cloudflare Pages doesn't auto-load `.env` files (same gotcha we hit locally in Phase 0b dogfooding).

5. **Save and Deploy**. First build runs (~2–3 min). Watch the build log — should end with "Pagefind found references to the Default UI" and "Finished in 0.0Xs".

---

## Step 3 — Verify the `.pages.dev` deploy

After build completes, Cloudflare gives you a `https://guides-hub.pages.dev` URL.

Confirm these resolve:

- [ ] `https://guides-hub.pages.dev/` — landing page (currently sparse; Phase 1 will fill in)
- [ ] `https://guides-hub.pages.dev/frontmatter/about/` — about page with AICollaborationDisclosure
- [ ] `https://guides-hub.pages.dev/frontmatter/methodology/` — methodology v0.1
- [ ] `https://guides-hub.pages.dev/search/` — Pagefind search UI

If anything 404s, check the build log for the missing route. Most likely cause: an MDX parse error in a frontmatter file the local build skipped.

---

## Step 4 — Custom domain

1. In the Pages project: **Custom domains** tab → **Set up a custom domain**.
2. Enter `guides.brandon-behring.dev`. Cloudflare detects you own the zone and offers to add the CNAME automatically. **Activate domain**.
3. Cloudflare adds a `CNAME` record: `guides` → `guides-hub.pages.dev`.
4. Wait 1–5 min for DNS propagation. (Sometimes Cloudflare's edge picks it up faster.)

Verify:

- [ ] `https://guides.brandon-behring.dev/` resolves (same content as `pages.dev` URL above)
- [ ] HTTPS cert is auto-provisioned (Cloudflare handles this; should be live within 5 min)
- [ ] `/frontmatter/about/` and `/frontmatter/methodology/` resolve at the custom domain

---

## Step 5 — Confirm auto-deploy

Push a trivial change to `main` (e.g., edit `README.md`, change a date) and confirm:

- [ ] Cloudflare Pages dashboard shows a new build firing within ~30s of the push
- [ ] Build completes, new commit hash visible in the production URL's headers (`cf-ray` or `etag`)
- [ ] GitHub Actions tab also shows `astro-build` + `content-validate` workflows running green (these are separate from Pages; Pages does its own build)

---

## What's deferred to Phase 1

These are NOT in Phase 0b scope; the hub `wrangler.toml` has placeholder comments for them:

- **Pilot subroute proxy**: when `~/guides-experimentation/` deploys to its own `guides-experimentation.pages.dev`, the hub needs to proxy `/experimentation/*` → that Pages project. Two options:
  1. **Cloudflare Workers** in front of both Pages projects, with a router that maps `/experimentation/*` to the pilot. (Most flexible; most setup.)
  2. **Cloudflare Pages `_redirects` file** in the hub `public/` with `/experimentation/* https://guides-experimentation.pages.dev/:splat 200`. (Simpler; preserves URL.)
  3. **Separate subdomain** `experimentation.guides.brandon-behring.dev`. (Cleanest separation; user picked subroute in Phase 0b planning so this is the fallback.)
- **`_redirects` for frontmatter prettyURLs**: scaffold's auto-route serves `/frontmatter/methodology/` not `/methodology/`. Phase 1 may add `/methodology /frontmatter/methodology/ 200` (rewrite, no redirect) and `/about /frontmatter/about/ 200`.
- **Edge functions**: not needed for Phase 0b. If LLM-as-coach interface lands in v1.1, may use Cloudflare Workers for a backend.
- **Analytics**: defer until needed. Privacy-respecting analytics (Plausible, Umami) per design doc — NOT Google Analytics or vendor-locked tools.

---

## Troubleshooting

**Build fails with `command not found: book-scaffold`**: `npm ci` didn't install the scaffold. Check `package.json` has `@brandon_m_behring/book-scaffold-astro` in `dependencies` (not just `devDependencies`).

**Build succeeds but pages 404**: check the framework preset is Astro (Cloudflare's default for `package.json` detection should work). If preset is "None", Cloudflare won't run the build command correctly.

**Custom domain shows "Pending"** for >10 min: check DNS in **brandon-behring.dev → DNS** that the CNAME for `guides` exists and points to `guides-hub.pages.dev`. If not, Cloudflare's automatic CNAME insertion didn't fire — add it manually.

**`BOOK_PRESET` not respected**: the env var must be set in Cloudflare **Pages project → Settings → Environment variables**, not in repo-level `.github/secrets/`. Pages env vars are separate from GitHub Actions env vars.

**Pagefind fails to index**: check build log for "Discovered 0 languages". Means the HTML doesn't have `<html lang="en">`. Scaffold should set this; if missing, check `astro.config.mjs` for an explicit language config.

---

## Information Cloudflare needs from you (summary)

If you skim the above and just need the dashboard inputs, here's the minimal list:

1. **GitHub repo URL**: `github.com/brandon-behring/guides`
2. **Production branch**: `main`
3. **Build command**: `npm run build`
4. **Build output**: `dist`
5. **Env vars**: `BOOK_PRESET=research-portfolio`, `NODE_VERSION=20`
6. **Custom domain**: `guides.brandon-behring.dev`

Nothing else. No API tokens to configure, no secrets to add (the repo is public; nothing to authenticate against). Total clicks: ~12.

---

## What I (Claude / future-you) need from this setup

After it's live, the following become true and unblock other work:

- `https://guides.brandon-behring.dev/methodology/` is a real URL I can link to from design docs, this hub's README, and per-guide AUTHORS.md files
- Phase 1 work has a deployment target (currently chapters can't be reviewed at URL; only local `npm run dev`)
- The career-bridge framing has a public-facing artifact to point at
- The `_redirects` file (Phase 1) becomes the place to wire the pilot subroute

Until this guide is followed, all the above stay aspirational. The local `npm run build` passes; that's the prerequisite. Cloudflare is the publishing step.

---

## Cross-references

- Hub repo: `~/guides/`
- Hub `wrangler.toml` (placeholder Pages config + Phase 1 subroute comments): `~/guides/wrangler.toml`
- Phase 0b plan: `~/.claude/plans/continue-with-working-on-gentle-cocke.md` (Step 5)
- Design doc v0.2 §18: `~/interview_prep_series/docs/plans/active/2026-05-19_guides_design_rethink_v0.2.md`
- Scaffold dogfooding findings (BOOK_PRESET gotcha): `~/.claude/projects/-Users-brandonbehring-interview-prep-series/memory/reference_book_scaffold_astro.md`
