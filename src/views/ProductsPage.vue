<template>
  <NavBar/>
  <div id="page-wrap">
      
      <ProductGrid :products="products"/>
      
  </div>
  <FooterPage/>
</template>

<script>
import ProductGrid from '@/components/ProductGrid.vue';
import productApi from '../api/productApi'
import NavBar from '@/components/NavBar.vue';
import FooterPage from '@/components/FooterPage.vue';
export default {
    name: 'ProductsPage',
    components:{
      ProductGrid,
      NavBar,
      FooterPage
    },
    data() {
      return {
        products: [],
      };
    },
    methods: {
      retrieveProducts() {
        productApi.getAllProducts()
          .then((res) => {
            this.products = res.data
            
          })
          .catch((error) => {
            console.log(error)
          })
      }
    },
    mounted() {
    this.retrieveProducts(); 
    }
};
</script>

<style scoped>
.grid-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 16px;
}

.product-item {
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 2px 5px #888;
  display: flex;
  flex-direction: column;
  margin-bottom: 2%;
  padding: 20px;
  position: relative;
  width: 32%;
}

.product-name {
  margin-bottom: 0;
}

img {
  height: 200px;
  width: 200px;
}

a {
  width: 100%;
}

button {
  width: 100%;
}
</style>

