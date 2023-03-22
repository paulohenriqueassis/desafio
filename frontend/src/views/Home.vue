<template>
  <section>
    <Header app-data />
    <Main @deleteCard="deleteCard" :cards="cards" />
    <Footer app-data />
  </section>
</template>

<script>
import { mapState } from "vuex";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Main from "@/components/Main.vue";

export default {
  name: "Home",
  components: {
    Header,
    Main,
    Footer,
  },
  async mounted() {
    await this.$store.dispatch("getCards");
  },
  computed: {
    ...mapState({
      cards: (state) => state.cards,
    }),
  },
  methods: {
    async deleteCard(id) {
      await this.$store.dispatch("deleteCard", id);
    },
  },
};
</script>

<style>
html {
  font-family: arial;
  overflow: hidden;
}

a {
  text-decoration: none;
}
</style>
