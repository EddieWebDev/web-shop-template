import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      Components: path.resolve(__dirname, "./src/components"),
      Pages: path.resolve(__dirname, "./src/pages"),
      Styles: path.resolve(__dirname, "./src/styles"),
    },
  },
  plugins: [react()],
});
