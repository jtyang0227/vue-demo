import Vue from "vue";
import VueRouter from "vue-router";

const MemberLogin = () => import("../views/member/login/memberLogin");
const MemberJoin = () => import("../views/member/join/memberJoin");
const MyPageMain = () => import("../views/myPage/myPageMain");
const UseMain = () => import("../views/use/useMain");
const ChargeMain = () => import("../views/charge/chargeMain");
const BenefitMain = () => import("../views/benefit/benefitMain");
const NotFound = () => import("../views/error");

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    // redirect: memberLogin
  },
  {
    path: '/memberLogin',
    name: 'memberLogin',
    component: MemberLogin
  },
  {
    path: '/memberJoin',
    name: 'memberJoin',
    component: MemberJoin
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
    path: '/myPageMain',
    name: 'myPageMain',
    component: MyPageMain
  },
  {
    path: "/404",
    name: "notFound",
    component: NotFound
  },
  {
    // Vue 2.x
    path: '*',
    redirect: "/404"
    // 아래처럼 바로 NotFound 경로를 매칭해도 됨
    // component: NotFound
  },
  {
    // Vue 3.x
    path: '/:pathMatch(.*)*',
    redirect: "/404"
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;