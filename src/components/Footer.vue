<template>
  <section class="footer">
    <section class="foot-background">
      <b-container>
        <b-row>
          <b-col>
            <h4>{{ text }}</h4>
          </b-col>
          <b-col>
            <router-link to="/work"><Button :btn="btn"/></router-link>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="footer-inside">
      <b-container>
        <b-row>
          <b-col>
            <p>{{ msg }}</p>
          </b-col>
          <b-col>
            <b-navbar>
              <b-navbar-nav v-for="navLink in navLinks" :key="navLink.index">
                <b-nav-item :to="navLink.path">{{ navLink.name }}</b-nav-item>
              </b-navbar-nav>
            </b-navbar>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </section>
</template>

<script>
  export default {
    name: "Footer",
    computed: {
      navLinks() {
        return this.$store.state.navLinks;
      },
      text() {
        return this.$store.state.text;
      },
      msg() {
        return this.$store.state.msg;
      },
      btn() {
        return this.$store.state.btn;
      }
    }
  };
</script>

<style scoped>
.footer {
  position: absolute;
  bottom: -200px;
  width: 100%;
}
.foot-background {
  background-color: #332f30;
  color: white;
  height: 140px;
}
h4 {
  color: white !important;
  text-transform: uppercase;
  padding-top: 55px;
}
p {
  text-transform: uppercase;
  color: gray;
}
.btn-success {
  float: right;
  margin-top: 55px;
  text-transform: uppercase;
}
.footer-inside {
  background-color: #efefef;
}
.footer-inside p {
  margin-top: 20px;
  font-size: 14px;
}
.navbar {
  padding: 0rem !important;
}
.navbar-expand {
  float: right;
  margin-top: 12px;
}
.navbar-nav a {
  font-size: 14px;
  font-weight: normal;
}
.navbar-expand .navbar-nav .nav-link {
  margin-right: 0px;
  margin-left: 20px;
  padding-right: 0px;
  color: lightgray;
}
</style>
