import react from "@vitejs/plugin-react";
import config from 'vite-plugin-tools';
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills(), config()],
  define: {
    "process.env": {},
  },
});
