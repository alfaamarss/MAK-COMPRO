import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2026-10-03",

  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  devtools: {
    enabled: true,
  },

  app: {
    head: {
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    },
  },
});
