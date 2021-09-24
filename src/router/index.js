import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../views/Login";
import MyPage from "../views/myPage";
import UseMain from "../views/useMain";
import ChargeMain from "../views/chargeMain";
import BenefitMain from "../views/benefitMain";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/useMain',
    name: 'useMain',
    component: UseMain
  },
  {
    path: '/chargeMain',
    name: 'chargeMain',
    component: ChargeMain
  },
  {
    path: '/benefitMain',
    name: 'benefitMain',
    component: BenefitMain
  },
  {
    path: '/myPage',
    name: 'myPage',
    component: MyPage
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;