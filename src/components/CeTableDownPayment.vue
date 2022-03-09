<template>
  <table>
    <thead>
      <tr>
        <th>valor programado</th>
        <th>valor pagado</th>
        <th>valor pendiente</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{ formatPesos(downPayment) }}</td>
        <td>{{ formatPesos(downPaymentAccumulated) }}</td>
        <td>{{ formatPesos(downPayment - downPaymentAccumulated) }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import api from "@/api.js";
import _get from "lodash/get";

export default {
  name: "CeTableDownPayment",
  data() {
    return {
      payments: {},
      deal: {},
    };
  },

  computed: {
    downPayment() {
      return _get(this.deal, "[0].DownPayment", "value not found");
    },
    downPaymentAccumulated() {
      return this.payments.reduce((a, b) => a + parseFloat(b.amountValue), 0);
    },
  },
  created() {
    this.getDealData();
    this.getPaymentInfo();
  },
  methods: {
    _get: _get,
    formatPesos(value) {
      let pesos = new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
      }).format(value);
      return pesos;
    },
    formatPercent(value) {
      let percent = new Intl.NumberFormat("es-CO", {
        style: "percent",
        maximumFractionDigits: 3,
      }).format(value);
      return percent;
    },

    async getPaymentInfo() {
      try {
        const code = await this.$route.params.code;
        const prospectId = await this.$route.params.prospectId;
        await api
          .getPayments(code, prospectId)
          .then((payments) => (this.payments = payments));
      } catch (error) {
        console.error(error);
      }
    },
    async getDealData() {
      const prospectId = await this.$route.params.prospectId;
      await api.getDeal(prospectId).then((deal) => (this.deal = deal));
    },
  },
};
</script>
<style scoped>
table {
  font-size: var(--md);
  width: 80vw;
  border-collapse: collapse;

  margin: var(--lg-space);
}
td,
th {
  border: 1px solid var(--tables-lines);
  text-align: center;
  padding: var(--sm);
}
tr:nth-child(even),
th {
  background-color: var(--tables-background);
  text-transform: capitalize;
}
</style>
