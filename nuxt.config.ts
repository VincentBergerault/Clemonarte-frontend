// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_colors.scss" as *;',
        },
      },
    },
    vue: {
      template: {
        transformAssetUrls,
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
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "@pinia/nuxt",
  ],
  components: [
    {
      path: "~/components", // will get any components nested in let's say /components/test too
      pathPrefix: false,
    },
  ],
  // server: {
  //   port: process.env.PORT, // par défaut: 3000
  // },
});
