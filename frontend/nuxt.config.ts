// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@nuxt/image",
    "@pinia/nuxt",
    "@nuxtjs/strapi",
  ],

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  image: {
    format: ["webp"],

    dir: "assets/images",

    strapi: {
      baseURL: 'http://localhost:1337'
    }
  },

  strapi: {
    url: 'http://localhost:1337',
  }
});