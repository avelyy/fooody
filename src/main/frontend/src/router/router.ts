/**
 * @see https://router.vuejs.org/
 */
import { createWebHistory, createRouter } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import(/* webpackChunkName: "about" */ "../views/Login.vue")
  },
  {
    path: "/home",
    name: "Home",
    component: () => import(/* webpackChunkName: "about" */ "../views/Home.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;