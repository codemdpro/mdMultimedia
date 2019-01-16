<template>
  <footer class="bg-grey fixed pin-b pin-x border-grey-darker border-t-2 overflow-hidden">
    <media-player v-if="hidePlayer">
      <list-wrap>
        <button-nav toward="/app/radio">Play</button-nav>
      </list-wrap>
    </media-player>
    <list-wrap>
      <button-nav toward="/radio">Radio</button-nav>
      <button-nav toward="/News">News</button-nav>
      <button-nav toward="/about">224</button-nav>
      <button-nav toward="/detail">M D</button-nav>
      <li @click="showPlayer" class="bg-grey-lightest m-1 px-4 pt-6 rounded text-blue">|||</li>
    </list-wrap>
  </footer>
</template>

<script>
import ListWrap from "../wrapper/ListWrap";
import ButtonNav from "../plugins/ButtonNav";
import MediaPlayer from "../plugins/MediaPlayer";
export default {
  name: "NavFooter",
  components: { ListWrap, ButtonNav, MediaPlayer },
  data: d => (d = { hidePlayer: false }),
  methods: {
    showPlayer() {
      return (this.hidePlayer = !this.hidePlayer);
    }
  }
};
</script>

