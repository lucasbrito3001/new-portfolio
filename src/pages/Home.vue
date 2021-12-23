<template>
  <main>
    <v-container class="home-page">
      <header>
        <h2 class="subtitle">PORTFÓLIO</h2>
        <h1 class="title">Lucas de Brito</h1>
        <h3 class="stack">| FULL-STACK DEVELOPER |</h3>
        <v-btn outlined color="#ffffff" class="see-more-button">
          Ver mais
          <img
            class="see-more-arrow"
            src="https://img.icons8.com/ios/16/ffffff/expand-arrow--v2.png"
          />
        </v-btn>
      </header>
      <footer>
        <ul>
          <li v-for="(item, idx) in footerItems" :key="idx">
            <a :href="item.route" target="_blank">
              <img class="footer-home-img"
                :src="`https://img.icons8.com/ios-filled/48/ffffff/${item.icon}.png`"
              />
            </a>
          </li>
        </ul>
      </footer>
    </v-container>
  </main>
</template>

<script>
export default {
  name: "HomePage",
  data: () => ({
    footerItems: [
      { icon: "github--v1", route: "https://github.com/lucasbrito3001" },
      {
        icon: "linkedin--v1",
        route: "https://www.linkedin.com/in/webdevbrito/",
      },
      { icon: "medium-logo", route: "https://medium.com/@devlucasmail" },
    ],
  }),
};
</script>

<style scoped>
main {
  background-color: var(--main-blue);
  /* background-image: url('../assets/home-page.jpg');
  background-size: cover; */
  width: 100vw;
}
.home-page {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
}

ul {
  list-style: none;
}

ul li {
  display: inline;
  margin: 0 10px;
}

header {
  text-align: center;
}

footer {
  position: absolute;
  bottom: 20px;
}

.title {
  font-size: 72px;
  color: rgb(255, 255, 255);
}

.subtitle {
  color: var(--second-blue);
}

.stack {
  font-family: "Merriweather", serif;
  color: var(--second-blue);
}

.see-more-button {
  margin-top: 40px;
}

.see-more-arrow {
  margin-left: 10px;
}

.skills {
  margin-top: 50px;
}

.skills header h3 {
  text-align: left;
}

@media screen and (max-width: 992px) {
  .title {
    font-size: 40px;
  }

  .home-page {
    height: 90vh; /* Fallback para não-suporte a Custom Properties */
    height: calc(var(--vh, 1vh) * 90);
  }

  .footer-home-img {
    width: 36px;
  }
}
</style>