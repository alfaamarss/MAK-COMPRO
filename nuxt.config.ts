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

  modules: ["@nuxtjs/sitemap"],

  site: {
    url: "https://www.multiarthakreasindo.com",
    name: "PT Multi Artha Kreasindo",
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "id",
      },

      title: "Solusi Epoxy Lantai & Industrial Coating",

      titleTemplate: "%s | PT Multi Artha Kreasindo",

      meta: [
        {
          name: "description",
          content:
            "PT Multi Artha Kreasindo menyediakan solusi epoxy lantai dan industrial coating untuk kebutuhan industri, pabrik, gudang, dan area komersial.",
        },
        {
          name: "theme-color",
          content: "#ffffff",
        },
        {
          property: "og:site_name",
          content: "PT Multi Artha Kreasindo",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:locale",
          content: "id_ID",
        },
        {
          property: "og:title",
          content: "Solusi Epoxy Lantai & Industrial Coating | PT Multi Artha Kreasindo",
        },
        {
          property: "og:description",
          content:
            "Solusi epoxy lantai dan industrial coating untuk kebutuhan industri, pabrik, gudang, dan area komersial.",
        },
      ],

      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/favicon.svg",
        },
      ],
    },
  },
});
