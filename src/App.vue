<template>
  <div id="app">
    <nav-main/>

    <main class="pt-10 pb-16">
      <tool-bar/>
      <div class="container flex items-center mx-auto min-h-screen pt-6">
        <main-view>
          <router-view></router-view>
        </main-view>
      </div>
    </main>
    <full-nav/>
  </div>
</template>

<script>
import "./assets/css/main.css";
import MainView from "./views/MainView";
import NavMain from "./components/nav/NavMain";
import NavVertical from "./components/nav/NavVertical";
import FullNav from "./components/wrapper/FullNav";
import ToolBar from "./components/plugins/ToolBar";

export default {
  name: "app",
  components: {
    MainView,
    NavMain,
    NavVertical,
    FullNav,
    ToolBar
  },
  watch: {
    $route(to, from) {
      const toPos = to.meta.pos;
      const fromPos = from.meta.pos;
      this.transEnter =
        toPos > fromPos ? "aminated slideInRight" : "aminated slideInLeft";
      this.transEnter =
        toPos > fromPos ? "aminated slideOutRight" : "aminated slideOutLeft";
    }
  },
  methods: {
    slideRight() {
      (this.transEnter = "aminated slideInRight"),
        (this.transLeave = "aminated slideOutRight");
      console.log("RIGHT");
    },
    slideLeft() {
      (this.transEnter = "bounceInLeft"), (this.transLeave = "bounceOutLeft");
      console.log("LEFT");
    }
  },
  data: _ =>
    (_ = {
      transEnter: "",
      transLeave: ""
    })
};
</script>