<template>
  <button
    @click="$router.go(1)"
    class="bg-green-lightest hover:bg-green-darker text-green text-2xl md:text-3xl hover:text-green-lightest py-1 px-2 mx-1 border border-green-lightest hover:border-transparent rounded shadow-md pin-r"
  >
    <i class="icon ion-md-menu"></i>
    <!-- <i class="icon ion-md-close"></i> -->
  </button>
</template>

<script>
export default {
  name: "MenuBtn"
};
</script>

<style>
</style>
