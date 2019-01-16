<template>
  <main class="bg-grey-darkest mt-8 py-2">
    <div class="bg-grey-dark container mx-auto px-4 py-4">PAGE HEADER</div>
    <div class="container flex items-center mx-auto mb-8">
      <slot/>
    </div>
  </main>
</template>

<script>
export default {
  name: "MainFrame"
};
</script>
