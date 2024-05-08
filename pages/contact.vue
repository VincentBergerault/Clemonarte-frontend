<template>
  <div class="contact-form-container">
    <h1>Contact Us!</h1>

    <div class="contact-form">
      <div class="input-group">
        <input
          v-model="form.name"
          type="text"
          name="name"
          placeholder="Enter your name"
          required
        />
      </div>

      <div class="input-group">
        <input
          v-model="form.email"
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />
      </div>

      <div class="input-group">
        <textarea
          v-model="form.message"
          placeholder="Your message"
          name="message"
          required
        ></textarea>
      </div>

      <button class="submit-button" @click="submitContact()">
        Send Message
      </button>
    </div>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "ContactForm",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    submitContact: async function () {
      try {
        await useApiFetch("api/contact", {
          method: "POST",
          body: JSON.stringify(this.form),
        });
        alert("Message sent successfully!");
        // Optionally, reset the form fields after successful submission
        this.form.name = "";
        this.form.email = "";
        this.form.message = "";
      } catch (error) {
        console.error("Error sending message:", error);
        alert(
          "An error occurred while sending the message. Please try again later."
        );
      }
    },
  },
};
</script>

<style>
.contact-form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 40px;
  background-color: rgb(var(--v-theme-lightgrey));
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(var(--v-theme-black), 0.1);
  text-align: center;
}

.contact-form h1 {
  margin-bottom: 30px;
  color: rgb(var(--v-theme-dark-lighten-1));
}

.contact-form .input-group {
  margin-bottom: 20px;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  margin-top: 8px;
  box-sizing: border-box;
  background-color: rgb(var(--v-theme-white));
  box-shadow: 0 2px 4px rgba(var(--v-theme-black), 0.1);
}

.contact-form textarea {
  height: 120px;
  resize: none;
}

.contact-form .submit-button {
  width: 100%;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background-color: rgb(var(--v-theme-secondary));
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.contact-form .submit-button:hover {
  background-color: rgb(var(--v-theme-secondary-lighten-2));
}
</style>
