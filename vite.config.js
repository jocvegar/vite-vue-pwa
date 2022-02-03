import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      includeAssets: [
        "favicon.svg",
        "favicon.ico",
        "robots.txt",
        "apple-touch-icon.png",
      ],
      workbox: {
        globPatterns: [
          "**.{js,css,html,png,jpg,jpeg,svg,gif}",
          "**/*.{js,css,html,png,jpg,jpeg,svg,gif}",
          "**/*.*{js,css,html,png,jpg,jpeg,svg,gif}",
        ],
      },
      manifest: {
        name: "Dr. JoC",
        short_name: "Dr. JoC",
        description: "Diagnóstico de Dr. JoC",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        //   srcDir: "src",
        //   filename: "sw.js",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
