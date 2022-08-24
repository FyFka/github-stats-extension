import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        "github-stats-extension": path.resolve(__dirname, "src/index.tsx"),
      },
      output: {
        entryFileNames: "[name].js",
      },
    },
  },
});
