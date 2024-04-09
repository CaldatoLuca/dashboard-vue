<script>
import Main from "./components/Main.vue";
import Nav from "./components/Nav.vue";

export default {
  components: {
    Main,
    Nav,
  },
};
</script>

<template>
  <div class="d-flex">
    <Nav></Nav>
    <Main></Main>
  </div>
</template>

<style scoped></style>
