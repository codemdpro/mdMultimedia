<template>
  <grid-wrapper>
    <col-wrap v-for="topic in newsTopics" :key="topic">
      <card-comp :content="newsData"/>
    </col-wrap>
  </grid-wrapper>
</template>

<script>
import GridWrapper from "../../components/wrapper/GridWrapper";
import ColWrap from "../../components/wrapper/ColWrap";
import CardComp from "../../components/plugins/CardComp";
export default {
  name: "Topics",
  components: { GridWrapper, ColWrap, CardComp },
  computed: {
    newsTopics: () => [0, 1, 2, 3, 4, 5]
  },

  data: _ =>
    (_ = {
      newsData: {
        cap: "Real News",
        img: "https://tailwindcss.com/img/card-top.jpg",
        source: "News Source"
      }
    })
};
</script>

<style>
</style>
