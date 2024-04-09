<script>
export default {
  props: ["data"],
  data() {
    return {
      showSubLinks: false,
    };
  },
  methods: {
    openLink() {
      this.showSubLinks = !this.showSubLinks;
    },
  },
};
</script>

<template>
  <!-- link -->
  <div>
    <!-- Link effettivo -->
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <i :class="['fa-solid', data.iconClass]"></i>
        <span class="ms-2">{{ data.title }}</span>
      </div>

      <button class="btn text-white p-0 m-0 btn-outline-dark" @click="openLink">
        <i class="fa-solid fa-chevron-down"></i>
      </button>
    </div>

    <!-- Sotto links -->
    <ul class="list-unstyled ps-4 p-2" v-if="showSubLinks">
      <li v-for="subLink in data.sublinks" class="text-white">
        <a href="" class="text-white text-decoration-none"> {{ subLink }}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss"></style>
