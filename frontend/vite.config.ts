import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    // This allows any Cloudflare Tunnel URL to securely connect to your local server
    allowedHosts: [".trycloudflare.com"],
  },
  build: {
    rollupOptions: {
      input: {
        // Main page (index.html)
        main: "index.html",
        // Privacy Policy page (privacy_policy.html)
        privacy: "privacy_policy.html",
        delete: "delete_account.html",
      },
    },
  },
});
