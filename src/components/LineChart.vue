<script lang="ts">
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default {
  name: "App",
  components: {
    Line,
  },
  props: ["x", "y", "time", "name"],
  data() {
    return {
      data: {
        labels: this.x,
        datasets: [
          {
            label: this.time,
            backgroundColor: "#f87979",
            data: this.y,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  methods: {
    showData() {
      console.log("grafico " + this.x);
      console.log("grafico " + this.y);
    },
  },
  mounted() {
    this.showData();
  },
};
</script>

<template>
  <div class="card mb-5">
    <div class="card-header text-center p-3">{{ this.name }}</div>
    <div class="card-body">
      <Line :data="data" :options="options" style="height: 400px" />
    </div>
  </div>
</template>
