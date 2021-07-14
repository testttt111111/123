import Vue from 'vue';
import VueRouter from 'vue-router';
import Maintenance from '../views/Maintenance.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Maintenance,
  },
  { path: '*', name: 'Maintenance', component: Maintenance },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
