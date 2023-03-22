import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CreateInsights from "../views/CreateInsights.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cards",
    name: "Publicar",
    component: CreateInsights,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
