import { createRouter, createWebHistory } from 'vue-router'
import CartPage from '../views/CartPage.vue'
import ProductDetailPage from '../views/ProductDetailPage.vue'
import ProductsPage from '../views/ProductsPage.vue'
import NotFoundPage from '../views/NotFoundPage.vue'
import LoginPage from '../components/Login.vue'
import RegisterPage from '../components/Register.vue'
import AdminPage from '../views/AdminPage'
import HandleProduct from '../components/HandleProduct'
import HandleUsers from '../components/HandleUsers'
import EditProduct from '../components/EditProduct'
import EditUser from '../components/EditUser'
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
    path:'/admin',
    name:'AdminPage',
    component: AdminPage,
  },
  {
    path:'/admin/products',
    name:'HandleProduct',
    component: HandleProduct,
  },
  {
    path:'/admin/users',
    name:'HandleUsers',
    component: HandleUsers,
  },
  {
    path:'/admin/products/:id/edit',
    name:'EditProduct',
    component:EditProduct,
  },
  {
    path:'/admin/users/:id/edit',
    name:'EditUser',
    component:EditUser,
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
