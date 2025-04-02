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
  },
});
