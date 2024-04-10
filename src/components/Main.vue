<script>
import Header from "../components/Header.vue";
import LineChart from "./LineChart.vue";
import DoughnutChart from "./DoughnutChart.vue";
import BarChart from "./BarChart.vue";
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
      operatingSystem: {
        devices: [],
        percentage: [],
      },
      userAgeRange: {
        xAxe: [],
        yAxe: [],
      },
    };
  },
  components: {
    Header,
    LineChart,
    DoughnutChart,
    BarChart,
  },
  async mounted() {
    await this.fetchMonthlyConnections(); // Wait for API call to complete
    await this.fetchOperatingSystem();
    await this.fetchUserAgeRange();
    this.loader = true; // Set loader to true after API call is completed
  },
  methods: {
    async fetchMonthlyConnections() {
      try {
        const response = await axios.get(
          store.api.baseUrl + store.api.monthlyConnections
        );
        const data = response.data;

        this.monConnections.xAxe = data.map((item) => item.month);
        this.monConnections.yAxe = data.map((item) => item.connections);
      } catch (error) {
        console.log("Error in fetchMonthlyConnections: " + error);
      }
    },
    async fetchOperatingSystem() {
      try {
        const response = await axios.get(store.api.baseUrl + store.api.devices);
        const data = response.data;

        this.operatingSystem.devices = data.map((item) => item.os);
        this.operatingSystem.percentage = data.map((item) => item.connections);
      } catch (error) {
        console.log("Error in fetchOperatingSystem: " + error);
      }
    },
    async fetchUserAgeRange() {
      try {
        const response = await axios.get(
          store.api.baseUrl + store.api.userAgeRange
        );
        const data = response.data;

        this.userAgeRange.xAxe = data.map((item) => item.range);
        this.userAgeRange.yAxe = data.map((item) => item.connections);
      } catch (error) {
        console.log("Error in fetchUserAgeRange: " + error);
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

      <div class="d-flex mb-5 justify-content-between">
        <BarChart
          :x="this.userAgeRange.xAxe"
          :y="this.userAgeRange.yAxe"
          :name="'Users Age Range'"
        ></BarChart>
        <DoughnutChart
          :devices="this.operatingSystem.devices"
          :percentage="this.operatingSystem.percentage"
          :name="'Operating System'"
        ></DoughnutChart>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss"></style>
