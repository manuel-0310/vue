import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from './components/landingpage.vue';
import TipCalculator from './components/TipCalculator.vue';

const routes = [
  { path: '/', component: LandingPage }, // Página de inicio
  { path: '/tip-calculator', component: TipCalculator } // Divisor de cuenta
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
