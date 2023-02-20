import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MoneyDashboard.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/scores',
    component: () => import('layouts/MoneyDashboard.vue'),
    children: [{ path: '', component: () => import('pages/ScoresPage.vue') }],
  },
  {
    path: '/operations',
    component: () => import('layouts/MoneyDashboard.vue'),
    children: [{ path: '', component: () => import('pages/OperationsPage.vue') }],
  },
  {
    path: '/stats',
    component: () => import('layouts/MoneyDashboard.vue'),
    children: [{ path: '', component: () => import('pages/StatsPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
