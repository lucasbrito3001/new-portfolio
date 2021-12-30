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
  --yellow-home: #efff0d;
  --main-blue: rgb(8, 11, 31);
  --dark-blue: rgb(3, 7, 20);
  --second-blue: rgb(103, 212, 255);
  --gray-text: rgb(87, 87, 87);
  --gray-text-light: rgb(179, 179, 179);
  --gray-bg: rgb(238, 238, 238);
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

.router-view {
  margin-left: 5vw;
}

.general-titles-dark {
  color: var(--main-blue);
  font-size: 30px !important;
  font-weight: 900;
  text-align: center;
  margin: 10px 0;
}

.general-titles-light {
  color: white;
  font-size: 30px !important;
  font-weight: 800 !important;
  text-align: center;
  margin: 10px 0;
}

.general-subtitles-dark {
  color: var(--second-blue);
  font-size: 24px !important;
  font-weight: 800 !important;
  text-align: center;
  margin: 5px auto;
}


.general-subtitles-light {
  color: white;
  font-size: 24px !important;
  font-weight: 900;
  text-align: center;
  margin: 5px auto;
}

.general-text-dark {
  color: var(--gray-text);
  font-size: 18px !important;
  font-weight: 300;
  text-align: left;
  width: 60%;
  margin: 5px auto;
  font-family: "Merriweather", serif;
}

.general-text-light {
  color: var(--gray-text-light);
  font-size: 18px !important;
  font-weight: 300;
  text-align: left;
  width: 100%;
  margin: 5px auto;
  font-family: "Merriweather", serif;
}

.skills-item {
  box-shadow: 1px 1px 1px 1px #111111, -1px -1px 10px 1px rgb(138, 138, 138);
  background-color: var(--main-blue);
  color: white;
  border-radius: 10px;
  text-align: center;
  padding: 10px 0;
  font-size: 14px;
}

.contacts-item {
  color: white;
  border-radius: 10px;
  text-align: center;
  padding: 10px 0;
  font-size: 14px;
}

.academic-list-item {
  padding: 4px 10px;
  font-size: 14px;
  border-left: 1px solid var(--main-blue);
  margin-left: 5px;
}

.academic-list-col {
  padding: 0px !important;
}

.mb-2 {
  margin-bottom: 10px;
}
@media screen and (max-width: 992px) {
  .router-view {
    margin-left: 0vw;
  }

  .general-text-light, .general-text-dark {
    width: 100%;
  }
}
</style>