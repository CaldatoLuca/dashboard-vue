<script>
import UserIcon from "./UserIcon.vue";
import { store } from "../store";

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
  <!-- header -->
  <header
    class="d-flex justify-content-between align-items-center py-4 px-5 bg-black text-white"
  >
    <!-- hamburger menu -->
    <button class="btn text-white btn-outline-dark">
      <i class="fa-solid fa-bars"></i>
    </button>

    <!-- profile manage -->
    <div class="d-flex align-items-center gap-2">
      <button class="btn text-white btn-outline-dark">
        <i class="fa-solid fa-envelope"></i>
      </button>
      <user-icon />
      <div>{{ store.user }}</div>
      <button class="btn text-white btn-outline-dark">
        <i class="fa-solid fa-chevron-down"></i>
      </button>
    </div>
  </header>
</template>

<style scoped lang="scss"></style>
