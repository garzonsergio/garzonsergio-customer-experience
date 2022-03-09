<template>
  <table>
    <thead>
      <tr>
        <th>cuota</th>
        <th>fecha</th>
        <th>valor</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="pay in payments.recordsArray" :key="pay.paymentId">
        <td>
          {{
            pay.paymentTypeDescription
              ? pay.paymentTypeDescription
              : "Pago Indeterminado"
          }}
        </td>
        <td>4</td>
        <td>
          {{
            pay.amountValue ? formatPesos(pay.amountValue) : "value unavailable"
          }}
        </td>
      </tr>
      <tr>
        <td>Cuota</td>
        <td>33.458%</td>
        <td>{{ totalAmount }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import api from "@/api.js";
import _get from "lodash/get";

export default {
  name: "CeTable",
  data() {
    return {
      payments: {},
      customerDetails: {},
      prospectDetails: {},
    };
  },

  computed: {
    totalAmount() {
      return _get(this.prospectDetails, "[0].totalValue", "not working");
    },
  },

  created() {
    this.getPaymentInfo();
    this.getCustomerDetails();
    this.getProspectDetail();
  },
  methods: {
    log: console.log,
    _get: _get,
    formatPesos(value) {
      let pesos = new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
      }).format(value);
      return pesos;
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
    async getCustomerDetails() {
      const code = await this.$route.params.code;
      const prospectId = await this.$route.params.prospectId;
      await api
        .getCustomerDetail(code, prospectId)
        .then((detail) => (this.customerDetails = detail));
    },

    async getProspectDetail() {
      const customerId = await this.$route.params.customerId;
      await api
        .getProspectsByCustomer(customerId)
        .then((detail) => (this.prospectDetails = detail));
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
}
</style>
