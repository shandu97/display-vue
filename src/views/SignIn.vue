<template>
  <div class="singupRoot">
    <PageTitle :msg="msg"/>

    <!-- Form  validation -->
    <div class="formBox">
    <div class="singUp container text-center">
      <input type="text" v-model="$v.email.$model" placeholder=" Email"  @blur="$v.email.$touch()"/>
      <p class="error" v-if="!$v.email.required && $v.email.$dirty">This field is required</p>
      <br>
      <input type="password" v-model="$v.password.$model" placeholder=" Password"  @blur="$v.password.$touch()">
      <p class="error" v-if="!$v.password.required   && $v.password.$dirty">This field is required</p>
      <p v-if="feedback">{{feedback}}</p>
      <br>
      <button @click="singIn">Sign In</button>
      <p style="color: gray!important;">
        You already have an account? Go to
        <router-link to="/signup">Sign Up </router-link>page.
      </p>
    </div>
  </div>
  </div>
</template>

<script>
import PageTitle from "@/components/PageTitle";
import firebase from "firebase";
import { required } from 'vuelidate/lib/validators'
export default {
  name: "SignIn",
  components: {
    PageTitle
  },
  data() {
    return {
      email: "",
      password: "",
      feedback: "",
      msg: "sign in",
      btn: "sign in".toUpperCase()
    };
  },
  validations: {
    email: {
      required
    },
    password: {
      required
    }
  },
  methods: {
    singIn: function() {
      firebase
        .auth()
        .signInAndRetrieveDataWithEmailAndPassword(this.email, this.password)
        .then(user => {
          this.$router.replace("blog");
        })
        .catch(error => {
          this.feedback = error.message;
        });
    }
  }
};
</script>

<style scoped>
h3 {
  color: #2ecc71;
}
.singUp {
  margin-top: 100px;
  width: 30%;
  padding-top: 60px;
  padding-bottom: 40px;
  color: #2ecc71;
  border: 3px outset #2ecc71;
  border-radius: 5px;
  width: 25%;
}
.formBox {
  margin-bottom: 100px;
}
p {
  color: red !important;
}
a:hover {
  color: #2ecc71;
}
a {
  color: #2ecc71;
  text-decoration: none !important;
}
button {
  margin-top: 20px;
  margin-bottom: 40px;
  background-color: #2ecc71;
  color: white;
  padding: 5px 15px;
}
input {
  width: 350px;
  height: 45px;
  margin-bottom: 20px;
  border-color: white;
}
input[type="text"] {
  appearance: none;
  padding: 5px 15px;
  outline: none;
}
input[type="password"] {
  appearance: none;
  padding: 5px 15px;
  outline: none;
}
input:focus {
  outline: none;
}
</style>