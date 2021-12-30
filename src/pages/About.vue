<template>
  <div id="general-div">
    <section class="about-intro">
      <v-container class="about-intro-cont">
        <header>
          <h2 class="general-subtitles-dark">Sobre</h2>
          <h1 class="general-titles-light">
            Um pouco sobre quem sou <br />
            e minha trajetória...
          </h1>
        </header>
        <main>
          <p class="general-text-light">
            Jovem apaixonado por aprendizado e desafios, acredito que seja esse
            o maior motivo para me tornar um desenvolvedor.
          </p>
          <p class="general-text-light">
            Gosto muito da área e pretendo me especializar cada dia mais, meu
            objetivo futuro é poder compartilhar meu conhecimento com o máximo
            de pessoas possíveis.
          </p>
        </main>
        <footer>
          <a href="#skills">
            <v-btn color="#67d4ff" class="skills-btn" outlined>Ler mais</v-btn>
          </a>
          <ArrowDown/>
        </footer>
      </v-container>
    </section>

    <section class="about-skills" id="skills">
      <v-container>
        <v-row class="skills-perfil-row">
          <v-col cols="12">
            <header>
              <h2 class="general-subtitles-dark">Currículo</h2>
              <h1 class="general-titles-dark">
                Informações pessoais, conhecimentos e <br />
                habilidades
              </h1>
              <p class="general-text-dark">
                Tenho front-end como minha stack principal, porém estou em
                constante estudo para melhorar minha habilidade com back-end, atualmente desenvolvo a maioria das minhas aplicações em VueJs e NodeJs, porém também pratico React e um pouco de PHP com Laravel.
              </p>
            </header>
          </v-col>
          <v-col cols="12" md="6" class="perfil-col">
            <header>
              <h2 class="skills-perfil-title">Perfil</h2>
            </header>
            <section class="perfil-text">
              <p v-for="(item, idx) in perfilItems" :key="idx">
                <b>{{ item.label }} </b><br />
                {{ item.text }}
              </p>
            </section>
          </v-col>
          <v-col cols="12" md="6" class="skills-col">
            <header>
              <h1 class="skills-perfil-title">Skills</h1>
            </header>
            <Lists
              :listToRender="skillsItems"
              typeImages="color"
              :colXs="4"
              :colMd="3"
              styleListItem="skills-item"
            />
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="about-cv" id="skills">
      <v-container>
        <v-row class="skills-perfil-row">
          <v-col cols="12">
            <header>
              <h2 class="general-subtitles-dark">Carreira</h2>
              <h1 class="general-titles-dark">
                Experiência profissional e <br />
                acadêmica
              </h1>
            </header>
          </v-col>
          <v-col cols="12" md="6" class="perfil-col">
            <header>
              <h2 class="skills-perfil-title">
                Profissional
              </h2>
            </header>
            <Lists
              :listToRender="professionalXp"
              typeImages="ios-glyphs"
              iconColor="080b1f"
              :colXs="12"
              styleListItem="academic-list-item"
              styleListCol="academic-list-col"
              :useDivCircle="true"
              :useMoreDescriptions="true"
              :moreDescriptionsList="professionalMoreDescriptionsList"
            />
          </v-col>
          <v-col cols="12" md="6" class="skills-col">
            <header>
              <h2 class="skills-perfil-title">
                Acadêmica
              </h2>
            </header>
            <Lists
              :listToRender="academicXp"
              typeImages="ios-glyphs"
              iconColor="080b1f"
              :colXs="12"
              styleListItem="academic-list-item"
              styleListCol="academic-list-col"
              :useDivCircle="true"
              :useMoreDescriptions="true"
              :moreDescriptionsList="academicMoreDescriptionsList"
            />
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
import ArrowDown from '../components/ArrowDown.vue'
import Lists from "../components/Lists.vue";
export default {
  components: {
    Lists,
    ArrowDown
  },
  data: () => ({
    perfilItems: [
      { label: "Nome: ", text: "Lucas de Brito" },
      { label: "Hobbies: ", text: "Games, Música, Esportes, Programação" },
      { label: "Nascimento: ", text: "30 de Janeiro de 2000" },
      { label: "GitHub: ", text: "@lucasbrito3001" },
      { label: "LinkedIn: ", text: "@webdevbrito" },
      { label: "email: ", text: "devlucasmail@gmail.com" },
    ],
    skillsItems: [
      { icon: "vue-js", desc: "VueJs" },
      { icon: "react-native", desc: "ReactJs" },
      { icon: "angularjs", desc: "AngularJs" },
      { icon: "javascript--v1", desc: "JavaScript" },
      { icon: "nodejs", desc: "NodeJs" },
      { icon: "php", desc: "PHP" },
      { icon: "api", desc: "API" },
      { icon: "html-5", desc: "HTML5" },
      { icon: "css3", desc: "CSS3" },
      { icon: "sass", desc: "SASS" },
      { icon: "bootstrap", desc: "Bootstrap" },
      { icon: "mysql-logo", desc: "MySQL" },
      { icon: "git", desc: "Git" },
      { icon: "figma--v1", desc: "Figma" },
    ],
    academicXp: [
      { icon: "computer", desc: "HTML5, CSS3, JavaScript" },
      { icon: "activity-grid", desc: "Técnico em Administração de Empresas" },
      { icon: "book-and-pencil", desc: "Ensino Médio" },
    ],
    academicMoreDescriptionsList: [
      [{ desc: "Curso em Vídeo" }, { desc: "40h" }, { desc: "Online" }],
      [
        { desc: "Etec Dr. Renato Cordeiro" },
        { desc: "2015 - 2017" },
        { desc: "Birigui - SP" },
      ],
      [
        { desc: "Etec Dr. Renato Cordeiro" },
        { desc: "2015 - 2017" },
        { desc: "Birigui - SP" },
      ],
    ],
    professionalXp: [
      { icon: "monitor", desc: "FrontEnd Developer" },
      { icon: "monitor", desc: "FullStack Developer" },
    ],
    professionalMoreDescriptionsList: [
      [{ desc: "Mova P2P" }, { desc: "4 meses" }, { desc: "Itajubá - SP" }],
      [
        { desc: "Lexart Labs" },
        { desc: "Agosto 2021 - atual" },
        { desc: "Montevidéu - UY" },
      ],
    ],
  }),
  mounted() {
    window.scrollTo(0, 0)
  },
  methods: {
  },
};
</script>

<style scoped>

ul {
  list-style: none;
}

.about-intro {
  background-color: var(--main-blue);
  height: 100vh;
  padding: 10px 0;
}

.about-intro-cont {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

h1,
h2 {
  text-align: center;
}

h2 {
  font-weight: 400;
}

.skills-perfil-title {
  color: var(--main-blue);
  font-size: 24px;
  margin: 20px 0;
  font-weight: 700;
  text-align: left;
}

.skills-perfil-row {
  padding: 0 10px;
}

.skills-text,
.perfil-text {
  font-weight: 300;
  color: var(--main-blue);
  margin-top: 20px;
}

.perfil-text p {
  margin-bottom: 15px;
  color: var(--gray-text);
  font-weight: 400;
}

.perfil-text p b {
  color: var(--main-blue);
  font-weight: 700;
}

a {
  text-decoration: none;
}

main {
  color: rgb(255, 255, 255);
  width: 60%;
  margin: 0 auto;
}

footer {
  margin-top: 40px;
  text-align: center;
}

.skills-btn {
  color: rgb(0, 0, 0);
}

main p {
  line-height: 35px;
  font-family: "Merriweather";
}

.about-skills,
.about-cv {
  padding: 30px 0;
}

.about-cv {
  background-color: var(--gray-bg);
}

@media screen and (max-width: 992px) {
  .about-intro {
    height: 90vh; /* Fallback para não-suporte a Custom Properties */
    height: calc(var(--vh, 1vh) * 90);
  }

  main {
    width: 100%;
  }

  h1 {
    font-size: 20px;
  }

  h2 {
    font-size: 17px;
  }

  main p {
    font-size: 13px;
    line-height: 30px;
  }

  .about-cv {
    padding: 30px 0 15vh 0;
  }

  .text-curriculo {
    width: 100%;
  }

  .skills-perfil-title {
    text-align: center;
  }
}

</style>