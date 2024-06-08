<script setup>
import LanguageSwitcher from './LanguageSwitcher.vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<template>
    <nav class="navbar">
       <ul class="navbar-items">
        <p>Leonard Maurin Noblet</p>
          <li>
            <button @click="scrollToTop()">{{ t('about') }}</button>
          </li>
          <li v-for="(section, index) in sections" :key="index">
           <button @click="scrollToSection(section.id)">{{ section.name }}</button>
          </li>
          <div class="languageswitcher">
            <LanguageSwitcher/>
          </div>
       </ul>
    </nav>
</template>
   
<script>
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling animation
    });
}

export default {
data() {
    return {
      sections: [
        { id: 'section1', name: 'Projects' },
        { id: 'section2', name: 'Contact' },
      ],
    };
},
methods: {
    scrollToSection(id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
},
};
</script>

<style scoped>
  .languageswitcher {
    display: flex;
  }

  .navbar {
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgb(0, 0, 0, 0.5);
    padding: 20px 0;
    display: flex;
    justify-content: space-between; /* Space between items */
    align-items: center; /* Center items vertically */
  }

  .navbar-items {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    flex-grow: 1;
    justify-content: center;
    align-items: center; /* Center items vertically */
  }

  .navbar-items p, .navbar-items li {
    margin: 0 10px;
  }

  .navbar button {
    background-color: rgb(154, 20, 173);
    border: 3px solid var(--color-border);
    border-color: rgb(100, 80, 220);
    border-radius: 60px;
    color: white;
    padding: 10px 20px;
    font-family: "comfortaa";
    cursor: pointer;
    margin-left : 20px;
    margin-right: 20px;
  }

  .navbar button:hover {
    background-color: rgb(0, 150, 150);
  }

  p {
    color: lightgrey;
    font-family: "comfortaa";
  }
</style>
