<template>
  <div class="about-page">
    <h1>About Us</h1>
    <section class="hero">
      <img :src="heroImage" alt="About Us" class="hero-image" />
    </section>

    <div class="content-sections">
      <section class="content right-align">
        <div class="text">
          <h2>Our Mission</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="image">
          <img src="/images/mission-image.png" alt="Our Mission" />
        </div>
      </section>

      <section class="content left-align">
        <div class="image">
          <img src="/images/team-image.jpg" alt="Our Team" />
        </div>
        <div class="text">
          <h2>Our Team</h2>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>

      <section class="content right-align">
        <div class="text">
          <h2>Contact Information</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <div class="image">
          <img src="/images/contact-image.jpg" alt="Contact" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heroImage: "/images/me.jpg",
    };
  },
};
</script>

<style>
.about-page {
  text-align: center;
}

.hero {
  position: relative;
  text-align: center;
}

.hero-image {
  width: 100%;
  height: auto;
  max-width: 1200px; /* Set the maximum width for the hero image */
  margin: 0 auto; /* Center the image if it's smaller than the container */
}

.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}

.content-sections {
  max-width: 1200px;
  margin: 0 auto;
}

.content {
  display: flex;
  align-items: center;
  margin: 50px 0;
}

.content .text,
.content .image {
  flex: 1;
}

.right-align .text {
  padding-right: 20px;
  text-align: right;
}

.left-align .text {
  padding-left: 20px;
  text-align: left;
}

.content .image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}
</style>
