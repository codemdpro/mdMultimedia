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
      component: () => import("./views/NewsList.vue"),
      children: [
        {
          path: "detail",
          name: "news-detail",
          component: () => import("./views/ListView.vue")
        }
      ]
    },
    {
      path: "/radio",
      name: "list-view",
      component: () => import("./views/ListView.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
