<template>
  <transition name="bounce" mode="out-in">
    <button
      v-text="ln.toUpperCase()"
      :key="ln"
      @click="toggleLang"
      class="bg-green-dark hover:bg-green-darker px-1 mx-2 text-grey-lightest text-sm hover:text-green border border-grey-light hover:border-transparent rounded shadow pin-r"
    ></button>
  </transition>
</template>

<script>
export default {
  name: "TogBtn",
  methods: {
    toggleLang() {
      return this.$store.commit("SET_LANG", this.lnNot);
    }
  },
  computed: {
    ln() {
      return this.$store.getters.lang;
    },
    lnNot() {
      return this.ln == "fr" ? "en" : "fr";
    }
  }
};
</script>
