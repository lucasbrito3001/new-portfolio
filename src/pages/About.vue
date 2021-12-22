<template>
  <div>
      <section class="about-intro">
        <v-container class="about-intro-cont">
          <header>
            <h2 class="general-subtitles-dark">Sobre</h2>
            <h1 class="general-titles-dark">
              Um pouco sobre quem sou <br />
              e minha trajetória...
            </h1>
          </header>
          <main>
            <p>
              Jovem apaixonado por aprendizado e desafios, acredito que seja esse o
              maior motivo para me tornar um desenvolvedor.
            </p>
            <p>
              Iniciei minha carreira cursando Engenharia de Controle e Automação e
              com o tempo deixei a faculdade de lado para conseguir progredir como
              Desenvolvedor de Software, e então, desde Abril de 2021 estou atuando
              no mercado de trabalho.
            </p>
            <p>
              Gosto muito da área e pretendo me especializar cada dia mais, meu
              objetivo futuro é poder compartilhar meu conhecimento com o máximo de
              pessoas possíveis.
            </p>
          </main>
          <aside>
            <v-btn outlined color="#efff0d" class="read-more-btn">Ler mais</v-btn>
            <br />
            <a href="#skills">
              <v-btn color="#efff0d" class="skills-btn">Skills</v-btn>
            </a>
          </aside>
        </v-container>
      </section>

      <section class="about-skills" id="skills">
        <header>
            <h1 class="general-titles-light">Skills</h1>
        </header>
        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga delectus quaerat perferendis commodi et quisquam, eligendi quas, rem aut, consequatur nobis suscipit dicta. Tempora repellat magni eius veritatis, repudiandae expedita.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit reiciendis placeat voluptatem necessitatibus, ratione neque perspiciatis qui accusantium. Voluptates porro voluptatum ab inventore repellat cum expedita delectus sapiente distinctio in.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem totam doloremque molestiae cumque eveniet, pariatur aliquid aut, nesciunt hic iure repudiandae odio, dolore nobis debitis doloribus. Quia atque accusantium dolorum.</p>
      </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.about-intro {
  background-color: rgb(46, 56, 114);
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

a {
  text-decoration: none;
}

main {
  margin-top: 40px !important;
  color: rgb(255, 255, 255);
  width: 60%;
  margin: auto;
}

aside {
  margin-top: 10px;
  text-align: center;
}

.skills-btn {
  color: rgb(95, 95, 95);
  margin-top: 10px;
}

main p {
  line-height: 35px;
  font-family: "Merriweather";
}

@media screen and (max-width: 992px) {
  .about-intro {
    height: 90vh; /* Fallback para não-suporte a Custom Properties */
    height: calc(var(--vh, 1vh) * 90);
  }

  main {
    width: 100%;
  }

  main p {
    font-size: 13px;
    line-height: 30px;
  }
}
</style>