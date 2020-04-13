<template>
  <div class="description container text-center" v-html="description"></div>
</template>

<script>
export default {
  name: "ProjectDescription",
   computed: {
    description() {
       return this.$store.getters.description;
    }
  }
};
</script>

<style>
.description {
  margin-bottom: 20px;
}
.description h3 {
  color: gray;
  text-transform: uppercase;
}
</style>
