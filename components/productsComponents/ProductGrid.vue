<template>
  <div class="products-grid">
    <ProductItem
      v-for="product in products"
      :key="product.name.toString()"
      :product="product"
    />
  </div>
</template>

<script setup lang="ts">
import type { Product } from "~/utils/types";

defineProps({
  products: { type: Array<Product>, required: true },
});
</script>

<style>
.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 items in a row */
  gap: 16px; /* Adjust the gap as needed */
}
</style>
