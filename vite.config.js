import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // important for domain / subdomain access
    port: 5173, // choose fixed port
    strictPort: true, // prevent auto port change
    allowedHosts: ["wheretoafrica.manoramaseoservice.com"],
  },
});
