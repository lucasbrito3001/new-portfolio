<template>
  <div>
    <Navbar/>
    <router-view class="router-view"></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
export default {
  components: {
    Navbar
  },
  mounted() {
    let vh = window.innerHeight * 0.01;
 
    // Configura o valor em --vh na raiz do documento
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
}
</script>

<style>
:root {
  --yellow-home: #efff0d
}

html, body {
  padding: 0px;
  margin: 0px;
  scroll-behavior: smooth;
}

* {
  font-family: 'Roboto', 'sans-serif';
  box-sizing: border-box;
}

.general-titles-dark {
  color: white;
}

.general-subtitles-dark {
  color: var(--yellow-home);
}

.general-titles-light {
  color: black;
}

.general-subtitles-light {
  color: var(--yellow-home);
}
</style>