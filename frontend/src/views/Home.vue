<template>
  <section>
    <Header app-data />
    <Main />
    <Footer app-data />
  </section>
</template>

<script>
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
