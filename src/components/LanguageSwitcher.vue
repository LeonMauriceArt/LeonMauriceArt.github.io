<template>
    <div class="languageswitcher">
      <button @click="setLanguage('fr')" class="lang-button">
        <img src="../assets/icons/fr-icon.png" alt="French">
      </button>
      <button @click="setLanguage('en')" class="lang-button">
        <img src="../assets/icons/en-icon.png" alt="English">
      </button>
    </div>
  </template>
  
  <script setup>
  import { useI18n } from 'vue-i18n';
  import { watchEffect } from 'vue';
  
  const { locale, t } = useI18n();
  
  const setLanguage = (newLang) => {
    locale.value = newLang;
    localStorage.setItem('lang', newLang);
  };
  
  watchEffect(() => {
    const storedLang = localStorage.getItem('lang');
    if (storedLang) {
      locale.value = storedLang;
    }
  });
</script>

<style>



.lang-button {
  width: 50px; /* Adjust the width of the button */
  height: 50px; /* Adjust the height of the button */
  border-radius: 100%; /* Make the button circular */
  border-color: blueviolet;
  background-color: #f0f0f000; /* Background color of the button */
  margin-right: 8px; /* Adjust margin between buttons */
  overflow: hidden;
  /* display: flex; Use flexbox for centering */
  /* justify-content: right; */
  /* align-items: center; Center vertically */
}

.lang-button img {
  width: 100px;
  height: 50px;
  max-width: 100%;
  max-height: 100%; 
}
</style>