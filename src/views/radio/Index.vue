<template>
  <transition
    name="custom-classes-transition"
    :enter-active-class="transitionEnter"
    :leave-active-class="transitionLeave"
    mode="out-in"
    duration="500"
  >
    <router-view></router-view>
  </transition>
</template>

<script>
export default {
  name: "RadioIndex",

  data: d =>
    (d = {
      transitionEnter: "",
      transitionLeave: ""
    }),
  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      this.transitionEnter =
        toDepth > fromDepth ? "animated slideInRight" : "animated slideInLeft";
      this.transitionLeave =
        toDepth > fromDepth
          ? "animated slideOutLeft"
          : "animated slideOutRight";
    }
  }
};
</script>
