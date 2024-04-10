<script lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default {
  name: "App",
  components: {
    Bar,
  },
  props: ["x", "y", "name"],
  data() {
    return {
      data: {
        labels: this.x,
        datasets: [
          {
            label: "Range",
            backgroundColor: [
              "#41B883",
              "#E46651",
              "#00D8FF",
              "#DD1B16",
              "#430A5D",
            ],
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
};
</script>

<template>
  <div class="card col-12 col-md-5">
    <div class="card-header text-center p-3">{{ this.name }}</div>
    <div class="card-body">
      <Bar :data="data" :options="options" />
    </div>
  </div>
</template>
