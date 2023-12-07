<template>
  <div v-if="isVisible" class="alert" :class="{ 'fade-out': isFadingOut }">
    <p>{{ message }}</p>
    <button @click="closeAlert">Close</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isVisible = ref(false);
const isFadingOut = ref(false);
const message = ref("");

const openAlert = (msg: string) => {
  isVisible.value = true;
  message.value = msg;

  // Automatically close the alert after 1.5 seconds
  setTimeout(() => {
    fadeOut();
  }, 1500);
};

const fadeOut = () => {
  isFadingOut.value = true;

  // Close the alert after the fade-out animation completes (assume 1 second for the animation)
  setTimeout(() => {
    closeAlert();
  }, 1000);
};

const closeAlert = () => {
  isVisible.value = false;
  isFadingOut.value = false;
};

defineExpose({
  openAlert,
});
</script>

<style scoped>
.alert {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  background-color: #f44336;
  color: white;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: opacity 1s ease-in-out;
}

.fade-out {
  opacity: 0;
}

.alert button {
  background-color: #fff;
  color: #333;
  border: 1px solid #ccc;
  padding: 5px 10px;
  margin-top: 5px;
  cursor: pointer;
}
</style>
