<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <div class="expand-navbar">
        <li class="navbar-list-item">
          <div class="icon-navbar-list-item">
            <img src="https://img.icons8.com/ios/ffffff/forward--v1.png" />
          </div>
          <p class="desc-navbar-list-item">MENU</p>
        </li>
      </div>
      <div class="items-navbar-list">
        <router-link
          :to="item.route"
          v-for="(item, idx) in navbarItems"
          :key="idx"
          class="links"
        >
          <li class="navbar-list-item">
            <div class="icon-navbar-list-item">
              <img :src="`https://img.icons8.com/ios/48/ffffff/${item.img}`" />
            </div>
            <p class="desc-navbar-list-item">{{ item.desc }}</p>
          </li>
        </router-link>
        <a
          href="https://github.com/lucasbrito3001/new-portfolio"
          target="_blank"
          class="links"
        >
          <li class="navbar-list-item footer">
            <div class="icon-navbar-list-item">
              <img src="https://img.icons8.com/ios/48/ffffff/github--v1.png" />
            </div>
            <p class="desc-navbar-list-item">REPOSITÓRIO</p>
          </li>
        </a>
      </div>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavbarComp",
  data: () => ({
    navbarItems: [
      { desc: "HOME", route: "/", img: "home--v1.png" },
      { desc: "SOBRE", route: "/about", img: "info-squared.png" },
      { desc: "PORTFÓLIO", route: "/portfolio", img: "view-quilt.png" },
      { desc: "CONTATO", route: "/contact", img: "new-post--v1.png" },
    ],
  }),
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #0e193d;
  width: 5vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  transition: 0.4s;
  overflow: hidden;
  z-index: 1000;
}

.navbar:hover {
  width: 15vw;
  transition: 0.5s;
}

.expand-navbar img {
  transition: 0.5s;
}

.navbar:hover .expand-navbar img {
  transform: rotate(180deg);
  transition: 0.5s;
}

.expand-navbar {
  background-color: #081027;
}

.navbar-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15vw;
  height: 5vw;
}

.navbar-list-item:hover {
  background-color: #081027;
  transition: 0.5s;
}

.icon-navbar-list-item {
  width: 5vw;
}

.icon-navbar-list-item img {
  display: block;
  margin: auto;
  width: 26px;
}

.desc-navbar-list-item {
  width: 10vw;
  color: rgb(206, 206, 206);
  font-weight: 700;
}

.navbar-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.navbar-list-item.footer {
  position: absolute;
  bottom: 0;
}

.links {
  text-decoration: none;
}

@media screen and (max-width: 992px) {
  .navbar {
    position: fixed;
    bottom: 0;
    top: auto;
    left: 0;
    background-color: #0e193d;
    width: 100vw;
    height: 10vh; /* Fallback para não-suporte a Custom Properties */
    height: calc(var(--vh, 1vh) * 10);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .navbar:hover {
    width: 100vw;
    transition: 0.5s;
  }

  .navbar-list {
    list-style: none;
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  .navbar-list-item a,
  .navbar-list-item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20vw;
    height: 10vh; /* Fallback para não-suporte a Custom Properties */
    height: calc(var(--vh, 1vh) * 10);
  }

  .navbar-list-item.footer {
    position: relative;
    bottom: none;
  }

  .expand-navbar {
    display: none;
  }

  .desc-navbar-list-item {
    display: none;
  }

  .icon-navbar-list-item {
    width: 20vw;
  }
}
</style>