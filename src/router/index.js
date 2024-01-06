import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/Detalle/:id",
      name: "Detalle",
      component: () => import("../views/DetalleView.vue"),
    },

    {
      path: "/Productos",
      name: "Productos",
      component: () => import("../views/ProductsView.vue"),
    },
    {
      path: "/Carrito",
      name: "Carrito",
      component: () => import("../views/CarritoView.vue"),
    },
    {
      path: "/Login",
      name: "Login",
      component: () => import("../views/LoginView.vue"),
    },
  ],
});

export default router;
