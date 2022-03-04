<template>
  <div class="home">
    <section>
      <ce-title />
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

import CeTitle from "@/components/CeTitle.vue";

export default {
  name: "Home",
  components: {
    CeTitle,
  },
};
</script>
<style scoped>
section {
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: 16px;
}
</style>
