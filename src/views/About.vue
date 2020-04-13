<template>
  <div class="about">
    <PageTitle :msg="msg"/>
    <AboutUs/>
    <SomeInfo/>
    <Services/>
    <Tabs/>
    <ServicesList/>
  </div>
</template>

<script>
import PageTitle from "@/components/PageTitle";
import AboutUs from "@/components/about/AboutUs";
import Services from "@/components/about/Services";
import ServicesList from "@/components/about/ServicesList";
import SomeInfo from "@/components/about/SomeInfo";
import Tabs from "@/components/about/Tabs";
export default {
  name: "About",
  components: {
    Services,
    AboutUs,
    PageTitle,
    ServicesList,
    SomeInfo,
    Tabs
  },
  data() {
    return {
      msg: "about my bussines"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>