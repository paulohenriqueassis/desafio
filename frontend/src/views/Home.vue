<template>
  <section>
    <Header />
    <Main />
    <Footer />
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
