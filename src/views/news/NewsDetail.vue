<template>
  <h1>News Detail | {{$route.params.station}}</h1>
</template>

<script>
export default {
  name: "NewsDetail",
  props: {
    newsId: { required: true }
  }
};
</script>

<style>
</style>
