import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
// for production deployment change base: "/" when depolyed with Updated DNS a CNAME for simple testing GitPages base: "/mk-business/"
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/mk-business/",
});
