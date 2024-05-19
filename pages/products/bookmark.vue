<template>
  <div>
    <h1>Bookmark</h1>
    <ProductsGrid :products="bookmarks" />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useMainStore } from "~/store/index";
const store = useMainStore();

const bookmarks = computed(() => {
  return store.products.filter((product) => product.type === "bookmark");
});
</script>

<style></style>
