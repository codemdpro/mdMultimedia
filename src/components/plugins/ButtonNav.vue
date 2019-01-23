<template>
  <li class="flex-1 mr-2 shadow-md">
    <router-link
      :to="toward"
      class="no-underline text-grey bg-teal-darker hover:bg-teal-darkest px-4 py-8 rounded"
      active-class="border-teal border-b-4"
    >
      <slot/>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "ButtonNav",
  props: {
    toward: {
      default: "/"
    }
  }
};
</script>

<style>
</style>
