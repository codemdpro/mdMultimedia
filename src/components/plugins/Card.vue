<template>
  <card-wrap>
    <card-image img="https://tailwindcss.com/img/card-top.jpg" cap="The Coldest Sunset"/>
    <card-footer>Premium Station {{content}}</card-footer>
  </card-wrap>
</template>

<script>
import CardWrap from "../wrapper/CardWrap";
import CardImage from "../plugins/CardImage";
import CardFooter from "../plugins/CardFooter";
export default {
  name: "Card",
  props: {
    content: { require: true }
  },
  components: { CardWrap, CardImage, CardFooter }
};
</script>