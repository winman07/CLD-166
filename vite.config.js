import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@aws-amplify/auth": "@aws-amplify/auth",
      "@aws-amplify/storage": "@aws-amplify/storage",
      "@aws-amplify/api-rest": "@aws-amplify/api-rest",
    },
  },
  server: {
    port: 5173,
    open: true,
    host: "localhost",
  },
  optimizeDeps: {
    include: ["@aws-amplify/auth", "@aws-amplify/storage", "@aws-amplify/api-rest"],
  },
});