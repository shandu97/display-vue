<template>
  <b-container>
    <b-row>
      <b-col>
        <ul>
          <li v-for="item in items" :key="item.items">{{item.text}}</li>
        </ul>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import db from "@/firebase/init";
export default {
  computed: {
    items() {
      return this.$store.getters.items;
    }
  },
};
</script>

<style scoped>
li {
  color: #aeadad;
  display: block;
}
</style>
