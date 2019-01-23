<template>
  <div class="flex-grow mx-4 shadow-md">
    <router-link
      :to="toward"
      class="inline-block text-3xl px-4 py-2 leading-none border rounded text-green border-green-light hover:border-transparent hover:text-green-lightest hover:bg-green-dark"
      active-class="text-green-lightest bg-green-dark"
    >
      <i :class="`icon ion-md-${icon}`"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ButtonNav",
  props: {
    icon: {
      default: "albums"
    },
    toward: {
      default: "/"
    }
  }
};
</script>

<style>
</style>
