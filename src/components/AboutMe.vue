<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import CartoonHead from './threeJSprojects/CartoonHead.vue';
</script>

<template>
  <div class="presentation">
    <div class="head">
      <CartoonHead/>
      <h1>{{ t('welcome') }}</h1>
    </div>
    <p>{{ t('about_description') }}</p>
  </div>
</template>

<style scoped>
.presentation {
  justify-content: center;
  margin-top : 100px;
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
</style>