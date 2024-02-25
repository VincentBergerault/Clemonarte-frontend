<template>
  <nav class="menu">
    <div class="menu-group">
      <NuxtLink class="button" to="/portfolio">Portfolio</NuxtLink>
      <div class="dropdown">
        <NuxtLink class="button dropbtn" to="/products/all">Produits</NuxtLink>
        <div class="dropdown-content">
          <NuxtLink to="/products/bookmark">Bookmark</NuxtLink>
          <NuxtLink to="/products/draw">Draw</NuxtLink>
          <NuxtLink to="/products/print">Print</NuxtLink>
        </div>
      </div>
    </div>

    <NuxtLink to="/">
      <img src="/images/logo2.png" alt="Menu Image" class="menu-image"
    /></NuxtLink>

    <div class="menu-group">
      <NuxtLink class="button" to="/about">A propos</NuxtLink>

      <NuxtLink class="button" to="/contact">Contact</NuxtLink>
    </div>
  </nav>
</template>

<script>
export default {
  // Your component logic
};
</script>

<style>
.menu {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 1.1em; /* Increase the font size for bigger menu items */
}

.menu-group {
  display: flex;
  align-items: center;
}

.menu-image {
  max-height: 150px; /* Adjust as needed for a larger image */
  margin: 0 30px; /* Increased margin for a smooth look */
}

.dropbtn {
  display: block;
  width: 150px !important;
  /* background-color: rgb(var(--v-theme-tertiary)); Light green background */
  /* color: white; White text color */
  border: none;
  border-radius: 5px; /* Rounded corners */
  cursor: pointer;
  transition:
    background-color 0.3s,
    transform 0.2s,
    box-shadow 0.2s;
}

/* Define a common class for all buttons to ensure uniform size */
.button {
  background-color: rgb(var(--v-theme-secondary)); /* Light green background */
  color: white; /* White text color */
  padding: 10px 20px;
  border: none;
  border-radius: 5px; /* Rounded corners */
  cursor: pointer;
  transition:
    background-color 0.3s,
    transform 0.2s,
    box-shadow 0.2s;
  width: 150px; /* Fixed width */
  height: 40px; /* Fixed height */
  text-align: center;
  line-height: 20px; /* Align text vertically */
  margin: 0 50px;
}

.button:hover {
  background-color: rgb(
    var(--v-theme-secondary-lighten-2)
  ); /* Light blue color for hover effect */
  transform: translateY(-2px); /* Slight raise effect on hover */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  left: 0; /* Align with the left edge of the dropbtn */
  top: 100%; /* Position just below the dropbtn */
  background-color: rgb(
    var(--v-theme-secondary)
  ); /* Light background for the dropdown */
  box-shadow: 0px 8px 16px 0px rgba(var(--v-theme-black), 0.1);
  z-index: 1;
  border-radius: 5px; /* Rounded corners */
  overflow: hidden; /* To respect border radius */
  width: 150px; /* Match the width of the buttons */
  margin: 0 50px;
}

.dropdown-content a {
  color: rgb(var(--v-theme-white));
  padding: 10px 20px; /* Match the padding of the buttons */
  text-decoration: none;
  display: block;
  transition: background-color 0.3s;
  text-align: left; /* Align text to the left */
}

.dropdown-content a:hover {
  background-color: rgb(
    var(--v-theme-secondary-lighten-2)
  ); /* Light green background for hover */
}

.dropdown:hover .dropdown-content {
  display: block;
}

/* Additional styling as needed */
</style>
