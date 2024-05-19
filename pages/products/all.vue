<template>
  <div>
    <h1>All products</h1>
    <ProductsGrid :products="products" />
  </div>
</template>

<script setup>
import { useMainStore } from "~/store/index";
const store = useMainStore();

const products = computed(() => store.products);
</script>

<style></style>
