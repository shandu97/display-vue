<template>
  <div class="main">
    <div class="nav">
      <router-link
        v-for="navLink in navLinks"
        :key="navLink.index"
        :to="navLink.path"
      >{{ navLink.name }}</router-link>
    </div>
    <div class="blogMenu">
      <router-link v-if="!currentUser" to="/signin">Sign In</router-link>
      <router-link v-if="!currentUser" to="/signup">Sign Up</router-link>
      <router-link id="admin-css" v-if="currentUser" to="/admin">Admin-Area</router-link>
      <router-link :to="{ path: '/profile'}" v-if="currentUser" >{{currentUser.firstName}}</router-link>
      <a v-if="currentUser" @click="signout">Sign Out</a>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Navbar",
  data() {
    return {
    };
  },
  computed: {
    navLinks() {
      return this.$store.getters.navLinks;
    },
    currentUser() {
      return this.$store.getters.currentUser;
    }
  },
  methods: {
    signout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ path: "/signin"});
          this.$store.commit('setCurrentUser', null)
        });
    }
  },
};
</script>

<style>
.main {
  margin-top: 10px;
  margin-bottom: 30px;
}
.nav a {
  color: red;
  margin-right: 25px;
  text-transform: uppercase;
  font-size: 18px;
  font-family: "Novecentosanswide-DemiBold";
  font-weight: bold;
  color: gray;
  text-decoration: none !important;
}
a:hover {
  color: #2ecc71 !important;
}
.nav {
  display: inline !important;
}
.nav-link {
  padding: 0rem 0rem;
}
.navbar {
  padding-left: 0 !important;
  margin-top: -10px;
  margin-bottom: 13px;
}
.navbar-expand .navbar-nav .nav-link {
  padding-left: 0 !important;
  margin-right: 21px;
}
.navbar-nav a {
  font-family: "Novecentosanswide-DemiBold";
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
}
.navbar-light .navbar-nav .nav-link:hover {
  color: #2ecc71 !important;
}
a.router-link-exact-active {
  color: #2ecc71 !important;
}
.blogMenu a {
  font-family: "Novecentosanswide-DemiBold";
  font-size: 18px;
  text-decoration: none !important;
  color: gray;
  margin-left: 20px;
}
.blogMenu a:active {
  color: #2ecc71 !important;
}
.blogMenu a:hover {
  color: #2ecc71 !important;
}
.blogMenu {
  float: right !important;
}
a {
  color: gray !important;
  cursor: pointer;
}
#admin-css {
  margin-right: 200px;
}
</style>
