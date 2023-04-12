import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', redirect: '/home' },
      { path: '/home', component: () => import('pages/Home/Home.vue') },
      {
        path: '/affairs',
        component: () => import('src/pages/Affairs/Affairs.vue'),
      },
      { path: '/shop', component: () => import('src/pages/Shop/Shop.vue') },
      {
        path: '/profile',
        component: () => import('pages/Profile/Profile.vue'),
      },
      {
        path: '/home/test',
        component: () => import('pages/Home/Test.vue'),
      },
      {
        path: '/notice/:tab',
        component: () => import('pages/Affairs/Notice.vue'),
      },
      {
        path: '/shop/product/:type/:id',
        component: () => import('pages/Shop/Product.vue'),
      },
      { path: '/mail', component: () => import('pages/Affairs/Mail.vue') },
      { path: '/chat', component: () => import('pages/Profile/Chat.vue') },
      { path: '/item', component: () => import('../components/List.vue') },
      {
        path: '/detail/:type/:id',
        component: () => import('pages/Affairs/Detail.vue'),
      },
    ],
  },
  {
    path: '/user/',
    component: () => import('layouts/LogLayout.vue'),
    children: [
      {
        path: '/user/login',
        component: () => import('pages/Profile/Login.vue'),
      },
      {
        path: '/user/signup',
        component: () => import('pages/Profile/Signup.vue'),
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
