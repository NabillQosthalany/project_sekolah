import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Loginview from "../views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/product/:id",
      name: "product",
      component: () => import("../views/DetailView.vue"),
    },
    {
      path: "/categories",
      name: "categories",
      component: () => import("../views/CategoriesView.vue"),
    },
    {
      path: "/categories/:id",
      name: "category-items",
      component: () => import("../views/CategoriesItems.vue"),
    },
    {
      path: "/pricing",
      name: "pricing",
      component: () => import("../views/PricingView.vue"),
    },
    {
      path: "/succes",
      name: "succes",
      component: () => import("../views/SuccesView.vue"),
    },
  ],
});

export default router;
