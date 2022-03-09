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
    path: "/cartera/:code/:prospectId/:customerId",
    name: "Cartera",
    component: CeCartera,
    // Ruta de Prueba
    // http://localhost:8080/cartera/57827505/c329dbfa-7bb0-45ed-a9dd-3c92b282b9e9/59c0bba4-a2f0-4c6e-abb2-78882c2b332d
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
