<template>
  <card-wrap>
    <card-image :img="content.img" :cap="content.cap"/>
    <card-footer>{{content.source}}</card-footer>
  </card-wrap>
</template>

<script>
import CardWrap from "../wrapper/CardWrap";
import CardImage from "../plugins/CardImage";
import CardFooter from "../plugins/CardFooter";
export default {
  name: "CardComp",
  components: { CardWrap, CardImage, CardFooter },
  props: { content: { required: true } }
};
</script>