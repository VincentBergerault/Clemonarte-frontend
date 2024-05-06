<template>
  <div class="products-grid">
    <ProductItem
      v-for="product in products"
      :key="product.name.toString()"
      :product="product"
      @click="openModal(product)"
    />
    <ProductDetailModal
      v-if="selectedProduct"
      :product-data="selectedProduct"
      :show="showModal"
      @update:show="showModal = $event"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  products: { type: Array<Product>, required: true },
});

const selectedProduct = ref<Product | null>(null);
const showModal = ref(false);

function openModal(product: Product) {
  selectedProduct.value = product;
  showModal.value = true;
}
</script>

<style>
.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 4 items in a row */
  gap: 16px; /* Adjust the gap as needed */
}
</style>
