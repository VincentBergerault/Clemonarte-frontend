// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_colors.scss" as *;',
        },
      },
    },
  },
  css: ["~/assets/css/main.css"],
  build: {
    transpile: ["vuetify"],
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.BACKEND_URL,
    },
  },
  modules: ["@pinia/nuxt", "vuetify-nuxt-module"],
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: "./vuetify.config.ts", // <== you can omit it
  },
  components: [
    {
      path: "~/components", // will get any components nested in let's say /components/test too
      // pathPrefix: false,
    },
  ],
});
