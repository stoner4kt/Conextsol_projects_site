/**
 * Cloudflare Worker: serve the Vite SPA from static assets.
 * Replaces the default "Hello World" Worker script.
 */
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
