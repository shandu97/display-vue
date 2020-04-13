<template>
  <div class="home">
    <HeroBanner/>
    <CalloutSection/>
    <b-col class="text-center">
      <router-link to="/about"><Button :btn="btn"/></router-link>
    </b-col>
    <Popup/>
    <ProjectDescription/>
    <Carousel/>
  </div>
</template>

<script>
  import HeroBanner from "@/components/home/HeroBanner";
  import CalloutSection from "@/components/home/CalloutSection";
  import Popup from "@/components/home/Popup";
  import ProjectDescription from "@/components/home/ProjectDescription";
  import Carousel from "@/components/home/Carousel";
  export default {
    name: "Home",
    components: {
      HeroBanner,
      CalloutSection,
      Popup,
      ProjectDescription,
      Carousel
    },
    data() {
      return {
        btn: "browse portfolio"
      };
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn {
  text-transform: uppercase;
  -moz-animation: fadein 5s; /* Firefox */
  -webkit-animation: fadein 5s; /* Safari and Chrome */
  -o-animation: fadein 5s; /* Opera */
}
</style>
