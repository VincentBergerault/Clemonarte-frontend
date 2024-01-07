<template>
  <div>
    <h1>Drawings</h1>
    <ProductGrid :products="draws" />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useMainStore } from "~/store/index";
const store = useMainStore();

const draws = computed(() => {
  return store.products.filter((product) => product.type === "draw");
});
</script>

<style></style>
