import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const base = process.env.BASE_URL || "/";

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
  build: {
    outDir: "deploy/dist",
  },
});
