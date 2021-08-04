import Vue from "vue";
import VueRouter from "vue-router";
import Start from "../pages/Start.vue";

import Information from "../pages/Information.vue";
// import Story from "../pages/Story.vue";
import Credit from "../pages/Credit.vue";
import Fps from "../components/Fps.vue";
import Setting from "../pages/Setting.vue";
// import Setting from "../pages/Setting.vue";
import Death from "../pages/Death.vue";
import Story from "../pages/Story.vue";
import Game from "../pages/Game.vue";
import Tictacto from "../components/Tictacto.vue"

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
    path: "/setting",
    name: "Setting",
    component: Setting,
  },
  {
    path: "/death",
    name: "Death",
    component: Death,
  },
  {
    path: "/story",
    name: "Story",
    component: Story,
  },
  {
    path: "/game",
    name: "Game",
    component: Game,
  },
  {
    path: "/tictacto",
    name: "Tictacto",
    component: Tictacto,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
