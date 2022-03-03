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
</style>
