<template>
  <v-hover>
    <v-card class="product-item-card" color="grey lighten-4">
      <img
        class="product-image"
        :src="product.src.toString()"
        alt="product.name"
      />
      <v-card-text class="text--primary product-text">
        <p>{{ product.name }}</p>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script setup lang="ts">
defineProps({
  product: { type: Object, required: true },
});
</script>

<style scoped>
.product-item-card {
  max-width: 100%; /* Ensures card does not exceed grid cell */
  height: 100%; /* Full height of the grid cell */
  display: flex;
  flex-direction: column;
}

.product-image {
  width: 100%; /* Full width of the card */
  object-fit: cover; /* Keeps aspect ratio without stretching the image */
  aspect-ratio: 16 / 9; /* Set the aspect ratio for the image */
}

.product-text {
  flex-grow: 1; /* Allows text section to fill remaining space */
  display: flex;
  align-items: center; /* Centers text vertically */
  justify-content: center; /* Centers text horizontally */
  padding: 10px;
}
</style>
