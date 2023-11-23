<template>
    <div>
        <div class="title">
            <h2>Login</h2>
        </div>
        <div class="container form">
            <label for="uname"><b>Username</b></label>
            <input v-model="user.username" type="text" class="input" placeholder="Enter Username" name="uname" required />

            <label for="psw"><b>Password</b></label>
            <input v-model="user.password" type="password" class="input" placeholder="Enter Password" name="psw" required />

            <button @click.prevent="login" class="button">Login</button>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const user = ref({
    username: '',
    password: '',
});

const router = useRouter()

const login = () => {
    // Perform your login logic here
    // For simplicity, let's just check if username and password are not empty
    if (user.value.username && user.value.password) {
        // Redirect to a protected route after successful login
        router.push('/index')
    } else {
        // Handle login failure
        console.error('Invalid credentials')
    }
}
</script>
  