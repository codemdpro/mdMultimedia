<template>
  <footer class="bg-grey fixed pin-b pin-x border-grey-darker border-t-2 overflow-hidden px-4 py-2">
    <media-player v-if="hidePlayer">
      <list-wrap>
        <button-nav toward="/app/radio">Play</button-nav>
      </list-wrap>
    </media-player>

    <list-wrap>
      <button-nav toward="/radio">
        <i class="icon ion-md-radio text-2xl"></i>
      </button-nav>
      <button-nav toward="/News">
        <i class="icon ion-md-paper text-2xl"></i>
      </button-nav>
      <button-nav toward="/about">
        <i class="icon ion-md-rainy text-2xl"></i>
      </button-nav>
      <button-nav toward="/detail">
        <i class="icon ion-md-cog text-2xl"></i>
      </button-nav>
      <btn-tog :icon="toggleIcon" @toggle="showPlayer"/>
    </list-wrap>
  </footer>
</template>

<script>
import ListWrap from "../wrapper/ListWrap";
import ButtonNav from "../plugins/ButtonNav";
import BtnTog from "../plugins/BtnTog";
import MediaPlayer from "../plugins/MediaPlayer";
export default {
  name: "NavFooter",
  components: { ListWrap, ButtonNav, BtnTog, MediaPlayer },
  data: d => (d = { hidePlayer: false }),
  methods: {
    showPlayer() {
      return (this.hidePlayer = !this.hidePlayer);
    }
  },
  computed: {
    toggleIcon() {
      return this.hidePlayer ? "arrow-dropdown" : "arrow-dropup";
    }
  }
};
</script>

