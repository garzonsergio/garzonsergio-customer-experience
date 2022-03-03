import { createRouter, createWebHistory } from "vue-router";
import CeHome from "../views/CeHome.vue";
import CeCartera from "../views/CeCartera.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: CeHome,
  },
  {
    path: "/Cartera",
    name: "Cartera",
    component: CeCartera,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
