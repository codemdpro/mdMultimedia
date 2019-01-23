import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/news",
      name: "news",
      component: () => import("./views/news/Index.vue"),
      children: [
        {
          path: "",
          name: "news-topic",
          component: () => import("./views/news/Topics.vue")
        },
        {
          path: ":topic",
          name: "news-feed",
          props: true,
          component: () => import("./views/news/NewsFeed.vue")
        }
      ]
    },
    {
      path: "/radio",
      name: "radio-stations",
      component: () => import("./views/radio/Index.vue"),
      children: [
        {
          path: "",
          name: "stations",
          component: () => import("./views/radio/Stations.vue")
        },
        {
          path: ":station",
          name: "station-info",
          props: true,
          component: () => import("./views/StationInfo.vue")
        }
      ]
    },

    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
