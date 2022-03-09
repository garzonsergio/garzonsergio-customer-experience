<template>
  <h2>{{ textLabel }}</h2>
</template>
<script>
export default {
  name: "CeTitle",
  props: {
    textLabel: {
      type: String,
      default: "textLabel",
    },
  },
};
</script>
<style scoped>
h2 {
  background-color: var(--blue-secondary);
  /* border-bottom: 3px solid var(--blue-main); */
  border-radius: 50rem;
  font-size: var(--md);
  padding: var(--sm-space) var(--md-space);
  text-transform: capitalize;
  width: 80vw;
}
</style>
