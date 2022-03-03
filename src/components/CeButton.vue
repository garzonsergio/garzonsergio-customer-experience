<template>
  <button href="href">{{ textLabel }}</button>
</template>
<script>
export default {
  name: "CeButton",
  props: {
    textLabel: {
      type: String,
      default: "Button Name",
    },
    href: {
      type: String,
      default: "#",
    },
  },
};
</script>
<style scoped>
button {
  font-size: var(--md);
}
</style>
