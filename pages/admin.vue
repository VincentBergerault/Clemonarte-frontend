<template>
  <div class="file-upload-container">
    <button @click="openProduct">Add Product</button>
    <AddProductModal
      v-show="showAddProductModal"
      @close-modal="showAddProductModal = false"
    />
  </div>
</template>

<script lang="ts" setup>
import AddProductModal from "~/components/AddProductModal.vue";

const showAddProductModal = ref(false);

const openProduct = () => {
  showAddProductModal.value = true;
};
</script>

<style scoped></style>
