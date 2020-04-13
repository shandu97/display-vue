<template>
  <section class="hero-banner">
    <b-container>
      <b-row>
        <b-col>
          <img :src="slider">
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: "HeroBanner",
  computed: {
    slider() {
      return this.$store.getters.slider;
    }
  }
};
</script>

<style>
.hero-banner {
  background-image: url(/images/sunburst.svg);
  margin-top: 0px;
  max-height: 525px;
  background-color: #2ecc71;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 120px;
  margin-bottom: 80px;
}
.hero-banner .container img {
  margin-left: 120px;
  -moz-animation: fadein 2s; /* Firefox */
  -webkit-animation: fadein 2s; /* Safari and Chrome */
  -o-animation: fadein 2s; /* Opera */
}
</style>