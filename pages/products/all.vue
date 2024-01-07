<template>
  <div>
    <h1>All products</h1>
    <ProductGrid :products="products" />
  </div>
</template>

<script setup>
import { useMainStore } from "~/store/index";
const store = useMainStore();

const products = computed(() => store.products);
</script>

<style></style>
