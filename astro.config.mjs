import { defineConfig } from "astro/config";
import { HOME_PAGE } from "./src/consts";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap(), tailwind()],
  redirects: {
    // "/": { HOME_PAGE },
    "/": "/about_me",
  },
});
