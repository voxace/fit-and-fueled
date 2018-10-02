import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/nutrition",
      name: "nutrition",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Nutrition.vue")
    },
    {
      path: "/personal-training",
      name: "personal-training",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/PersonalTraining.vue")
    },
    {
      path: "/prices",
      name: "prices",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Prices.vue")
    },
    {
      path: "/contact",
      name: "contact",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Contact.vue")
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
