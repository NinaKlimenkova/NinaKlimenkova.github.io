import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://opadun1.github.io",
  base: "/personal_website",
  output: "static",
  integrations: [mdx()],
});
