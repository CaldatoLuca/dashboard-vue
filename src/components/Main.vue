<script>
import Header from "../components/Header.vue";
import LineChart from "./LineChart.vue";

export default {
  components: {
    Header,
    LineChart,
  },
};
</script>

<template>
  <main class="min-vh-100 flex-grow-1">
    <Header></Header>
    <div class="p-5">
      <LineChart />
    </div>
  </main>
</template>

<style scoped lang="scss"></style>
