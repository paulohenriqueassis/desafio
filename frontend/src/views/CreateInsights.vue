<template>
  <v-container fluid>
    <v-app-bar id="app-bar" app height="100" src="../assets/background.svg">
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
            <h1>Criar</h1>
            <h1 class="text-insight">Insights</h1>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-card elevation="2">
      <v-card-title>Insights</v-card-title>
      <v-container fluid>
        <v-textarea
          no-resize="true"
          counter
          placeholder="Escreva aqui o seu insight..."
          :rules="rules"
          :value="value"
        ></v-textarea>
        <v-card-title class="limit-characters"
          >limite de caracteres: {{ 400 }}</v-card-title
        >
      </v-container>
    </v-card>
    <v-btn class="btn-publish" color="#ed4d77" height="50"> Publicar </v-btn>
  </v-container>
</template>

<script>


export default {
  name: "Insights",
  components: {},
  data: () => ({
    rules: [(v) => v.length <= 400 || "Limite Máximo de caracteres"],
    value: "",
    items: ["foo", "bar", "fizz", "buzz"],
    values: ["foo", "bar"],
  }),
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
}

[placeholder] {
  font-style: italic;
}

h1 {
  font-size: 1em;
  color: #ed4d77;
  font-style: italic;
  font-weight: 100;
}

.text-insight {
  font-weight: bold;
}
</style>
