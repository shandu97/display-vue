<template>
  <b-container>
    <b-row>
      <b-col>
        <h3>{{ services }}</h3>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Services",
  computed: {
    services() {
      return this.$store.getters.services;
    }
  }
};
</script>

<style scoped>
h3 {
  text-transform: uppercase;
  color: gray;
  margin-bottom: 30px;
}
</style>