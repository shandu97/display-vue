<template>
  <div id="app">
    <PageTitle :msg="msg"/>
    <Category/>
  </div>
</template>

<script>
import PageTitle from "@/components/PageTitle";
import Category from "@/components/work/Category";
export default {
  name: "Home",
  components: {
    Category,
    PageTitle
  },
  data() {
    return {
      msg: "check out what i can do?"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>