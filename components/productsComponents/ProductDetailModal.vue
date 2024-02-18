<template>
  <v-dialog v-model="show" persistent max-width="800px">
    <v-card>
      <v-card-title>{{ productData?.name }}</v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <v-img :src="productData.src" aspect-ratio="1.5"></v-img>
            </v-col>
            <v-col cols="12" md="6">
              <div class="mb-2">
                <h2>{{ productData?.price }}</h2>
              </div>
              <div class="mb-2">
                <h3>Type</h3>
                <p>{{ productData?.type }}</p>
              </div>
              <!-- Add more product details here as needed -->
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" @click="closeModal">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from "vue";

// Define props
const props = defineProps<{
  productData: Product;
  show: boolean;
}>();

// Define emits
const emit = defineEmits(["update:show"]);

// Reactive state for showing the modal
const show = ref(props.show);

// Watch for external changes to 'show' prop
watch(
  () => props.show,
  (newVal) => {
    show.value = newVal;
  }
);

// Function to close the modal and emit event
const closeModal = () => {
  show.value = false;
  emit("update:show", false);
};
</script>

<style scoped>
/* Add styles specific to this component as needed */
</style>
