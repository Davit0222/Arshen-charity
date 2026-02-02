import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // 1. This section fixes the "Preview" mode 404/CSP errors
  preview: {
    headers: {
      "Content-Security-Policy":
        "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.googletagmanager.com https://*.googleapis.com https://*.gstatic.com; style-src 'self' 'unsafe-inline' https://*.googleapis.com; font-src 'self' data: https://*.gstatic.com; img-src 'self' data: https://*.googleapis.com https://*.gstatic.com https://*.ggpht.com https://*.googleusercontent.com; connect-src 'self' https://*.google-analytics.com https://*.googletagmanager.com https://*.googleapis.com; frame-src 'self' https://www.google.com https://*.google.com https://www.youtube.com https://*.youtube.com;",
    },
  },

  build: {
    sourcemap: false,
    // 2. Module Preload Polyfill helps the browser discover JS chunks faster
    modulePreload: {
      polyfill: true,
    },
    rollupOptions: {
      output: {
        // 3. Ensuring clean filenames for better caching
        assetFileNames: "assets/[name]-[hash][extname]",
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
});
