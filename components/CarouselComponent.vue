<template>
  <swiper
    :slides-per-view="1"
    :space-between="30"
    :pagination="{ clickable: true }"
    :navigation="true"
    :autoplay="{ delay: 5000 }"
  >
    <swiper-slide v-for="(image, index) in images" :key="index">
      <img :src="image" :alt="'Image ' + (index + 1)" />
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "/images/dessins/dessin1.png",
  "/images/dessins/dessin2.png",
  "/simages/dessins/dessin3.png",
  // Add more image paths here
];
</script>

<style scoped>
/* Add your custom styles here */
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
