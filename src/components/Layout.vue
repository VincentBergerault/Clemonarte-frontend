<template>
  <v-app id="inspire">
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="#E98499">
      <v-toolbar-title style="width: 350px">
        <div style="float: left">
          <v-img src="../static/images/logo.png" height="50px" width="50px" />
        </div>
        <a
          class="white--text"
          style="text-decoration: none"
          text-align="center"
        >
          &nbsp;Clemonart
        </a>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down pl-10 ml-4"
      />
    </v-app-bar>
    <br />
    <v-content />

    <router-view />

    <v-footer :padless="true">
      <v-card
        flat
        tile
        width="100%"
        style="background-color: #e98499; text-align: center"
      >
        <br />
        <v-card-text class="white--text pt-0">
          This Website is currently a non profit website, it's only purpose is
          to represent the art of Clemonart and to provide a proper gallery.
          <br />
          In a not so far future, this website will be able to provide prices
          for the paintings, via Paypal by contacting the artist Clemonart.
          <br />
          Thank you for your understanding.
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "LayoutComponent",
  data() {
    return {};
  },
};
</script>
