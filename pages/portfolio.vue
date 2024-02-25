<template>
  <div class="portfolio">
    <v-container>
      <div
        v-for="(product, index) in store.products"
        :key="product.name.toString()"
        :class="`portfolio-item ${
          index % 2 === 0 ? 'left-align' : 'right-align'
        }`"
      >
        <div class="image-container">
          <img :src="product.src.toString()" :alt="product.name.toString()" />
        </div>
        <div class="text-container">
          <h2>{{ product.name }}</h2>
          <!-- <p>{{ product.description }}</p> -->
        </div>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
import { useMainStore } from "~/store/index";
const store = useMainStore();
</script>

<style>
.portfolio {
  background-color: rgb(var(--v-theme-lightgrey)); /* Base background color */
}

.portfolio-item {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  padding: 20px;
  border-radius: 10px;
}

.left-align {
  background-color: rgba(var(--v-theme-white-darken-1), 0.7);
}

.right-align {
  flex-direction: row-reverse;
  background-color: rgb(var(--v-theme-lightgrey-darken-2));
}

.image-container {
  flex: 1;
  padding: 15px;
}

.image-container img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.text-container {
  flex: 1;
  padding: 15px;
  text-align: left;
}

.text-container h2 {
  margin-bottom: 10px;
}

.text-container p {
  line-height: 1.6;
}
</style>
