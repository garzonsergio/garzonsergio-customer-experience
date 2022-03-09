<template>
  <div class="home">
    <section class="negotation-container">
      <ce-title textLabel="datos de negociación" />
      <div class="negotation-content">
        <div class="negotation-content--item">
          <h3>fecha de Escrituración:</h3>
          <p>{{ deal[0]?.DeedScheduleDate }}</p>
        </div>
        <div class="negotation-content--item">
          <h3>fecha de cierre:</h3>
          <p>{{ deal[0]?.CloseDate }}</p>
        </div>
        <div class="negotation-content--item">
          <h3>fecha de entrega:</h3>
          <p>{{ project?.deliveryDate }}</p>
        </div>
        <div class="negotation-content--item">
          <h3># encargo fiduciario:</h3>
          <p>{{ deal[0]?.AgreementNumber }}</p>
        </div>
      </div>
    </section>
    <section>
      <ce-title textLabel="detalles de pagos" />
      <ce-table />
    </section>
  </div>
</template>

<script>
import api from "@/api.js";

import CeTitle from "@/components/CeTitle.vue";
import CeTable from "@/components/CeTable.vue";

export default {
  name: "Cartera",
  components: {
    CeTitle,
    CeTable,
  },
  data() {
    return {
      customerDetails: {},
      project: {},
      deal: {},
    };
  },
  created() {
    this.getCustomerDetails();
    this.getCodeProject();
    this.getDealData();
  },
  methods: {
    async getDealData() {
      const prospectId = await this.$route.params.prospectId;
      await api.getDeal(prospectId).then((deal) => (this.deal = deal));
    },

    async getCodeProject() {
      const code = await this.$route.params.code;
      await api.getProject(code).then((project) => (this.project = project));
    },

    async getCustomerDetails() {
      const code = await this.$route.params.code;
      const prospectId = await this.$route.params.prospectId;
      await api
        .getCustomerDetail(code, prospectId)
        .then((detail) => (this.customerDetails = detail));
    },
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
  width: 80vw;
  flex-wrap: wrap;
  justify-content: space-around;
  /* flex-direction: row; */
}

.negotation-content--item {
  display: flex;
  flex-direction: column;
  font-size: var(--sm);
  justify-content: start;
  margin: var(--lg-space) var(--sm-space);
}

h3 {
  margin-bottom: 8px;
  text-transform: capitalize;
  font-size: var(--md);
}
</style>
