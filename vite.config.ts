import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "index.ts"),
      name: "avatar-gradient-generator",
      fileName: "index",
    },
  },
});
