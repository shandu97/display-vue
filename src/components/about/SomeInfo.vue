<template>
  <b-container>
    <b-row>
      <b-col v-html="statement"></b-col>
      <b-col v-html="facts"></b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "SomeInfo",
  computed: {
    statement() {
      return this.$store.getters.statement;
    },
    facts() {
      return this.$store.getters.facts;
    }
  }
};
</script>

<style >
h3 {
  text-transform: uppercase;
  color: #8a8888;
}
</style>

