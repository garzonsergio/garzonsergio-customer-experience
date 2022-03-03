<template>
  <ce-header />
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/cartera">Cartera</router-link>
  </div>
  <router-view />
</template>
<script>
import CeHeader from "@/components/CeHeader";

export default {
  name: "App",
  components: {
    CeHeader,
  },
};
</script>

<style>
@import "./styles/styles.css";
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  /* Font Properties */
  font-size: 62.5%;
  font-family: Lato, Helvetica, Arial, sans-serif;

  /* Colors */
  --title-color: #ffffff;
  --blue-main: #096799;
  --blue-secondary: #b7e5fe;
  --subtitles-color: #545454;
  --tables-background: #c0c2c4;
  --tables-lines: #707070;
}
</style>
