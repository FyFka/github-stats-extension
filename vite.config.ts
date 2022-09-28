import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const sourceDir = path.resolve(__dirname, "src");

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@components", replacement: `${sourceDir}/components` },
      { find: "@hooks", replacement: `${sourceDir}/hooks` },
      { find: "@interfaces", replacement: `${sourceDir}/interfaces` },
      { find: "@constants", replacement: `${sourceDir}/constants.ts` },
    ],
  },
  build: {
    rollupOptions: {
      input: {
        "github-stats-extension": `${sourceDir}/index.tsx`,
      },
      output: {
        entryFileNames: "[name].js",
      },
    },
  },
});
