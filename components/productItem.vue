<template>
  <v-hover>
    <v-card class="mx-auto" color="grey lighten-4" max-width="600">
      <img
        class="white--text align-end"
        :aspect-ratio="16 / 9"
        :src="product.src.toString()"
      />
      <v-card-text class="text--primary">
        <div>
          <p style="text-decoration: none">
            {{ product.name }}
          </p>
        </div>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script setup lang="ts">
const props = defineProps({
  product: { type: Object, required: true },
});
</script>
