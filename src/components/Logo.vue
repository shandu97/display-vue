<template>
  <div v-if="img">
    <img :src="img[0].link">
  </div>
</template>

<script>
  export default {
    name: "Logo",
    computed: {
      img() {
        return this.$store.getters.img;
      }
    },
    created() {
      this.$store.dispatch("getLogo");
      // console.log(this.img);
    }
  };
</script>

<style scoped>
img {
  margin-top: 30px;
  margin-bottom: 14px;
}
</style> 