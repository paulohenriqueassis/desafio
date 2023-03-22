<template>
  <v-form id="form">
    <v-container>
      <v-row>
        <v-col cols="12" sm="12">
          <v-text-field
            height="60"
            solo
            label="Pesquise por termos ou categorias..."
            append-icon="mdi-magnify"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
#form {
  font-style: italic;
  position: fixed;
  width: 100%;
  bottom: 0;
}
</style>
