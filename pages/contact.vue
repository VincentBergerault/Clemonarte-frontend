<template>
  <div class="contact-form-container">
    <h1>Contact Us!</h1>

    <form class="contact-form" @submit.prevent="handleSubmit">
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

      <button type="submit" class="submit-button">Send Message</button>
    </form>
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
    handleSubmit: function () {
      const formData = new FormData();

      for (const [key, value] of Object.entries(this.form)) {
        formData.append(key, value);
      }

      //   await axios
      //     .post("{Formeezy-Endpoint}", formData)
      //     .then(({ data }) => {
      //       const { redirect } = data;
      //       // Redirect used for reCAPTCHA and/or thank you page
      //       window.location.href = redirect;
      //     })
      //     .catch((e) => {
      //       window.location.href = e.response.data.redirect;
      //     });
    },
  },
};
</script>

<style>
.contact-form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 40px;
  background-color: #f3f4f6;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.contact-form h1 {
  margin-bottom: 30px;
  color: #333;
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
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.contact-form .submit-button:hover {
  background-color: #0056b3;
}
</style>
