<template>
  <table>
    <tfoot>
      <tr>
        <th>Pagado</th>
        <td></td>
        <td></td>
      </tr>
    </tfoot>
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
        <td>53.800.0000000</td>
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
    };
  },

  created() {
    this.getPaymentInfo();
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
  },
};
</script>
<style scoped>
table {
  font-size: var(--md);
  width: 90vw;
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
