<template>
  <div id="main">
    <section class="intro-section">
      <v-container>
        <b-row>
          <b-col>
            <header>
              <h2 class="general-subtitles-dark">Contato</h2>
              <h1 class="general-titles-light">
                Gostou do que viu aqui? Então me chama no WhatsApp, <br />
                vai ser um prazer se eu puder te ajudar
              </h1>
            </header>
          </b-col>
        </b-row>
      </v-container>
    </section>

    <section class="whatsapp-section">
      <v-container>
        <v-row class="form-wpp">
          <v-col cols="12">
            <label class="general-subtitles-dark" for="name">Nome:</label>
            <v-text-field id="name" v-model="formWpp.name"></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-textarea
              placeholder="Escreva uma mensagem e clique no botão de enviar que você será redirecionado para o wpp com a mensagem digitada!"
              id="whatsapp-message"
              v-model="formWpp.message"
            ></v-textarea>
            <a :href="`https://wa.me/5518988002094?text=${wppMessage}`">
              <v-btn color="#67d4ff" block>Enviar</v-btn>
            </a>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="social-networks">
      <v-container>
        <v-row>
          <v-col>
            <Lists
              :listToRender="socialNetworks"
              typeImages="color"
              :colXs="6"
              :colMd="4"
              :iconSize="iconSize"
              :useButton="true"
              styleListItem="contacts-item"
            />
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
import Lists from "../components/Lists.vue";
export default {
  components: {
    Lists,
  },
  data: () => ({
    socialNetworks: [
      { icon: "github--v1", desc: "GitHub" },
      { icon: "linkedin", desc: "LinkedIn" },
      { icon: "instagram", desc: "Instagram" },
      { icon: "twitter", desc: "Twitter" },
      { icon: "facebook", desc: "Facebook" },
      { icon: "medium-logo", desc: "Medium" },
    ],
    iconSize: null,
    formWpp: {
      name: null,
      message: null,
    },
  }),
  computed: {
    wppMessage: function () {
      return `*Oii, meu nome é ${this.formWpp.name}, e eu vi seu portfólio. Quero te deixar a seguinte mensagem:* ${this.formWpp.message}`;
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    this.iconSize = window.innerWidth > 992 ? 84 : 64;
  },
};
</script>

<style scoped>
.intro-section {
  background-color: var(--main-blue);
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  padding: 10vh 0;
}

.whatsapp-section {
  margin-top: -65vh;
  margin-top: calc(var(--vh, 1vh) * -65);
  padding: 10vh 5px;
  padding: calc(var(--vh, 1vh) * 10) 0;
  background-color: var(--main-blue);
}

.social-networks {
  background-color: var(--dark-blue);
  padding-bottom: 20px;
}

.form-wpp {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  margin: 0 5px;
}

ul {
  list-style: none;
}

@media screen and (max-width: 992px) {
  .social-networks {
    padding-bottom: 13vh;
  }

  .whatsapp-section {
    margin-top: -40vh;
    margin-top: calc(var(--vh, 1vh) * -40);
  }
}
</style>