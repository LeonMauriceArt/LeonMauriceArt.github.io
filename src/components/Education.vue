<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n(); // Ensure correct import and setup of useI18n
</script>

<template>
  <div class="presentation">
    <div class="head">
      <h1>{{ t('educational') }}</h1>
    </div>
    <div class="image-container">
      <a href="https://www.nouvellesimages.xyz/jeuvideo?lang=en"><img src="/src/assets/icons/esagames.jpg" alt="Image 2"></a>
      <a href="https://42lyon.fr/"><img src="/src/assets/icons/42.png" alt="Image 3"></a>
    </div>
  </div>
</template>

<style scoped>
.presentation {
  justify-content: center;
  margin-top: 100px;
  align-items: center;
  text-align: center;
}

.head {
  display: inline-block;
  align-items: center;
  margin: 0 auto; /* Center horizontally */
}

.head h1 {
  font-weight: 700;
  font-size: 2.0rem;
  position: relative;
  text-align: center;
}

h1 {
  font-family: "comfortaa";
  font-size: 20px;
  margin: 50px;
  color: lightgrey;
}

.presentation h1 {
  text-align: center;
}

.presentation h3 {
  text-align: center;
}

p {
  text-align: justify;
  font-family: "Lucida Console", "Courier New", monospace;
  margin-top: 50px;
}

.image-container {
  display: flex; /* Use flexbox for horizontal layout */
  margin-top: 20px; /* Adjust margin as needed */
  margin-bottom: 100px;
}

.image-container img {
  width: 30%; /* Adjust width of images as needed */
}
</style>
