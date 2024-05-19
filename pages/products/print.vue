<template>
  <div>
    <h1>Prints</h1>
    <ProductsGrid :products="prints" />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useMainStore } from "~/store/index";
const store = useMainStore();

const prints = computed(() => {
  return store.products.filter((product) => product.type === "print");
});
</script>

<style></style>
