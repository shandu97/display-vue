import Vue from "vue";
import Router from "vue-router";
import NProgress from 'nprogress';

import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Work from "./views/Work.vue";
import Contact from "./views/Contact.vue"

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/nprogress/nprogress.css'

import Blog from "./views/Blog.vue"

import SignIn from "./views/SignIn.vue"
import SingUp from "./views/SignUp.vue"
import Profile from "./views/Profile.vue"
import ProfileSettings from "./views/ProfileSettings.vue"
import Admin from "./views/Admin.vue"

import NotFound from "./views/NotFound.vue"

import AddPost from './views/AddPost.vue'
import EditPost from './views/EditPost.vue'
import SingleBlog from './views/SingleBlog.vue'

import firebase from 'firebase';

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/work",
      name: "Work",
      component: Work
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact
    },
    {
      path: "/blog",
      name: "Blog",
      component: Blog
    },
    {
      name: 'Add',
      path: '/add',
      component: AddPost,
      meta: {
        requiresAuth: true
      }
    },
    {
      name: 'Edit',
      path: '/edit/:id',
      component: EditPost,
      meta: {
        requiresAuth: true
      }
    },
    {
      name: 'SingleBlog',
      path: '/blog/:id',
      component: SingleBlog
    },
    {
      path: "/signin",
      name: "SignIn",
      component: SignIn
    },
    {
      path: "/signup",
      name: "SingUp",
      component: SingUp
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
      meta: {
        requiresAuth: true
      },
    },
    {
      path: "/admin",
      name: "Admin",
      component: Admin,
      meta: {
        requiresAuth: true
      },
    },
    {
      path: "/settings",
      name: "ProfileSettings",
      component: ProfileSettings
    },
    {
      path: "*",
      name: "NotFound",
      component: NotFound
    },
  ]
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('signin');
  else next();
});

export default router;