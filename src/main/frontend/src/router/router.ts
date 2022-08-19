/**
 * @see https://router.vuejs.org/
 */
import { createWebHistory, createRouter } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "about" */ "../views/Home.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import(/* webpackChunkName: "about" */ "../views/Login.vue")
  },
  {
    path: "/test",
    name: "Test",
    component: () => import(/* webpackChunkName: "about" */ "../views/Test.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;