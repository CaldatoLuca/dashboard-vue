<script lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "vue-chartjs";

ChartJS.register(ArcElement, Tooltip, Legend);

export default {
  name: "App",
  components: {
    Doughnut,
  },
  props: ["devices", "percentage", "name"],
  data() {
    return {
      data: {
        labels: this.devices,
        datasets: [
          {
            backgroundColor: [
              "#41B883",
              "#E46651",
              "#00D8FF",
              "#DD1B16",
              "#430A5D",
            ],
            data: this.percentage,
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
      <Doughnut :data="data" :options="options" />
    </div>
  </div>
</template>
