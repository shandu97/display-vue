import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";

import Button from "@/components/Button";
Vue.component("Button", Button);

import Vuelidate from "vuelidate";

import jQuery from 'jquery';
global.jQuery = jQuery;

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import CxltToastr from 'cxlt-vue2-toastr';
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css';

import Swal from 'sweetalert2';

window.Swal = Swal;

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

window.Toast = Toast;
const toastrConfigs = {
  position: 'bottom left',
  showDuration: 3000,
  timeOut: 3500
}

import firebase from "firebase";

Vue.use(CxltToastr, toastrConfigs);

Vue.use(Vuelidate);

Vue.use(BootstrapVue);

Vue.use(CxltToastr);

Vue.config.productionTip = false;

let app = "";

//Filters

// za max 300 karaktera
Vue.filter('snippet', function (value) {
  return value.slice(0, 280);
});

// za izbjegavanje difoltnih html tagova
Vue.filter('strip', function (html) {
  var tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText;
});

firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    store.dispatch('getCurrentUser', user);
  }
  if (!app) {
    app = new Vue({
      router,
      store,
      validations: {},
      render: h => h(App)
    }).$mount("#app");
  }
})
