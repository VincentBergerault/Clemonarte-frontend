import { defineVuetifyConfiguration } from "vuetify-nuxt-module/custom-configuration";

const myCustomLightTheme = {
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
export default defineVuetifyConfiguration({
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
