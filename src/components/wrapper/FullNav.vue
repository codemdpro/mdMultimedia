<template>
  <nav class="fixed flex items-center justify-between flex-wrap bg-transparent p-1 pin-b w-full">
    <div
      class="bg-green-lightest block flex items-center border border-green-lightest rounded py-1 mx-auto"
    >
      <nav-btn toward="/radios" icon="radio"/>

      <nav-btn toward="/news" icon="paper"/>

      <nav-btn toward="/podcasts" icon="headset"/>

      <nav-btn toward="/weather" icon="rainy"/>
    </div>
  </nav>
</template>

<script>
import NavBtn from "../plugins/NavBtn";
import BtnTog from "../plugins/BtnTog";
export default {
  name: "FullNav",
  components: { NavBtn, BtnTog }
};
</script>

<style>
</style>
