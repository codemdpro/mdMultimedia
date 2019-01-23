<template>
  <h1>STATION INFO | {{$route.params.station}}</h1>
</template>

<script>
export default {
  name: "StationInfo",
  props: {
    station: { required: true }
  }
};
</script>

<style>
</style>
