import Vue from "vue";
import Vuex from "vuex";

// Modules for Home page
import logo from "@/store/modules/logo";
import slider from "@/store/modules/slider";
import calloutSection from "@/store/modules/calloutSection"
import popUp from "@/store/modules/popUp";
import projectDescription from "@/store/modules/projectDescription"
import carusel from "@/store/modules/carusel"

// Modules for About page
import aboutUs from "@/store/modules/aboutUs";
import statement from "@/store/modules/statement";
import tabs from "@/store/modules/tabs";
import services from "@/store/modules/services";
import servicesList from "@/store/modules/servicesList";

// Modules for Work page
import work from "@/store/modules/work";

// Modules for Contact page
import googleMap from "@/store/modules/googleMap";
import contactInfo from "@/store/modules/contactInfo";

// Modules for Blog page
import blogs from "@/store/modules/blogs"

// In Common Modules
import navbar from "@/store/modules/navbar";
import footer from "./modules/footer";

//Auth Menagment
import auth from "@/store/modules/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    logo,
    navbar,
    slider,
    calloutSection,
    popUp,
    projectDescription,
    carusel,
    aboutUs,
    statement,
    tabs,
    services,
    servicesList,
    work,
    googleMap,
    footer,
    contactInfo,
    blogs,
    auth
  },
  state: {
    text: "are you ready to be blown away",
    msg: "copyright 2013 display. all rights reserved.",
    btn: "click here to find out",
    navLinks: [
      {
        name: "Home",
        path: "/"
      },
      {
        name: "About",
        path: "/about"
      },
      {
        name: "Work",
        path: "/work"
      },
      {
        name: "Contact",
        path: "/contact"
      },
      {
        name: "Blog",
        path: "/blog"
      }
    ],
  },
  mutations: {},
  actions: {},
  getters: {

  }
});
