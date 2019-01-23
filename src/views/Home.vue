<template>
  <div class="home container items-center mx-auto text-center text-green-darker">
    <home-view msg="All Your Favorites"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeView from "@/components/HomeView.vue";

export default {
  name: "home",
  components: {
    HomeView
  }
};
</script>
