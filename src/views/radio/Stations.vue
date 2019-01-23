<template>
  <grid-wrapper>
    <col-wrap v-for="station in radioStations" :key="station">
      <card :content="station"/>
    </col-wrap>
  </grid-wrapper>
</template>

<script>
import GridWrapper from "../../components/wrapper/GridWrapper";
import ColWrap from "../../components/wrapper/ColWrap";
import Card from "../../components/plugins/Card";
export default {
  name: "Stations",
  components: { GridWrapper, ColWrap, Card },
  computed: {
    radioStations: () => [0, 1, 2, 3, 4, 5]
  }
};
</script>

<style>
</style>
