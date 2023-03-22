<template>
  <nav>
    <div class="container">
      <div class="logo">
        <img src="../assets/brand-insights.svg" alt="" />
      </div>
      <div>
        <div class="photo">
          <img src="../assets/perfil.png" alt="" />
        </div>
      </div>
      <router-link to="/card/create">
        <v-btn icon>
          <v-icon size="30" color="#ed4d77">mdi-plus</v-icon>
        </v-btn>
      </router-link>
    </div>
    <div class="perfil">
      <div class="perfil__user">
        <h1>Olá, Antonio!</h1>
        <p>antonio.pina@g.globo</p>
      </div>
      <div class="perfil__text">
        <h3>Feed de Insights</h3>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
nav {
  background: url("../assets/background.svg") no-repeat;
  padding: 0 !important;
  height: 300px;
}

@media (min-width: 400px) {
  nav {
    background-size: cover;
  }
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

h1 {
  font-size: 1.5em;
}

p {
  font-size: 0.9em;
}

.perfil {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-style: italic;
}

.perfil div {
  margin-bottom: 30px;
}

.perfil__user {
  margin-top: 30px;
  margin-bottom: 50px;
  color: #ffff;
}

.perfil__user::after {
  content: "";
  display: block;
  margin: 0 auto;
  margin-top: 30px;
  width: 40px;
  border: 2px solid #ed4d77;
}

.perfil__text {
  color: #ed4d77;
}

img {
  width: 50px;
}
</style>
