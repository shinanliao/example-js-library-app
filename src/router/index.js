import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Popper from "../views/Popper.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/popper",
    name: "Popper",
    component: Popper,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
