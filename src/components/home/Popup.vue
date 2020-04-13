<template>
  <section class="pop-back">
    <b-container class="popup">
      <b-row>
        <b-col cols="5">
          <img class="video" :src="video" v-b-modal.modal-center>
          <!-- Modal Component -->
          <b-modal id="modal-center">
            <iframe
              width="460"
              height="360"
              src="https://www.youtube.com/embed/xJQktUAzrkw"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </b-modal>
        </b-col>
        <b-col class="example" v-html="popUp"></b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: "Popup",
  computed: {
    video() {
      return this.$store.getters.video;
    },
      popUp() {
      return this.$store.getters.popUp;
    }
  }
};
</script>

<style scoped>
.popup {
  margin-top: 50px;
  margin-bottom: 40px;
  height: 320px;
}
.pop-back {
  background-color: #efefef;
}
.video {
  cursor: pointer;
  margin-top: 40px;
}
p {
  color: gray;
}
h4 {
  text-transform: uppercase;
  color: gray !important;
}
.example {
  margin-top: 30px;
}
.modal-header {
  border-bottom: none !important;
  padding: 1rem 1.1rem !important;
}
.modal-header .close {
  margin: none !important;
}
.modal-content {
  background-color: transparent !important;
  border: none !important;
}
.modal-footer {
  display: none !important ;
}
.modal {
  text-align: center;
  padding: 0 !important;
}
.modal:before {
  content: "";
  display: inline-block;
  height: 100%;
  vertical-align: middle;
  margin-right: -4px;
}
.modal-dialog {
  display: inline-block;
  text-align: left;
  vertical-align: middle;
}
</style>