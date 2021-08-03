import Vue from "vue";
import VueRouter from "vue-router";
import Start from "../pages/Start.vue";

import Information from "../pages/Information.vue";
// import Story from "../pages/Story.vue";
import Credit from "../pages/Credit.vue";
import Fps from "../components/Fps.vue";
// import Setting from "../pages/Setting.vue";
import Death from "../pages/Death.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Start",
    component: Start,
  },
  {
    path: "/information",
    name: "Information",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Information,
  },
  {
    path: "/credit",
    name: "Credit",
    component: Credit,
  },
  {
    path: "/fps",
    name: "Fps",
    component: Fps,
  },
  {
    path: "/death",
    name: "Death",
    component: Death,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
