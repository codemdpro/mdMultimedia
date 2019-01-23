import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "welcome",
      component: Home,
      meta: {
        pos: 0,
        viewName: {
          en: "welcome",
          fr: "accueil"
        }
      }
    },
    {
      path: "/radios",
      component: () => import("../views/radio/Index.vue"),
      children: [
        {
          path: "",
          name: "radio-home",
          component: () => import("../views/radio/Stations.vue"),
          meta: {
            pos: 1,
            viewName: {
              en: "radio",
              fr: "radio"
            }
          }
        },
        {
          path: ":info",
          name: "station-info",
          props: true,
          component: () => import("../views/radio/StationInfo.vue"),
          meta: {
            pos: 1,
            viewName: {
              en: "station info",
              fr: "detail station"
            }
          }
        }
      ]
    },

    {
      path: "/news",
      component: () => import("../views/news/Index.vue"),
      children: [
        {
          path: "",
          name: "news-home",
          component: () => import("../views/news/Topics.vue"),
          meta: {
            pos: 2,
            viewName: {
              en: "news",
              fr: "nouvelles"
            }
          }
        },
        {
          path: ":topic",
          name: "news-feed",
          props: true,
          component: () => import("../views/news/NewsFeed.vue"),
          meta: {
            pos: 9,
            viewName: {
              en: "latest news",
              fr: "actualite"
            }
          }
        }
      ]
    },

    {
      path: "/podcasts",
      name: "podcast-home",
      component: () => import("../views/podcast/Index.vue"),
      meta: {
        pos: 3,
        viewName: {
          en: "podcast",
          fr: "podcast"
        }
      }
    },

    {
      path: "/weather",
      name: "weather",
      component: () => import("../views/weather/Index.vue"),
      meta: {
        pos: 4,
        viewName: {
          en: "weather",
          fr: "meteo"
        }
      }
    },

    {
      path: "/about",
      name: "about",
      component: () => import("../views/About.vue"),
      meta: {
        pos: 9,
        viewName: {
          en: "about us",
          fr: "a propos"
        }
      }
    }
  ]
});
