<script>
import { store } from "../store";
import UserIcon from "../components/UserIcon.vue";

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    UserIcon,
  },
};
</script>

<template>
  <!-- left navbar -->
  <nav class="bg-dark py-4 px-3 text-white">
    <!-- title -->
    <h1 class="fs-5 fw-bold">- {{ store.appName }} -</h1>

    <!-- user -->
    <div class="d-flex">
      <UserIcon></UserIcon>
    </div>
  </nav>
</template>

<style scoped lang="scss"></style>
