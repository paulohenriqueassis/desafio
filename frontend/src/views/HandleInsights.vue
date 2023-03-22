<template>
  <v-app>
    <v-container fluid>
      <v-app-bar id="app-bar" height="100" src="../assets/background.svg">
        <v-container>
          <v-row align="center">
            <v-col col="4">
              <router-link to="/">
                <v-btn icon>
                  <v-icon color="#ed4d77"> mdi-arrow-left </v-icon>
                </v-btn>
              </router-link>
            </v-col>
            <v-col col="8" align-self="auto">
              <h1>{{ checkCardId ? "Criar" : "Editar" }}</h1>
              <h1 class="text-insight">Insights</h1>
            </v-col>
          </v-row>
        </v-container>
      </v-app-bar>
      <v-card elevation="2">
        <v-card-title>{{ checkCardId ? "" : "Editar" }} Insights</v-card-title>
        <v-container fluid data-app>
          <v-textarea
            :no-resize="true"
            counter
            placeholder="Escreva aqui o seu insight..."
            :rules="rules"
            :value="cardText"
            v-model="cardText"
          ></v-textarea>
          <v-card-title error-count="true" class="limit-characters">
            limite de caracteres: 400</v-card-title
          >
          <v-autocomplete
            v-if="checkCardId"
            v-model="tagName"
            :items="items"
            label="Escolha a sua tag"
          ></v-autocomplete>
          {{tagName}}
        </v-container>
      </v-card>
      <v-btn
        class="btn-publish"
        color="#ed4d77"
        height="50"
        @click="publishCard()"
      >
        Publicar
      </v-btn>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "Insights",
  props: ["cardId"],
  components: {},
  data: () => ({
    rules: [(v) => v.length <= 400 || "Limite máximo de caracteres"],
    items: ["Futebol", "Volei", "Histórico"],
    cardText: "",
    tagName: "",
  }),
  computed: {
    checkCardId() {
      return this.cardId === "create";
    },
  },
  methods: {
    publishCard() {
      this.checkCardId ? this.createCard() : this.editCard();
    },
    async createCard() {
      const card = {
        texto: this.cardText,
        data_criacao: this.formatDate(),
        tags: [
          {
            name: this.tagName,
          },
        ],
      };
      await this.$store.dispatch("createCard", card);
      this.$router.push("/");
    },
    async editCard() {
      const { cardId } = this.$route.params;
      const card = {
        id: cardId,
        texto: this.cardText,
        data_modificacao: this.formatDate(),
      };
      await this.$store.dispatch("editCard", card);
      this.$router.push("/");
    },
    formatDate() {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      const formatUnitTime = (unit) => unit.toString().padStart(2, "0");
      const fullHour = `${formatUnitTime(hours)}:${formatUnitTime(
        minutes
      )}:${formatUnitTime(seconds)}`;

      const localeDate = date.toLocaleDateString("pt-BR", { timeZone: "UTC" });
      return `${localeDate} às ${fullHour}`;
    },
  },
};
</script>

<style>
.btn-publish {
  font-style: italic;
  color: #fff !important;
  width: 90%;
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.limit-characters {
  display: block;
  font-size: 1em;
  color: #ccc;
  font-style: italic;
  padding: 20px 0;
  text-align: right;
}

[placeholder] {
  font-style: italic;
}

h1 {
  font-size: 1em;
  color: #ed4d77;
  font-style: italic;
  font-weight: 300;
}

.text-insight {
  font-weight: bold;
}
</style>
