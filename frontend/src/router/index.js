import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import HandleInsights from "../views/HandleInsights.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/card/:cardId",
    name: "Publicar",
    component: HandleInsights,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: '/',
  routes,
});

export default router;
