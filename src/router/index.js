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
import Gugudan from "../components/Gugudan.vue"
import Random from "../pages/Random.vue";
import Random2 from "../pages/Random2.vue";
import Random3 from "../pages/Random3.vue";
import Random4 from "../pages/Random4.vue";
import Random5 from "../pages/Random5.vue";


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
  {
    path: "/random",
    name: "Random",
    component: Random,
  },
  {
    path: "/random2",
    name: "Random2",
    component: Random2,
  }, {
    path: "/random3",
    name: "Random3",
    component: Random3,
  }, {
    path: "/random4",
    name: "Random4",
    component: Random4,
  }, {
    path: "/random5",
    name: "Random5",
    component: Random5,
  },
  {
    path: "/gugudan",
    name: "Gugudan",
    component: Gugudan,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
