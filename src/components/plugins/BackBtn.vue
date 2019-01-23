<template>
  <button
    @click="$router.go(-1)"
    class="bg-green-lightest hover:bg-green-darker text-green text-2xl md:text-3xl hover:text-green-lightest mx-1 py-1 px-2 border border-green-lightest hover:border-transparent rounded shadow-md"
  >
    <i class="icon ion-md-arrow-back"></i>
  </button>
</template>

<script>
export default {
  name: "BackBtn"
};
</script>

<style>
</style>
