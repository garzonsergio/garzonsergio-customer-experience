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
  background: var(--background-button);
  border: none;
  padding: 10px 24px;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 400;
  color: var(--subtitles-color);
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  margin: 10px;
}

button:hover {
  cursor: pointer;
}
button:active {
  opacity: 80%;
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
}
</style>
