<template>
  <div class="edit">
    <PageTitle :msg="msg"/>
    <div class="container">
      <div class="card">
        <div class="card-header">
          <h3>Edit Post</h3>
        </div>
        <div class="card-body">
          <form v-on:submit.prevent="updatePost">
            <div class="form-group">
              <label>Post Title:</label>
              <input type="text" class="form-control" v-model="post.title">
            </div>
            <VueCkeditor class="ckeditor" v-model="post.text"/>
            <div class="form-group">
              <label>Image url:</label>
              <input type="text" class="form-control" v-model="post.image">
            </div>
            <div class="form-group">
              <input type="submit" class="btn btn-success" value="Submit">
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
import {
  required,
  email,
  minLength,
  maxLength
} from "vuelidate/lib/validators";

export default {
  name: "EditPost",
  components: {
    VueCkeditor,
    PageTitle
  },

  data() {
    return {
      msg: "edit".toUpperCase(),
      post: {}
    };
  },
  created() {
    db.collection("blogs")
      .doc(this.$route.params.id)
      .onSnapshot(doc => {
        this.post = {
          title: doc.data().title,
          text: doc.data().text,
          image: doc.data().image,
          id: doc.id
        };
      });
  },
  methods: {
     updatePost() {
     db.collection("blogs").doc(this.$route.params.id).set(this.post);
     this.$router.push('/blog')
     }
  }
};
</script>

<style>
.edit {
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
.form-control:focus {
  border-color: #2ecc71;
  box-shadow: inset 0 1px 1px #2ecc71, 0 0 8px #2ecc71;
}
</style>
