<template>
  <div class="admin">
    <div>
      <PageTitle :msg="msg"/>
    </div>
    <div class="container">
      <div class="admin-info">
        <p>Profile Image:</p>
        <img :src="singleUser.image" alt id="profile-image">
        <p>
          First Name:
          <span class="admin-color">{{singleUser.firstName}}</span>
        </p>
        <p>
          Last Name:
          <span class="admin-color">{{singleUser.firstName}}</span>
        </p>
        <p>
          Your email adress :
          <span class="admin-color">{{singleUser.email}}</span>
        </p>
      </div>
      <div class="admin-menu">
        <router-link to="/settings">
          <span>Profile Settings</span>
        </router-link>
      </div>
      <div class="user-posts">
        <h3>Your posts</h3>
        
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "@/components/PageTitle";
import firebase from "firebase";
import db from "@/firebase/init";
export default {
  name: "Admin",
  components: {
    PageTitle
  },
  data() {
    return {
      msg: "Profile Page",
      username: null,
      email: null,
      firstName: null
    };
  },
  computed: {
    posts() {
      return this.$store.getters.userPosts;
    },
    singleUser() {
      return this.$store.getters.singleUser;
    }
  }
};
</script>

<style>
.admin {
  font-size: 20px;
}
.admin-menu {
  margin-top: 40px;
}
.admin-info {
  margin-top: 50px;
}
.admin-color {
  color: #2ecc71;
}
a {
  text-decoration: none !important;
}
#profile-image {
  margin-bottom: 20px;
  width: 280px;
}
.user-posts {
  margin-top: 40px;
  color: gray;
}
</style>
