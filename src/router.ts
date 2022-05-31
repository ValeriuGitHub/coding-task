import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    alias: "/list",
    name: "bmi-list",
    component: () => import("./components/BmiList.vue"),
  },
  {
    path: "/add",
    name: "addBmi",
    component: () => import("./components/AddBmi.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
