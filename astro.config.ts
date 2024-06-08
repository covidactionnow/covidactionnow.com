import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://covidactionnow.com",
  // required to resolve some urls correctly when prefixed with basepath
  trailingSlash: "always",
  devToolbar: { enabled: false },
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      // use our own base css so that we can customize the default font.
      applyBaseStyles: false,
    }),
  ],
});
