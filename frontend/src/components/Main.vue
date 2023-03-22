<template>
  <v-main class="main">
    <v-container>
      <v-row>
        <v-col v-for="card in cards" :key="card._id" cols="12">
          <v-card class="v-card" height="100%" width="100%">
            <!-- <p class="card-data">Criado em {{ card.data_criacao }}</p>
            <p v-if="card.data_modificacao" class="card-data">
              Modificado em {{ card.data_modificacao }}
            </p> -->
            <div class="btns">
              <router-link :to="{path: '/card/' + card._id}">
                <v-btn fab x-small>
                  <v-icon dark> mdi-pencil </v-icon>
                </v-btn>
              </router-link>
              <v-btn fab x-small @click="deleteCard(card._id)">
                <v-icon dark> mdi-delete </v-icon>
              </v-btn>
            </div>
            <p v-for="tag in card.tags" :key="tag.name" class="card-tag">
              {{ tag.name }}
            </p>
            <p class="card-texto">{{ card.texto }}</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-card v-if="!cards.length" height="150" width="100%">
      <p>Não há cards cadastrados!</p>
    </v-card>
    <template> </template>
  </v-main>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      cards: "",
    };
  },
  created() {
    this.getCards();
  },
  methods: {
    async getCards() {
      await this.$store.dispatch("getCards", this.$store.state.cards)
      this.cards = this.$store.state.cards;
    },
    async deleteCard(id) {
      await this.$store.dispatch("deleteCard", id)
      this.getCards()
    }
  },
};
</script>

<style scoped>
.v-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  text-align: center;
}

.btns {
  margin-left: auto;
}

.card-data {
  font-size: 0.7em;
  color: #aaa8a8;
  align-self: flex-start;
}

.card-texto {
  font-weight: bold;
}

.card-tag {
  width: fit-content;
  padding: 10px;
  border-radius: 5px;
  color: #ed4d77;
  border: 1px solid;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
}

.main {
  overflow: auto;
  padding: 0 !important;
  margin-top: -30px;
  max-height: 500px;
}

.main::-webkit-scrollbar {
  width: 3px;
  height: 3px;
}

.main::-webkit-scrollbar-track {
  background: transparent;
  padding: 2px;
}

.main::-webkit-scrollbar-thumb {
  background-color: #5b037e;
}
</style>
