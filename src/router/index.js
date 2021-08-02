import Vue from "vue";
import VueRouter from "vue-router";
import Start from "../pages/Start.vue";

import Information from "../pages/Information.vue";
// import Story from "../pages/Story.vue";
import Credit from "../pages/Credit.vue";
// import Setting from "../pages/Setting.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Start",
    component: Start,
  },
  {
    path: "/Information",
    name: "Information",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Information,
  },
  {
    path: "/Credit",
    name: "Credit",
    component: Credit,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
