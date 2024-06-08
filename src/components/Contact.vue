<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<template>
  <div class="presentation">
    <h1>{{ t('contact_intro') }}</h1>
    <a href="https://www.linkedin.com/in/leonard-maurin-noblet/">
      <img class="linkedin" src="../assets/icons/LinkedIn_icon.png" alt="Linkedin">
      LinkedIn
    </a>
    <a href="mailto:leonard.maurin@gmail.com">
      <img class="mail" src="../assets/icons/mail.png" alt="Mail">
      leonard.maurin@gmail.com
    </a>
  </div>
</template>

<style scoped>
    .presentation{
        text-align: center;
        margin: 30px;
    }
    .linkedin{
        vertical-align: middle;
        height: 100px;
        width: 100px;
        margin: 30px;

    }
    .mail{
        margin: 30px;
        vertical-align: middle;
        height: 80px;
        width: 110px; 
    }
    h1 {
        text-align: center;
    }
    a {
        display: inline-block;
        text-decoration: none;
        margin-right: 10px; /* Adjust as needed */
    }
</style>
