<template>
  <div
    class="flex justify-between items-center mx-auto p-2 my-2 text-grey-darker text-center shadow-lg"
  >
    <h1 class="text-green-darker">Now Viewing</h1>
    | {{info}}
  </div>
</template>

<script>
export default {
  name: "info",
  props: {
    info: { required: false }
  }
};
</script>

<style>
</style>
