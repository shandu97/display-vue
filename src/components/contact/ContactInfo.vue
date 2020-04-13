<template>
  <div class="coall">
    <div class="cifno">
      <div class="cause" v-html="cause"></div>
    </div>
    <div class="chours" v-html="chours"></div>
  </div>
</template>

<script>
export default {
  name: "ContactInfo",
  computed: {
      cause() {
          return this.$store.getters.cause;
      },
      chours() {
          return this.$store.getters.chours;
      }
  }
};
</script>

<style>
.mailc {
  color: #2ecc71;
}
.chours {
  margin-top: 40px;
}
tr {
  color: #aeadad;
}
table {
  margin-top: 20px;
}
td {
  padding-right: 100px;
  padding-bottom: 10px;
}
</style>
