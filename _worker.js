/**
 * guides-hub Worker — the L1 path proxy for the AI-engineering guide.
 *
 * `run_worker_first` (wrangler.toml) invokes this only for /ai-engineering requests;
 * those are forwarded to the guides-ai-engineering Worker via the GUIDE_AI_ENGINEERING
 * service binding, so the series serves under guides.brandon-behring.dev/ai-engineering/.
 * (Unblocked by book-scaffold-astro v4.24.0 — #140/#141 made the guide's nav links
 * base-aware, so navigation now stays inside /ai-engineering/ instead of escaping onto
 * hub routes.) Every other request serves the hub's own static assets (the landing,
 * /methodology, /about, /search) via the ASSETS binding.
 */
export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url);
    if (pathname === '/ai-engineering' || pathname.startsWith('/ai-engineering/')) {
      return env.GUIDE_AI_ENGINEERING.fetch(request);
    }
    return env.ASSETS.fetch(request);
  },
};
