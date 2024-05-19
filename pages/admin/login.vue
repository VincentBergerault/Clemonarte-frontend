<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="username">Username:</label>
        <input v-model="username" type="text" id="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input v-model="password" type="password" id="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuth } from "~/composables/useAuth";

const username = ref("");
const password = ref("");
const { login } = useAuth();

const handleSubmit = async () => {
  try {
    await login({ username: username.value, password: password.value });
  } catch (error) {
    console.error("Login failed:", error);
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
