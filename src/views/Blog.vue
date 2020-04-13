<template>
  <div class="blog">
    <div>
      <PageTitle :msg="msg"/>
    </div>
    <div id="crud" class="container">
      <input
        class="form-control"
        type="text"
        v-model="search"
        placeholder=" search blogs"
        style="height: 60px;"
      >
      <div>
        <b-button variant="success">
          <router-link
            :to="{ name: 'Add' }"
            class="nav-link"
            style="color: white !important"
          >{{ text }}</router-link>
        </b-button>
      </div>
      <div class="blog-posts">
        <article class="blogStyle" v-for="(blog, index) in filteredBlogs" :key="index">
          <img :src="blog.image">
          <router-link v-bind:to="'/blog/' + blog.id">
            <h1>{{blog.title}}</h1>
          </router-link>
          <div
            class="blog-text"
            style="color: gray; margin-top: 20px;"
          >{{ blog.text | snippet | strip }}</div>
          <router-link
            :to="'/edit/' + blog.id"
            v-if="currentUser"
            class="btn btn-warning"
            style="color:white !important"
          >EDIT</router-link>
          <b-button
            @click="deletePost(blog.id)"
            v-if="currentUser"
            class="btn btn-danger"
            style="color: white"
          >DELETE</b-button>
        </article>
        <div class="text-center">
          <b-button
            variant="success load-more"
            class="load-more"
            @click="loadMore()"
            style="margin-top: -50px !important"
          >LOAD MORE</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "@/components/PageTitle";
import db from "@/firebase/init";
import firebase from "firebase";
export default {
  name: "Blog",
  components: {
    PageTitle
  },
  data() {
    return {
      msg: "blog",
      text: "new post".toUpperCase(),
      search: ""
    };
  },
  computed: {
    blogs() {
      return this.$store.getters.blogs;
    },
    filteredBlogs: function() {
      return this.blogs.filter(blog => {
         return blog.title.toLowerCase().includes(this.search.toLowerCase())
      });
    },
    currentUser() {
      return this.$store.getters.currentUser;
    }
  },
  methods: {
    deletePost(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          db.collection("blogs")
            .doc(id)
            .delete();
          Toast.fire({
            type: "success",
            title: "Deleted successfully"
          });
        }
      });
    },
    loadMore() {
      this.$store.dispatch("getBlogs", {
        loadMore: true
      });
    }
  },
  created() {
    this.$store.dispatch("getBlogs", {
      loadMore: false
    });
  },
  beforeDestroy() {
    this.$store.dispatch("emptyBlog", []);
  }
};
</script>

<style>
.load-more {
  margin-bottom: 50px;
}
.blog-posts img {
  max-width: 450px;
  max-height: 450px;
  float: left;
  margin-right: 40px;
}
.blog-posts .btn-danger,
.blog-posts .btn-warning {
  float: right;
}
.blog-posts .btn-warning {
  margin-left: 20px;
}
.blogStyle {
  clear: both;
  margin-bottom: 200px;
}
.btn-success {
  margin-top: 40px;
  margin-bottom: 40px;
}
.blog-content img {
  margin-bottom: 20px;
}
.blog-content h3 {
  margin-bottom: 20px;
}
.color a {
  color: white;
}
.blog-content h1 {
  color: gray;
}
article a {
  text-decoration: none !important;
}
.blogs {
  cursor: pointer;
}
.text-center {
  margin-bottom: 40px;
}
.form-control {
  margin-top: 40px;
}
.form-control:focus {
  border-color: #2ecc71;
  box-shadow: inset 0 1px 1px #2ecc71, 0 0 8px #2ecc71;
}
</style>
