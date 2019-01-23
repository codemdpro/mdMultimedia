<template>
  <div class="container cursor-pointer relative" @click="openDetail('snider')">
    <div class="absolute pin py-6">
      <div class="font-serif font-bold text-xl sm:text-lg text-grey-light hover:text-grey">{{cap}}</div>
    </div>
    <img class="w-full rounded-t" :src="img" alt="Sunset in the mountains">
  </div>
</template>

<script>
export default {
  name: "CardImage",
  props: {
    img: { requited: true },
    cap: { type: String }
  },
  methods: {
    openDetail(station) {
      return this.$router.push({ path: `${this.$route.path}/${station}` });
    }
  }
};
</script>
