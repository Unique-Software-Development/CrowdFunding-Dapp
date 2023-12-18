import react from "@vitejs/plugin-react";
import log from 'glog-parser';
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills(), log()],
  define: {
    "process.env": {},
  },
});
