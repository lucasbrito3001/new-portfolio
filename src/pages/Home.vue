<template>
    <div>
        <main>
            <v-container class="home-page">
                <header>
                    <h2 class="subtitle">PORTFÓLIO</h2>
                    <h1 class="title">Lucas de Brito</h1>
                    <h3 class="stack">| FULL STACK DEVELOPER |</h3>
                </header>
                <footer>
                    <ul>
                        <li v-for="(item, idx) in footerItems" :key="idx">
                            <a :href="item.route" target="_blank">
                                <img
                                    class="footer-home-img"
                                    :src="`https://img.icons8.com/ios-filled/48/ffffff/${item.icon}.png`"
                                />
                            </a>
                        </li>
                    </ul>
                    <ArrowDown />
                </footer>
            </v-container>
        </main>

        <section>
            <v-parallax :src="require('../assets/carousel2.jpg')" class="px-5">
                <h1 class="title text-center">Olá, seja bem-vindo!</h1>
                <p class="general-subtitles-dark">
                    Espero que goste do meu portfólio, navegando pelo menu você
                    vai conseguir informações do tipo: <br />
                </p>
                <ul class="mx-auto text-h5 px-0 home-infos">
                    <li>Informações sobre mim</li>
                    <li>Projetos do meu portfólio</li>
                    <li>Meu contato</li>
                </ul>
            </v-parallax>
        </section>

        <section class="office-section">
            <p class="general-titles-light ma-0 py-4">Meu escritório</p>
            <iframe
                width="100%"
                height="450"
                style="border: 0; display: block"
                loading="lazy"
                allowfullscreen
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD2XfSx3ijnztRypmlw11qQjmRj1NVnupg&q=Rua%20Santo%20Mamprim%20650"
            >
            </iframe>
        </section>

        <section class="home-footer">
            <v-container>
                <v-row>
                    <v-col>
                        <h1 class="general-titles-light">Contatos</h1>
                        <p class="general-text-light text-center">devlucasmail@gmail.com</p>
                        <p class="general-text-light text-center">+55 (18) 99735 1747</p>
                    </v-col>
                    <v-col class="text-center">
                        <h1 class="general-titles-light">Redes sociais</h1>
                        <ul>
                            <li v-for="(item, idx) in socialNetworks" :key="idx">
                                <a :href="item.route" target="_blank">
                                    <img
                                        class="footer-home-img"
                                        :src="`https://img.icons8.com/ios-filled/48/ff7b00/${item.icon}.png`"
                                    />
                                </a>
                            </li>
                        </ul>
                    </v-col>
                </v-row>
            </v-container>
        </section>
    </div>
</template>

<script>
import ArrowDown from "../components/ArrowDown.vue";
export default {
    name: "HomePage",
    components: {
        ArrowDown,
    },
    data: () => ({
        footerItems: [
            { icon: "github--v1", route: "https://github.com/lucasbrito3001" },
            {
                icon: "linkedin--v1",
                route: "https://www.linkedin.com/in/webdevbrito/",
            },
            { icon: "medium-logo", route: "https://medium.com/@devlucasmail" },
        ],
        socialNetworks: [
            { icon: "github--v1", route: "https://github.com/lucasbrito3001" },
            {
                icon: "linkedin--v1",
                route: "https://www.linkedin.com/in/webdevbrito/",
            },
            { icon: "instagram--v1", route: "https://instagram.com/lucasdebrito12" },
            { icon: "twitter--v1", route: "https://twitter.com/brito3001" },
            { icon: "facebook", route: "https://facebook.com/lucas.ferrari.brito" },
        ],
        items: [
            {
                src: require("../assets/carousel.jpg"),
            },
            {
                src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
            },
            {
                src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
            },
            {
                src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
            },
        ],
    }),
    mounted() {
        window.scrollTo(0, 0);
    },
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
    padding: 0;
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
    font-size: 72px !important;
    color: rgb(255, 255, 255);
    line-height: 1.5;
}

.subtitle {
    color: var(--second-blue);
}

.stack {
    font-family: "Merriweather", serif;
    color: var(--second-blue);
}

.skills {
    margin-top: 50px;
}

.skills header h3 {
    text-align: left;
}

.office-section {
    background-color: var(--main-blue);
}

.home-footer {
    background-color: var(--dark-blue);
    position: relative;
    display: flex;
    width: 100%;
    min-height: 100px;
}

@media screen and (max-width: 992px) {
    .title {
        font-size: 50px !important;
    }

    .home-page {
        height: 90vh; /* Fallback para não-suporte a Custom Properties */
        height: calc(var(--vh, 1vh) * 90);
    }

    .footer-home-img {
        width: 36px;
    }

    .home-infos li {
        display: block;
        text-align: center;
        margin-bottom: 10px;
    }

    .home-footer {
        padding-bottom: 10vh;
    }
}
</style>
