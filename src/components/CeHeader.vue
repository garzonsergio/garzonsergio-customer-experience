<template>
  <header>
    <div>
      <h1>{{ titlePage }}</h1>
      <figure><img alt="imagen del proyecto" /></figure>
    </div>
  </header>
</template>
<script>
export default {
  name: "CeHeader",

  data() {
    return {};
  },
  methods: {},
  props: {
    titlePage: {
      type: String,
      default: "Titulo Cartera",
    },
    routerButton: {
      type: String,
      Default: "Home Button",
    },
  },
};
</script>
<style scoped>
@import "../styles/styles.css";

h1 {
  font-size: var(--lg);
  color: var(--title-color);
  display: flex;
  justify-content: end;
  width: 50%;
}

header div {
  background-color: var(--blue-main);
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 10vh;
  width: 100vw;
}

header div figure {
  display: flex;
  justify-content: end;
  width: 40%;
  padding: 0 var(--lg-space);
}
</style>