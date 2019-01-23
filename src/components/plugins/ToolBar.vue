<template>
  <div class="bg-black-light border-grey border-b-2 flex justify-around w-full p-2 shadow-md">
    <back-btn/>
    <route-name>
      <tog-btn slot="btn1"/>
    </route-name>
    <menu-btn/>
  </div>
</template>

<script>
import BackBtn from "./BackBtn";
import MenuBtn from "./MenuBtn";
import TogBtn from "./TogBtn";
import RouteName from "./RouteName";
export default {
  name: "ToolBar",
  components: { BackBtn, MenuBtn, TogBtn, RouteName }
};
</script>
