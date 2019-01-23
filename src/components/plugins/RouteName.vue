<template>
  <div
    class="border-green-lightest border-l-2 border-r-2 bg-green-lightest flex flex-grow justify-between font-serif mx-1 md:mx-4 -my-2 py-4 md:px-2 text-center text-md md:text-xl shadow"
  >
    <transition name="shake" mode="out-in">
      <div class="mx-4" :key="topViewName">
        <span
          class="border-green-light border-b-2 border-t-2 font-semibold text-green-darkest my-2 px-4 shadow-lg"
        >{{topViewName.toUpperCase()}}</span>
      </div>
    </transition>
    <slot name="btn1"/>
  </div>
</template>

<script>
export default {
  name: "RouteName",
  computed: {
    topViewName() {
      let routeMeta = this.$route.meta.viewName;
      let lang = this.local.lang;
      return routeMeta ? routeMeta[lang] : "view error";
    },
    local() {
      return this.$store.getters.localization;
    }
  }
};
</script>
