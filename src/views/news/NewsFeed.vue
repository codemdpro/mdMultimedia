<template>
  <h1>News Feed | {{$route.params.topic}}</h1>
</template>

<script>
export default {
  name: "StationInfo",
  props: {
    topic: { required: true }
  }
};
</script>

<style>
</style>
