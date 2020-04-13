<template>
  <b-container>
    <div>
      <div class="filter">
        <ul class="pl-0">
          <li>
            <a
              @click.prevent="selectedCategory ='all'"
              :class="{ activeClasss: selectedCategory == 'all' }"
            >All</a>
          </li>
          <li>
            <a
              @click.prevent="selectedCategory ='print'"
              :class="{ activeClasss: selectedCategory == 'print' }"
            >PRINT</a>
          </li>
          <li>
            <a
              @click.prevent="selectedCategory = 'photography'"
              :class="{ activeClasss: selectedCategory == 'photography' }"
            >PHOTOGRAPHY</a>
          </li>
          <li>
            <a
              @click.prevent="selectedCategory = 'web'"
              :class="{ activeClasss: selectedCategory == 'web' }"
            >WEB</a>
          </li>
          <li>
            <a
              @click.prevent="selectedCategory = 'applications'"
              :class="{ activeClasss: selectedCategory == 'applications' }"
            >APPLICATIONS</a>
          </li>
        </ul>
        <div class="button-img">
          <img class="first" src="images/grid.png" @click="activeClass = 'grid'">
          <img src="images/list.png" @click="activeClass = 'list'">
        </div>
      </div>
      <div :class="activeClass">
        <img
          v-for="(project, index) in filteredCategory"
          :src="project.url"
          :key="index"
          class="img-work"
        >
        <p id="no-result" v-if="filteredCategory.length == 0">No result.</p>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "Category",
  data() {
    return {
      activeClass: "grid",
      selectedCategory: "all"
    };
  },
  computed: {
    filteredCategory() {
      if (this.selectedCategory === "all") {
        return this.projects;
      } else {
        return this.projects.filter(
          person => person.category == this.selectedCategory
        );
      }
    },
    projects() {
      return this.$store.getters.projects;
    }
  }
};
</script>

<style>
.filter {
  list-style-type: none;
  margin-top: 35px;
  margin-bottom: 30px;
  text-decoration: none;
  color: #a5a4a4;
  font-weight: 500;
  font-size: 18px;
  overflow: hidden;
}

ul {
  display: inline;
}

ul li {
  list-style-type: none;
  margin-right: 7px;
  display: inline;
}

.activeClasss {
  color: #2ecc71 !important;
}

.filter a:hover {
  color: #2ecc71 !important;
}

.filter a {
  cursor: pointer;
}

.button-img {
  cursor: pointer;
  float: right;
}

.button-img .first {
  margin-right: 10px;
}

.grid {
  display: grid;
  gap: 44px;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 10px auto 80px auto;
}

.grid img {
  width: 100%;
  cursor: pointer;
}

.grid img:hover {
  opacity: 0.6;
}

.list {
  display: block;
  width: 300px;
  margin-bottom: 80px;
}

.list img {
  padding: 10px 0;
}

.list img:hover {
  opacity: 0.6;
}

#no-result {
  font-size: 20px;
  color: rgb(168, 165, 165);
}

.filter li::before {
  content: "/";
  margin-right: 8px;
}

.filter li:first-child:before {
  content: "";
}
</style>
