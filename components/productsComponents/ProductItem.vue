<template>
  <div v-bind="$attrs">
    <v-hover>
      <template #default="{ isHovering, props }">
        <!-- Correctly destructure hover -->
        <v-card
          v-bind="props"
          class="product-item-card"
          color="grey lighten-4"
          :style="
            isHovering
              ? 'transform: scale(1.05); transition: transform .3s;'
              : ''
          "
          style="text-decoration: none; color: inherit"
        >
          <img
            class="product-image"
            :src="product.src.toString()"
            alt="product.name"
            style="border-radius: 8px"
          />
          <div
            class="product-text"
            :style="
              isHovering ? 'font-size: 1.25em; transition: font-size .3s;' : ''
            "
          >
            <p>{{ product.name }}</p>
          </div>
        </v-card>
      </template>
    </v-hover>
  </div>
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
  overflow: hidden; /* Ensures that the image and overlay do not bleed outside the card */
  border-radius: 12px; /* Rounded corners */
  cursor: pointer;
}

.product-image {
  width: 100%; /* Full width of the card */
  object-fit: cover; /* Keeps aspect ratio without stretching the image */
  aspect-ratio: 16 / 9; /* Set the aspect ratio for the image */
  height: auto;
  transition: transform 0.3s ease-in-out;
}

.product-text {
  padding: 16px;
  text-align: center;
  align-items: center; /* Centers text vertically */
  justify-content: center; /* Centers text horizontally */
  transition: font-size 0.3s; /* Smooth transition for font size */
}
</style>
