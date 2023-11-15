<template>
  <header>
    <nav>
      <ul>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/art">Art</NuxtLink></li>
      </ul>
    </nav>
  </header>

  <v-toolbar-title style="width: 350px">
    <div style="float: left">
      <v-img src="~/assets/images/logo.png" height="50px" width="50px" />
    </div>
    <a class="white--text" style="text-decoration: none" text-align="center"
      >&nbsp;Clemonart</a
    >
  </v-toolbar-title>
</template>
