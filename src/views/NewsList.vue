<template>
  <grid-wrapper>
    <col-wrap>
      <card-comp :content="newsData"/>
    </col-wrap>

    <col-wrap>
      <card-comp :content="newsData"/>
    </col-wrap>

    <col-wrap>
      <card-comp :content="newsData"/>
    </col-wrap>

    <col-wrap>
      <card-comp :content="newsData"/>
    </col-wrap>

    <col-wrap>
      <card-comp :content="newsData"/>
    </col-wrap>

    <col-wrap>
      <card-comp :content="newsData"/>
    </col-wrap>

    <col-wrap>
      <card-comp :content="newsData"/>
    </col-wrap>

    <col-wrap>
      <card-comp :content="newsData"/>
    </col-wrap>

    <col-wrap>
      <card-comp :content="newsData"/>
    </col-wrap>

    <col-wrap>
      <card-comp :content="newsData"/>
    </col-wrap>
  </grid-wrapper>
</template>

<script>
import GridWrapper from "../components/wrapper/GridWrapper";
import ColWrap from "../components/wrapper/ColWrap";
import CardComp from "../components/plugins/CardComp";
export default {
  name: "NewsList",
  components: { GridWrapper, ColWrap, CardComp },
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
