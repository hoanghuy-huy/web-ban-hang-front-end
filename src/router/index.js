import { createRouter, createWebHistory } from 'vue-router'
import CartPage from '../views/CartPage.vue'
import ProductDetailPage from '../views/ProductDetailPage.vue'
import ProductsPage from '../views/ProductsPage.vue'
import NotFoundPage from '../views/NotFoundPage.vue'
import LoginPage from '../components/Login.vue'
import RegisterPage from '../components/Register.vue'
import HomePage from '../views/HomePage.vue'
const routes = [
  {
    path:'/products/',
    name:'Products',
    component: ProductsPage,
  },
  {
    path:'/products/:id',
    name:'ProductDetail',
    component: ProductDetailPage,
  },
  {
    path:'/cart',
    name:'Cart',
    component: CartPage,
  },
  {
    path: "/:pathMatch(.*)",
    component: NotFoundPage,
  },
  {
    path:"/",
    component:LoginPage,
  },
  {
    path:'/register',
    name:'Register',
    component: RegisterPage,
  },
  {
    path:'/home',
    name:'HomePage',
    component: HomePage,
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
