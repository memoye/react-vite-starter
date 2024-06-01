/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },

  test: {
    globals: true,
    environment: "jsdom",
    css: true,
    setupFiles: ["./vitest.setup.ts"],
    reporters: ["verbose"],
    coverage: {
      reporter: ["text", "json", "html"],
      include: ["src/**/*"],
      exclude: ["src/main.tsx"],
      thresholds: {
        // Thresholds for all files
        functions: 80,
        branches: 70,
        perFile: true,
        autoUpdate: false, // (default)

        // Thresholds for particular files e.g. utils
        "src/utils/**.ts": {
          lines: 100,
          statements: 95,
        },
      },
    },
  },
});
