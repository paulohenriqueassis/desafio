<template>
  <v-main class="main">
    <v-container>
      <v-row>
        <v-col v-for="card in cards" :key="card._id" cols="12">
          <v-card class="v-card" height="150" width="100%">
            <p class="card-data">Criado em {{ card.data_criacao }}</p>
            <p v-if="card.data_modificacao" class="card-data">
              Modificado em {{ card.data_modificacao }}
            </p>
            <p class="card-tag">Futebol</p>
            <p class="card-texto">{{ card.texto }}</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      cards: "",
    };
  },
  created() {
    this.getCards();
  },
  methods: {
    getCards() {
      const url = "http://localhost:3000/cards/";
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          const json = JSON.parse(JSON.stringify(res));
          this.cards = json;
          console.log(this.cards);
        });
    },
  },
};
</script>

<style scoped>
.container-app {
  /* border: 1px solid red; */
}

.v-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  text-align: center;
}

.card-data {
  font-size: 0.7em;
  color: #aaa8a8;
  align-self: flex-end;
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
