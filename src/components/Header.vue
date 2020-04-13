<template>
  <b-container class="container">
    <b-row>
      <b-col>
        <Logo />
      </b-col>
      <b-col>
        <SocialNetworks />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <hr>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <Navbar />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Logo from "@/components/Logo";
import SocialNetworks from "@/components/SocialNetworks";
import Navbar from "@/components/Navbar";
export default {
  name: "Header",
  components: {
    Logo,
    SocialNetworks,
    Navbar
  }
};
</script>

<style>
</style>