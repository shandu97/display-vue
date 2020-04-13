<template>
  <div class="single-post">
    <div class="headingb">
      <div class="container">
        <h3 class="mant">{{title}}</h3>
      </div>
    </div>
    <div class="container content">
      <img class="img" :src="image" alt>
      <p class="txt " v-html="text"></p>
  </div>
</div>
</template>

<script>
  import db from "@/firebase/init";
  export default {
    name: "SingleBlog",
    data() {
      return {
        image: "",
        title: "",
        text: "",
        msg: "read".toUpperCase()
      };
    },
    created() {
      db.collection("blogs")
      .doc(this.$route.params.id)
      .get()
      .then(doc => {
        if (doc.exists) {
          this.title = doc.data().title;
          this.image = doc.data().image;
          this.text = doc.data().text;
        }
      });
    }
  };
</script>

<style scoped>
.img {
  float: left;
  margin-right: 40px;
  max-width: 550px;
  max-height: 550px;
}
.content {
  clear:left;
    margin-top: 80px;
}
.headingb {
  background-color: #2ecc71;
  height: 100px;
}
.mant {
  padding-top: 30px;
  color: white;
  text-transform: uppercase;
}
</style>
