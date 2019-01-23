<template>
  <transition
    name="custom-classes-transition"
    :enter-active-class="transitionEnter"
    :leave-active-class="transitionLeave"
    mode="out-in"
  >
    <view-header/>
    <router-view></router-view>
  </transition>
</template>

<script>
import ViewHeader from "../../components/plugins/ViewHeader";
export default {
  name: "WeatherIndex",
  components: { ViewHeader },
  data: d =>
    (d = {
      transitionEnter: "animated zoomIn",
      transitionLeave: "animated zoomOut"
    })
};
</script>
