<template>
  <transition
    name="custom-classes-transition"
    :enter-active-class="transitionEnter"
    :leave-active-class="transitionLeave"
    mode="out-in"
  >
    <router-view></router-view>
  </transition>
</template>

<script>
export default {
  name: "NewsIndex",
  data: d =>
    (d = {
      transitionEnter: null,
      transitionLeave: "animated fadeOut"
    }),
  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      this.transitionEnter =
        toDepth > fromDepth ? "animated slideInRight" : "animated slideInLeft";
    }
  }
};
</script>
