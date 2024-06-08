<script setup>
import Navbar from './components/Navbar.vue'
import AboutMe from './components/AboutMe.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Education from './components/Education.vue'
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<template>
  <div class="app">
    <!-- SVG Background -->
    <div id="bg-wrap">
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="Gradient1" cx="50%" cy="50%" fx="0.5%" fy="50%" r=".5">
            <animate attributeName="fx" dur="20s" values="0%;3%;0%" repeatCount="indefinite"></animate>
            <stop offset="0%" stop-color="rgba(15, 0, 75, 1)"></stop>
            <stop offset="100%" stop-color="rgba(50, 0, 100, 0)"></stop>
          </radialGradient>
          <radialGradient id="Gradient2" cx="50%" cy="50%" fx="2.5%" fy="50%" r=".5">
            <animate attributeName="fx" dur="25s" values="0%;3%;0%" repeatCount="indefinite"></animate>
            <stop offset="0%" stop-color="rgba(0, 0, 100, 1)"></stop>
            <stop offset="100%" stop-color="rgba(10, 250, 50, 0)"></stop>
          </radialGradient>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient1)" transform="rotate(0 50 50)">
          <animate attributeName="x" dur="20s" values="25%;0%;25%" repeatCount="indefinite"></animate>
          <animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite"></animate>
          <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="20s" repeatCount="indefinite"></animateTransform>
        </rect>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient2)" transform="rotate(180 50 50)">
          <animate attributeName="x" dur="25s" values="-25%;0%;-25%" repeatCount="indefinite"></animate>
          <animate attributeName="y" dur="24s" values="0%;50%;0%" repeatCount="indefinite"></animate>
          <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="25s" repeatCount="indefinite"></animateTransform>
        </rect>
      </svg>
    </div>
    <!-- Content -->
    <div class="content">
      <Navbar />
      <main>
        <AboutMe/>
        <Education/>
        <div id="section1"></div>
        <Projects />
        <div id="section2"></div>
        <Contact />
      </main>
    </div>
  </div>
</template>

<style scoped>
html, body, #app {
  height: 100%;
  margin: 0;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
}

.app {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; /* Ensure content is positioned relative to the background */
}

#bg-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Ensure the background stays behind the content */
  overflow: hidden;
}

.content {
  width: 100%;
  max-width: 1000px;
  padding: 20px;
  box-sizing: border-box;
  z-index: 1; /* Ensure the content stays above the background */
}
</style>
