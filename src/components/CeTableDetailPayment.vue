<template>
  <table>
    <tfoot>
      <tr>
        <th>Pagado</th>
        <td></td>
        <td>{{ formatPesos(downPayment + deposit) }}</td>
      </tr>
    </tfoot>
    <tbody>
      <tr>
        <td>Separación</td>
        <td>{{ formatPercent(deposit / totalAmount) }}</td>
        <td>{{ formatPesos(deposit) }}</td>
      </tr>
      <tr>
        <td>Cuota</td>
        <td>{{ formatPercent(downPayment / totalAmount) }}</td>
        <td>{{ formatPesos(downPayment) }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import api from "@/api.js";
import _get from "lodash/get";

export default {
  name: "CeTableDetailPayment",
  data() {
    return {
      prospectDetails: {},
      deal: {},
    };
  },

  computed: {
    totalAmount() {
      return _get(this.prospectDetails, "[0].totalValue", "value not found");
    },
    downPayment() {
      return _get(this.deal, "[0].DownPayment", "value not found");
    },
    deposit() {
      return _get(this.deal, "[0].Deposit", "value not found");
    },
  },
  created() {
    this.getProspectDetail();
    this.getDealData();
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
    async getProspectDetail() {
      const customerId = await this.$route.params.customerId;
      await api
        .getProspectsByCustomer(customerId)
        .then((detail) => (this.prospectDetails = detail));
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
td {
  text-align: center;
  padding: var(--sm);
}
tfoot tr {
  border-top: 1px solid black;
}
</style>
