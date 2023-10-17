<template>
  <v-app id="inspire">
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="#E98499">
      <v-toolbar-title style="width: 350px">
        <div style="float: left">
          <v-img src="../static/images/logo.png" height="50px" width="50px" />
        </div>
        <a class="white--text" style="text-decoration: none" text-align="center"
          >&nbsp;Clemonart</a
        >
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
  </v-app>
</template>

<script>
export default {
  name: "Layout",
  data() {
    return {
      items: [
        { title: "T-Shirts" },
        { title: "Jackets" },
        { title: "Shirts" },
        { title: "Jeans" },
        { title: "Shoes" },
      ],
      activeBtn: 1,
    };
  },
};
</script>
