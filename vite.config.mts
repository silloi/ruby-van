import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

import "svelte";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: ["./src/mod.ts"],
      name: "RubyVan",
      fileName: "ruby-van",
    },
  },
  plugins: [svelte({ compilerOptions: { customElement: true } })],
});
