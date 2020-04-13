<template>
  <b-container class="contact">
    <b-row>
      <b-col cols="7">
        <div class="cause">
          <h4>CONTACT FORM</h4>
        </div>
        <p
          class="padd"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt dolor et tristique bibendum. Aenean sollicitudin vitae dolor ut posuere.</p>
        <Contact/>
        <vue-recaptcha sitekey="6LdKW5UUAAAAAC6foMBDpclZplysFeqhSy5GldXT" @verify="onVerify()"></vue-recaptcha>
        <Button :btn="btn" />
      </b-col>
      <b-col>
        <ContactInfo />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Contact from "@/components/contact/Contact";
import ContactInfo from "@/components/contact/ContactInfo";
import VueRecaptcha from "vue-recaptcha";
export default {
  name: "ContactForm",
  components: {
    Contact,
    ContactInfo,
    VueRecaptcha
  },
  data() {
    return {
      btn: "send message".toLocaleUpperCase()
    };
  }
};
</script>

<style>
.contact {
  margin-bottom: 40px;
}
h4 {
  color: #aeadad;
}
.cause {
  margin-bottom: 20px;
}
.padd {
  margin-bottom: 25px;
}
.btn {
  margin-top: 15px;
}
</style>
