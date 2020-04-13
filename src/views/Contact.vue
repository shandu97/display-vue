<template>
  <div class="contact">
    <PageTitle :msg="msg"/>
    <GoogleMap/>
    <ContactForm/>
  </div>
</template>

<script>
import GoogleMap from "@/components/contact/GoogleMap";
import PageTitle from "@/components/PageTitle";
import ContactForm from "@/components/contact/ContactForm";
import VueCkeditor from "@/components/VueCkeditor";
export default {
  name: "Contact",
  components: {
    GoogleMap,
    PageTitle,
    ContactForm
  },
  data() {
    return {
      msg: "got a question or inquiry"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>