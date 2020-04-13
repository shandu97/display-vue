<template>
  <div class="create">
    <PageTitle :msg="msg"/>
    <div class="container">
      <div class="card">
        <div class="card-body">
          <form @submit.prevent="addBlogs">
            <div class="form-group">
              <label>Post Title:</label>
              <input
                type="text"
                name="title"
                class="form-control"
                autocomplete="off"
                v-model="title"
                style="margin-top:30px"
              >
              <p class="error" v-if="!$v.title.required && $v.title.$dirty">Title is required</p>
            </div>
            <VueCkeditor class="ckeditor" v-model="text"/>
            <p class="error" v-if="!$v.text.required && $v.text.$dirty">Text is required</p>

            <div class="form-group">
              <label>Image url:</label>
              <input type="url" class="form-control" v-model="image" style="margin-top: 30px; margin-bottom: 30px;">
            </div>
            <p class="error" v-if="feedback">{{feedback}}</p>
            <div class="form-group">
              <button type="submit" class="btn btn-success" style="margin-top: 20px; margin-bottom: 10px;">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import PageTitle from "@/components/PageTitle";
import VueCkeditor from "@/components/VueCkeditor";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "AddPost",
  components: {
    PageTitle,
    VueCkeditor
  },
  data() {
    return {
      msg: "create".toUpperCase(),
      title: "",
      image: "",
      text: "",
      submitted: false,
      feedback: ""
    };
  },
  validations: {
    title: {
      required,
      minLength: minLength(5)
    },
    text: {
      required
    }
  },
  methods: {
    addBlogs() {
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
        db.collection("blogs").add({
          title: this.title,
          image: this.image,
          text: this.text
        });
        this.submited = "";
      }
    }
  }
};
</script>

<style>
.create {
  margin-bottom: 75px;
}
.card {
  margin-top: 70px;
  width: 80%;
  height: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.ckeditor {
  margin-bottom: 20px;
}
.error {
  color: red !important;
  margin-top: 15px;
}

.form-control:focus {
  border-color: #2ecc71 !important;
  box-shadow: inset 0 1px 1px #2ecc71, 0 0 8px #2ecc71 !important;
}
label {
  margin-bottom: -90px !important;
}
</style>