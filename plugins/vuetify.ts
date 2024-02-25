import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify, type ThemeDefinition } from "vuetify";

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#216066",
    secondary: "#213d66",
    tertiary: "#a8e6cf",
    quatro: "#f9f9f9",
    cinquo: "#aaaaaa",
    white: "#ffffff",
    lightgrey: "#f9f9f9",
    dark: "#000000",
    black: "#000000",
  },
};

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: "myCustomLightTheme",
      variations: {
        colors: ["primary", "secondary", "lightgrey", "white"],
        lighten: 2,
        darken: 2,
      },
      themes: {
        myCustomLightTheme,
      },
    },
  });
  app.vueApp.use(vuetify);
});
