<template>
  <v-main class="main">
    <v-container>
      <v-row>
        <v-col v-for="card in cards" :key="card._id" cols="12">
          <v-card class="v-card" height="100%" width="100%">
            <div class="btns">
              <v-btn fab x-small :to="`/card/${card._id}`">
                <v-icon dark> mdi-pencil </v-icon>
              </v-btn>
              <v-btn fab x-small @click.stop="$emit('deleteCard', card._id)">
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
    <p class="no-cards" v-if="!cards">Não há insights cadastrados!</p>
    <template> </template>
  </v-main>
</template>

<script>
export default {
  name: "Main",
  props: {
    cards: {
      type: Array,
    },
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

.no-cards {
  text-align: center;
  margin-top: 50px;
  color: #ed4d77;
  font-weight: bold;
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
