<template>
  <li class="text-center shadow-lg text-4xl">
    <span
      @click="emitToggle"
      class="cursor-pointer text-grey bg-blue-darker hover:bg-teal-darkest px-2 rounded"
    >
      <i v-if="icon" :class="`icon ion-md-${icon}`"></i>
    </span>
  </li>
</template>

<script>
export default {
  name: "ButtonNav",
  props: {
    icon: {
      required: false
    }
  },
  methods: {
    emitToggle(e) {
      return this.$emit("toggle", e.target);
    }
  }
};
</script>

<style>
</style>
