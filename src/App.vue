<template>
  <div id="app">
    <nav-main/>
    <main-frame>
      <main-view>
        <router-view></router-view>
      </main-view>
    </main-frame>
    <nav-footer/>
  </div>
</template>

<script>
import "./assets/css/main.css";
import MainFrame from "./components/wrapper/MainFrame";
import MainView from "./views/MainView";
import NavMain from "./components/nav/NavMain";
import NavVertical from "./components/nav/NavVertical";
import NavFooter from "./components/nav/NavFooter";
export default {
  name: "app",
  components: { MainFrame, MainView, NavMain, NavVertical, NavFooter }
};
</script>