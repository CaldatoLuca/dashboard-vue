<script>
import Header from "../components/Header.vue";
import LineChart from "./LineChart.vue";
import axios from "axios";
import { store } from "../store";

export default {
  data() {
    return {
      store,
      loader: false,
      monConnections: {
        xAxe: [],
        yAxe: [],
      },
    };
  },
  components: {
    Header,
    LineChart,
  },
  async mounted() {
    await this.fetchMonthlyConnections(); // Wait for API call to complete
    this.loader = true; // Set loader to true after API call is completed
  },
  methods: {
    async fetchMonthlyConnections() {
      try {
        const response = await axios.get(
          store.api.baseUrl + store.api.monthlyConnections
        );
        const data = response.data;
        console.log(data);
        this.monConnections.xAxe = data.map((item) => item.month);
        this.monConnections.yAxe = data.map((item) => item.connections);
        console.log(this.monConnections.xAxe);
        console.log(this.monConnections.yAxe);
      } catch (error) {
        console.log("Error in fetchMonthlyConnections: " + error);
      }
    },
  },
};
</script>

<template>
  <main class="min-vh-100 flex-grow-1">
    <Header></Header>

    <!--GRAFICI - Use v-if="loader" to conditionally render LineChart -->
    <div class="p-5" v-if="loader">
      <!-- Connessioni mensili -->

      <LineChart
        :x="this.monConnections.xAxe"
        :y="this.monConnections.yAxe"
        :time="'Monthly'"
        :name="'Monthly Connections'"
      />
    </div>
  </main>
</template>

<style scoped lang="scss"></style>
