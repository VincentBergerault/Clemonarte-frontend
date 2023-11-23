<template>
  <div>
    <v-container>
      <div>
        <div class="text-center">
          <div v-for="product in store.products" :key="product.name.toString()">
            <ProductItem :product="product"></ProductItem>
          </div>
        </div>
      </div>
    </v-container>

    <v-btn @click="store.CreateProduct()"> create </v-btn>
    <br />
    <br />
    <br />
  </div>
</template>

<script lang="ts" setup>
import { useMainStore } from "~/store/index";
const store = useMainStore();
</script>

<style></style>
