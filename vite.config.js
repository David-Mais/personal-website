import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/personal-website",
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["react-icons/fa"], // Add this line if you're still facing issues
    },
  },
});
