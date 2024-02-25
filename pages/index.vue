<template>
  <div>
    <v-container>
      {{ store.products }}
      <div class="marketplace">
        <div
          v-for="product in store.products"
          :key="product.name.toString()"
          class="product-card"
        >
          <ProductItem :product="product"></ProductItem>
        </div>
      </div>
    </v-container>

    <br />
    <br />
    <br />
  </div>
</template>

<script lang="ts" setup>
import { useMainStore } from "~/store/index";
const store = useMainStore();
</script>

<style>
.marketplace {
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(250px, 1fr)
  ); /* Auto-fit columns */
  gap: 20px;
}

.product-card {
  /* border: 1px solid rgb(var(--v-theme-lightgrey-darken-2)); */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  width: 250px; /* Fixed width */
  height: 300px; /* Fixed height */
  margin: 0 auto; /* Center in grid cell */
}

/* Styling for ProductItem, if needed */
.product-card > ProductItem {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}

@media (max-width: 768px) {
  .marketplace {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on smaller screens */
  }
}
</style>
