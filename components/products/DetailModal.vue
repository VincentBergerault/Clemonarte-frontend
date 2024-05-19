<template>
  <v-dialog
    v-model="show"
    persistent
    max-width="800px"
    @click:outside="closeModal"
  >
    <v-card>
      <v-card-title class="d-none"></v-card-title>
      <!-- Hide default title -->
      <v-card-text>
        <v-container fluid>
          <v-row>
            <v-col cols="12" md="6">
              <v-img :src="productData?.src" aspect-ratio="1"></v-img>
            </v-col>
            <v-col cols="12" md="6" class="product-details">
              <h2 class="product-title">{{ productData?.name }}</h2>
              <div class="price mb-2">
                <h2>{{ productData?.price }}</h2>
              </div>
              <div class="type mb-2">
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
        <v-btn color="blue darken-1" @click="closeModal">Close</v-btn
        ><v-btn color="green darken-1" @click="commanderAction"
          >Commander</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

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
  emit("update:show", false);
  show.value = false;
};

const commanderAction = () => {
  console.log("Commander action initiated");
  // Implement your action here
};
</script>

<style scoped>
.product-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.product-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 12px;
}

.price h2 {
  color: #4a90e2; /* Example blue color for the price */
  font-weight: 500;
}

.type h3 {
  margin-top: 20px;
  font-weight: normal;
  color: #333; /* Dark grey for type title */
}

.type p {
  font-size: 16px;
  color: #666; /* Lighter grey for type description */
}
</style>
