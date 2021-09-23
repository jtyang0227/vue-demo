import Vue from "vue";
import VueRouter from "vue-router";
import UseMain from "../views/useMain";
import ChargeMain from "../views/chargeMain";
import BenefitMain from "../views/benefitMain";
import MyPage from "../views/myPage";
import Login from "../views/Login";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
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
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;