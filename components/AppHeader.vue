<template>
  <header class="custom-header">
    <div class="logo-title">
      <div class="logo-container">
        <v-img src="/images/logo.png" height="50px" width="50px" />
      </div>
      <div class="site-info">
        <a href="/" class="site-title white--text">Clemonart</a>
      </div>
    </div>

    <nav class="nav-container">
      <ul class="nav-list">
        <!-- <li>
          <NuxtLink to="/about" class="nav-link">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/" class="nav-link">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/art" class="nav-link">Art</NuxtLink>
        </li> -->
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.custom-header {
  background-color: #e98499;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-title {
  display: flex;
  align-items: center;
}

.logo-container {
  margin-right: 10px;
}

.site-info {
  display: flex;
  flex-direction: column;
}

.site-title {
  text-decoration: none;
  font-size: 1.5rem;
  color: #fff;
  margin: 5px 0;
}

.nav-container {
  display: flex;
  align-items: center;
  /* Center the nav links vertically */
}

.nav-list {
  list-style: none;
  padding: 0;
  display: flex;
  margin: 0;
  /* Remove default margin to ensure centering */
}

.nav-link {
  text-decoration: none;
  color: #fff;
  margin: 0 20px;
}
</style>