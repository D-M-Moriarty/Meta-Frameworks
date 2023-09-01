import { defineConfig } from 'astro/config';
import node from "@astrojs/node";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  server: {
    // port: 8080
  },
  adapter: node({
    mode: "standalone",
    // port: 8080
  }),
  integrations: [tailwind()]
});
