<template>
  <iframe :src="iframe" width="100%" height="500" frameborder="0" style="border:0" allowfullscreen></iframe>
</template>

<script>
export default {
  name: "GoogleMap",
  computed: {
    iframe() {
      return this.$store.getters.iframe;
    }
  }
};
</script>

<style>
iframe {
  margin-bottom: 30px;
}
</style>