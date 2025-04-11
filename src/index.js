import { createRouter, createWebHistory } from 'vue-router';

// Lazy-loaded route components
const Home = () => import('./components/Home.vue');
const Products = () => import('./components/Products.vue');
const SingleProduct = () => import('./components/SingleProduct.vue');
const About = () => import('./components/About.vue');
const NewProduct = () => import('./components/newProduct.vue');
const ErrorPage = () => import('./components/ErrorPage.vue');

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
  },
  {
    path: '/products/:id',
    name: 'SingleProduct',
    component: SingleProduct,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/addProduct',
    name: 'NewProduct',
    component: NewProduct,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'ErrorPage',
    component: ErrorPage,
    meta: {
      hideNavBar: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
