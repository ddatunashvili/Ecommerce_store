
import { createWebHistory, createRouter } from "vue-router";
import Home from "./pages/home"
import Inner from "./pages/inner"
import Cart from "./pages/cart"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/inner",
    name: "Inner",
    component: Inner,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;