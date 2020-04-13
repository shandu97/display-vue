<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style>
p {
  color: #aeadad !important;
}
html {
  position: relative;
  min-height: 100%;
}
body {
  margin-bottom: 140px;
}
#nprogress .bar {
  background: #2ecc71 !important;
}
@font-face {
  font-family: "Helvetica";
  src: url("assets/fonts/Helvetica.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "Novecentosanswide-DemiBold";
  src: url("assets/fonts/Novecentosanswide-DemiBold-webfont.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-moz-keyframes fadein {
  /* Firefox */
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-webkit-keyframes fadein {
  /* Safari and Chrome */
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-o-keyframes fadein {
  /* Opera */
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
