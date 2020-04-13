<template>
  <div class="padding">
    <div class="container" v-html="aboutUs"></div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  data() {
    return {};
  },
  computed: {
    aboutUs() {
      return this.$store.getters.aboutUs;
    }
  }
};
</script>

<style>
.float-left {
  margin-right: 40px;
}
.padding {
  margin-top: 45px;
  margin-bottom: 80px;
}
</style>