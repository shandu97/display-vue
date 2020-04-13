<template>
  <b-container class="call-para">
    <b-row>
      <b-col>
        <p>{{calloutSection}}</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "CalloutSection",
  computed: {
    calloutSection() {
      return this.$store.getters.calloutSection;
    }
  }
};
</script>

<style>
.call-para p {
  margin-top: 18px;
  font-size: 20px;
  text-align: center;
  -moz-animation: fadein 4s; /* Firefox */
  -webkit-animation: fadein 4s; /* Safari and Chrome */
  -o-animation: fadein 4s; /* Opera */
}
</style>