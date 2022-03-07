<template>
  <button>{{ textLabel }}</button>
</template>
<script>
export default {
  name: "CeButton",
  props: {
    textLabel: {
      type: String,
      default: "textLabel",
    },
    href: {
      type: String,
      default: "#",
    },
  },
};
</script>
<style scoped>
@import "../styles/styles.css";

button {
  background: var(--background-button);
  border-radius: 5px;
  border: none;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  color: var(--blue-main);
  font-family: var(--font-project);
  font-size: var(--md);
  font-weight: 400;
  margin: var(--sm-space);
  padding: var(--sm-space) var(--md-space);
  text-transform: uppercase;
}

button:hover {
  cursor: pointer;
}
button:active {
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
  opacity: 80%;
}
</style>
