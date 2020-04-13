<template>
  <div class="panel">
    <div class="container panel-center">
      <div @click="currentTab = 0" :class="{ activeTab: currentTab === 0 }">
        <img src="/images/icon1.png" alt class="photos">
        <h4 id="websites">WEBSITES</h4>
      </div>

      <div @click="currentTab = 1" :class="{ activeTab: currentTab === 1 }">
        <img src="/images/icon.png" alt class="photos">
        <h4 id="photography">PHOTOGRAPHY</h4>
      </div>

      <div @click="currentTab = 2" :class="{ activeTab: currentTab === 2 }">
        <img src="/images/icon2.png" alt class="photos">
        <h4 id="seo">SEO</h4>
      </div>

      <div @click="currentTab = 3" :class="{ activeTab: currentTab === 3 }">
        <img src="/images/icon4.png" alt class="photos">
        <h4 id="applications">APPLICATIONS</h4>
      </div>
    </div>
    <b-container>
      <div class="about-services">
        <p>{{ tabs[currentTab].description }}</p>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  data() {
    return {
      currentTab: 1,
    };
  },
  computed: {
    tabs() {
      return this.$store.getters.tabs;
    }
  }
};
</script>

<style>
.panel {
  height: 200px;
  margin-bottom: 90px;
  background-color: #efefef;
}
.panel-center {
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  cursor: pointer;
}
.panel h4 {
  color: #423e3e;
  margin-top: 20px;
}

.photos {
  margin-top: 47px;
}
#websites {
  margin-top: 30px;
  font-size: 21px;
}
#photography {
  margin-top: 45px;
  font-size: 21px;
}
#seo {
  margin-top: 40px;
  font-size: 21px;
}
#applications {
  margin-top: 45px;
  font-size: 21px;
}
.about-services {
  height: 120px;
  margin-top: 25px;
}
.activeTab {
  height: 200px;
  background-color: #dadada;
  color: #423e3d;
}
</style>