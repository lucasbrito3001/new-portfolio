<template>
  <div>

    <section class="introduction">
      <v-container>
        <v-row class="skills-perfil-row">
          <v-col cols="12" md="8" style="margin: 0 auto;">
            <header>
              <h2 class="general-subtitles-dark">Portfólio</h2>
              <h1 class="general-titles-light">Projetos, estudos e artigos</h1>
              <p class="general-text-light">
                Iniciei minha carreira estudando Desenvolvimento FrontEnd, então
                a maioria dos meus projetos e a maior parte do meu conhecimento
                está concentrado nessa parte, mais especificamente em VueJs.
                Porém atualmente venho estudando bastante e desenvolvendo minhas
                habilidades em BackEnd para me tornar um Dev. FullStack com
                muita bagagem.
              </p>
            </header>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="projects">
      <v-container>
        <v-row>
          <v-col cols="12">
            <h2 class="titles">Projetos e estudos</h2>
          </v-col>
          <v-col
            cols="12"
            md="6"
            v-for="(item, idx) in projectsItems"
            :key="idx"
            class="figure"
          >
            <a :href="item.repo" target="_blank">
              <Figure :image="item.img" :caption="item.caption" />
            </a>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="articles">
      <v-container>
        <v-row>
          <v-col cols="12">
            <h2 class="titles" id="blog-title">Blog (uma nova aventura)</h2>
          </v-col>
          <v-col cols="12">
            <h3 class="general-text-dark" style="text-align: center">Em breve...</h3>
          </v-col>
        </v-row>
      </v-container>
    </section>
    
  </div>
</template>

<script>
import Figure from "../components/Figure.vue";
export default {
  components: {
    Figure,
  },
  data: () => ({
    projectsItems: [
      { img: require("../assets/portfolio/simubank.png"), caption: "Simubank", repo: "https://github.com/lucasbrito3001/simubank-study" },
      { img: require("../assets/portfolio/flags.png"), caption: "Encontrar bandeiras", repo: "https://github.com/lucasbrito3001/countries-nuxt-vuetify" },
      { img: require("../assets/portfolio/coinverter.png"), caption: "Coinverter", repo: "https://github.com/lucasbrito3001/Coinverter" },
      { img: require("../assets/portfolio/calculator.png"), caption: "Calculadora ionic", repo: "https://github.com/lucasbrito3001/calculator-angular-ionic" },
      { img: require("../assets/portfolio/portfolio.png"), caption: "Portfólio", repo: "https://github.com/lucasbrito3001/new-portfolio" },
      { img: require("../assets/portfolio/old-portfolio.png"), caption: "Portfólio (antigo)", repo: "https://github.com/lucasbrito3001/devbrito" },
      { img: require("../assets/portfolio/inception3d.png"), caption: "Inception 3D", repo: "https://github.com/lucasbrito3001/inception3d-cp" },
    ],
  }),
  mounted() {
    window.scrollTo(0, 0)
  },
};
</script>

<style scoped>
.titles {
  color: white;
  font-size: 24px;
  margin: 20px 0;
  font-weight: 700;
  text-align: left;
}

#blog-title {
  color: var(--main-blue);
}

.introduction {
  padding-top: 10vh;
  background-color: var(--main-blue);
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
}

.projects {
  margin-top: -40vh;
  margin-top: calc(var(--vh, 1vh) * -40);
  padding-bottom: 10vh;
}

.articles {
  padding: 30px 0 10vh 0;
  background-color: var(--gray-bg);
}

.figure.col-md-6.col-12 {
  padding: 8px;
}

@media screen and (max-width: 992px) {
  .titles {
    text-align: center;
  }
}
</style>