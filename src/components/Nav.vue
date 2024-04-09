<script>
import { store } from "../store";
import UserIcon from "../components/UserIcon.vue";
import AccordionLink from "../components/AccordionLink.vue";

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    UserIcon,
    AccordionLink,
  },
};
</script>

<template>
  <!-- left navbar -->
  <nav class="bg-dark py-4 px-3 text-white" style="width: 200px">
    <div class="position-fixed">
      <!-- title -->
      <h1 class="fs-5 fw-bold mb-4">- {{ store.appName }} -</h1>

      <!-- user -->
      <div class="d-flex gap-4 mb-3">
        <!-- Icona user -->
        <UserIcon></UserIcon>

        <!-- Nome e benvenuto user -->
        <div>
          <div class="text-white-subtle">Welcome</div>
          <div class="fw-bold">{{ store.user }}</div>
        </div>
      </div>

      <!-- Links -->
      <div>
        <div class="fw-bold text-uppercase py-2 border-bottom">General</div>
        <ul class="list-group list-group-flush">
          <li
            class="list-group-item bg-dark text-white py-2 ps-0 pe-2"
            v-for="link in store.links"
          >
            <AccordionLink :data="link"></AccordionLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss"></style>
