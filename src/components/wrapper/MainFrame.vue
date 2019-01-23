<template>
  <main class="bg-blue-darker pt-10 pb-16">
    <div class="container flex items-center mx-0 md:mx-auto min-h-screen">
      <slot/>
    </div>
    <!-- <nav-footer/> -->
  </main>
</template>

<script>
import NavMain from "../nav/NavMain";
import NavFooter from "../nav/NavFooter";
export default {
  name: "MainFrame",
  components: { NavMain, NavFooter },
  methods: {
    goBack() {
      return this.$router.go(-1);
    }
  }
};
</script>
