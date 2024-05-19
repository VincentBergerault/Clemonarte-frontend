<template>
  <div>
    <h1>Admin</h1>
    <ProductsGrid :products="products" />
  </div>
</template>

<script setup>
import { useMainStore } from "~/store/index";
const store = useMainStore();

const products = computed(() => store.products);

definePageMeta({ middleware: "auth" });
</script>

<style></style>
