import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  const base = env.BASE_URL || "/";

  return {
    base,
    plugins: [react()],
    build: {
      outDir: "deploy/dist",
    },
  };
});
