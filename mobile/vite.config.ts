import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const root = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: resolve(root, "postcss.config.js"),
  },
  resolve: {
    alias: {
      "@brew-core": resolve(root, "../packages/brew-core/src/index.ts"),
    },
  },
  server: {
    host: "127.0.0.1",
    port: 5174,
  },
  preview: {
    host: "127.0.0.1",
    port: 5174,
  },
});
