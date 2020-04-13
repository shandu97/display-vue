<template>
  <div class="profile">
    <div>
      <PageTitle :msg="msg"/>
    </div>
    <div class="container">
      <div class="card">
        <div class="card-body">
          <div class="card-header">
            <div class="profile-info">
              <p>Change your profile settings here ...</p>
            </div>
          </div>
          <form>
            <div class="form-group">
              <label class="label">First Name:</label>
              <input
                type="text"
                class="form-control"
                v-model="singleUser.firstName"
                name="firstName"
                autocomplete="off"
              >
              <p
                class="error"
                v-if="!$v.singleUser.firstName.required && $v.singleUser.firstName.$dirty"
              >First Name is required</p>
            </div>
            <div class="form-group">
              <label class="label">Last Name:</label>
              <input
                type="text"
                class="form-control"
                v-model="singleUser.lastName"
                name="lastName"
                autocomplete="off"
              >
              <p
                class="error"
                v-if="$v.singleUser.lastName.required && $v.singleUser.lastName.$dirty"
              >Last Name is required</p>
            </div>
            <div class="form-group">
              <label class="label">Your email adress:</label>
              <input type="text" class="form-control" v-model="singleUser.email" readonly>
            </div>
            <div class="form-group">
              <label class="label">Reset Password</label>
              <input type="password" class="form-control" v-model="passwordNew">
            </div>
            <div class="profile-bio">
              <p>Change profile image:</p>
              <input type="file" @change="uploadImage">
            </div>
            <div class="image-view" v-for="image in images" :key="image">
              <img :src="image" alt width="400px">
            </div>
            <div class="form-group">
              <button
                @click.prevent="updateUser"
                v-on:click="resetPassword"
                type="submit"
                class="btn btn-success"
              >Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "@/components/PageTitle";
import firebase from "firebase";
import db from "@/firebase/init";
import { required, minLength } from "vuelidate/lib/validators";
export default {
  name: "ProfileSettings",
  components: {
    PageTitle
  },
  data() {
    return {
      msg: "Settings",
      images: [],
      firstName: "",
      lastName: "",
      passwordNew: ""
    };
  },
  validations: {
    singleUser: {
      firstName: {
        required
      },
      lastName: {
        required
      }
    }
  },
  computed: {
    singleUser() {
      return this.$store.getters.singleUser;
    },
    currentUser() {
      return this.$store.getters.currentUser;
    }
  },
  methods: {
    uploadImage(e) {
      let file = e.target.files[0];
      var storageRef = firebase.storage().ref("images/" + file.name);
      let uploadTask = storageRef.put(file);
      uploadTask.on(
        "state_changed",
        snapshot => {},
        error => {},
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
            this.images.push(downloadURL);
            firebase
              .firestore()
              .collection("users")
              .doc("85o172rdevVU1Qm1Ym2T")
              .update({ image: downloadURL });
          });
        }
      );
    },
    updateUser() {
      this.submited = "PENDING";
      this.$v.$touch();

      if (this.$v.$invalid) {
        this.feedback = "All fields are required!";
        this.submited = "";
        this.$toast.error({
          title: "ERROR",
          message: "Please fill in all required fields!"
        });
      } else {
        this.$router.go(-1);
        this.submited = "PENDING";
        db.collection("users")
          .doc(this.singleUser.id)
          .update({
            firstName: this.singleUser.firstName,
            lastName: this.singleUser.lastName
          });
        this.submited = "";
      }
    },
    resetPassword: function() {
      var newPassword = this.passwordNew;
      var user = firebase.auth().currentUser;
      user
        .updatePassword(newPassword)
        .then(function() {})
        .catch(function(error) {});
    }
  }
};
</script>

<style>
.card {
  margin-bottom: 70px;
}
.label {
  color: gray;
  margin-top: 20px;
}
.profile-info {
  margin-top: 70px;
}
.profile-info h2 {
  color: gray;
}
.profile-info p {
  margin-top: 20px;
}
.profile-bio {
  margin-top: 40px;
}
.image-view {
  margin-top: 40px;
}
</style>
