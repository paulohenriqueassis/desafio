<template>
  <v-form id="form">
    <v-container>
      <v-row>
        <v-col cols="12" sm="12">
          <v-text-field
            height="60"
            solo
            v-model="value"
            label="Pesquise por termos ou categorias..."
            append-icon="mdi-magnify"
            @click.prevent="filterCards()"
            @keydown.prevent.enter="filterCards()"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
export default {
  name: "Footer",
  data: () => ({
    value: "",
  }),
  methods: {
    async filterCards() {
      await this.$store.dispatch("getFilterCards", this.value);
    },
  },
};
</script>

<style scoped>
#form {
  font-style: italic;
  position: fixed;
  width: 100%;
  bottom: 0;
  background: #fff;
}
</style>
