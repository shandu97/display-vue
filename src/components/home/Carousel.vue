<template>
  <div>
    <slick class="img" ref="slick" :options="slickOptions" v-html="carusel"></slick>
    <div class="text-center">
      <button @click="prev" class="prev-button">
        <img src="/images/left.svg" alt>
      </button>
      <button @click="next" class="next-button">
        <img src="/images/right.svg" alt>
      </button>
    </div>
    <slick class="para" ref="slick" :options="slickOptions2" v-html="parafs"></slick>
  </div>
</template>

<script>
import Slick from "vue-slick";
export default {
  components: { Slick },
  data() {
    return {
      slickOptions: {
        //options can be used from the plugin documentation
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        dots: false,
        focusOnSelect: true,
        variableWidth: true,
        arrows: false,
        swipe: true,
        asNavFor: ".para"
      },
      slickOptions2: {
        //options can be used from the plugin documentation
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        arrows: false,
        fade: true,
        asNavFor: ".img"
      }
    };
  },
  // All slick methods can be used too, example here
  methods: {
    next() {
      this.$refs.slick.next();
    },
    prev() {
      this.$refs.slick.prev();
    },
    reInit() {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$refs.slick.reSlick();
    }
  },
  computed: {
    carusel() {
      return this.$store.getters.carusel;
    },
    parafs() {
      return this.$store.getters.parafs;
    }
  }
};
</script>

<style>
.para {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
  color: #aeadad;
}
.prev-button,
.next-button {
  margin-top: 20px;
  border: none;
  background-color: white;
  margin-left: 200px;
  margin-right: 200px;
}
.slick-slide {
  margin-right: 20px;
  opacity: 0.4;
  transition: all ease-in-out .3s;
}
.slick-current {
  opacity: 1;
}
button:focus {
  outline: none !important ;
}

</style>
