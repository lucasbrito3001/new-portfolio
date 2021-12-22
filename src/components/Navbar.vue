<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <div class="expand-navbar">
        <li class="navbar-list-item">
          <div class="icon-navbar-list-item">
            <img
              src="https://img.icons8.com/ios/48/ffffff/forward--v1.png"
            />
          </div>
          <p class="desc-navbar-list-item">MENU</p>
        </li>
      </div>
      <div class="items-navbar-list">
        <li
          class="navbar-list-item"
          v-for="(item, idx) in navbarItems"
          :key="idx"
        >
          <router-link :to="item.route">
            <div class="icon-navbar-list-item">
              <img :src="`https://img.icons8.com/${item.img}`" />
            </div>
            <p class="desc-navbar-list-item">{{ item.desc }}</p>
          </router-link>
        </li>
        <li class="navbar-list-item footer">
          <a href="https://github.com/lucasbrito3001/new-portfolio" target="_blank">
            <div class="icon-navbar-list-item">
              <img
                src="https://img.icons8.com/ios/48/ffffff/github--v1.png"
              />
            </div>
            <p class="desc-navbar-list-item">REPOSITORIO</p>
          </a>
        </li>
      </div>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavbarComp",
  data: () => ({
    navbarItems: [
      { desc: "HOME", route: "/", img: "ios/48/ffffff/home--v1.png" },
      { desc: "SOBRE", route: "/about", img: "ios/48/ffffff/info-squared.png" },
      { desc: "PORTFÓLIO", route: "/portfolio", img: "ios/48/ffffff/view-quilt.png" },
      { desc: "CONTATO", route: "/contact", img: "ios/48/ffffff/new-post--v1.png" },
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

.navbar-list-item a, .navbar-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15vw;
  height: 5vw;
}

.navbar-list-item a:hover {
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

a {
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
    height: 10vh;
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

  .navbar-list-item a, .navbar-list-item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20vw;
    height: 10vh;
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
}
</style>