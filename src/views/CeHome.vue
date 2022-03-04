<template>
  <div class="home">
    <section class="negotation-container">
      <ce-title textLabel="datos de negociación" />
      <div class="negotation-content">
        <ce-top-data
          labelTitle="fecha de escrituración"
          labelContent="06/01/2021"
        />
        <ce-top-data labelTitle="fecha de cierre" labelContent="11/08/2021" />
        <ce-top-data labelTitle="fecha de entrega" labelContent="06/01/2021" />
        <ce-top-data
          labelTitle="# encargo fiduciario"
          labelContent="1274620000060"
        />
      </div>
    </section>
    <section>
      <ce-title textLabel="detalles de pagos" />
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

import CeTitle from "@/components/CeTitle.vue";
import CeTopData from "@/components/CeTopData.vue";

export default {
  name: "Home",
  components: {
    CeTitle,
    CeTopData,
  },
};
</script>
<style scoped>
section {
  width: 100vw;
  display: flex;
  margin-top: var(--md-space);
  flex-direction: column;
  align-items: center;
}
.negotation-content {
  display: flex;
  width: 90vw;
  flex-wrap: wrap;
  justify-content: space-around;
  /* flex-direction: row; */
}
</style>
