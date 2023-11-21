<template>
<NavBar/>
<div id="page-wrap" v-if="product">
  <div id="img-wrap">
    <img :src="dynamicImageUrl" />
  </div>
  <div id="product-details">
    <h1>{{ product.name }}</h1>
    <h3 id="price">${{ product.price }}</h3>
    <p>Average rating: {{ product.averageRating }}</p>
    <button id="add-to-cart" @click="addToCart">Add to Cart</button>
    <h4>Description</h4>
    <p>{{ product.description }}</p>
  </div>
</div>

<NotFoundPage v-else/>
<FooterPage/>
</template>

<script>
import NotFoundPage from './NotFoundPage.vue';
import productApi from '@/api/productApi';
import axiosClient from '../api/axiosClient';
import NavBar from '@/components/NavBar.vue';
import FooterPage from '@/components/FooterPage.vue';
export default {
  name: 'ProductDetailPage',
  components:{
    NotFoundPage,
    NavBar,
    FooterPage
  },
  data() {
    return {
      product:null,
    };
  },
  methods: {
    retrieveProduct() {
      const productId = this.$route.params.id;
      productApi.getOne(productId)
        .then((response) => {
          this.product = response.data;

        })
        .catch((error) => {
          console.log(error);
        });
      },
      async addToCart() {
        try {
          const userDataString = localStorage.getItem('userData');
          const userData = JSON.parse(userDataString);

          const productId = this.product.id;
          console.log(productId)

          const res = await axiosClient.post(`api/users/${userData.id}/cart/${productId}`);
          console.log(res)
          confirm('Added item to cart')
          window.location.reload();
        } catch (error) {
          console.log(error);
        }
      }
   
  },
  computed: {
    dynamicImageUrl() {
      return require(`@/assets/${this.product.imageUrl}.jpg`);
    }
  },
  mounted() {
    this.retrieveProduct();
  }
};
</script>

<style scoped>
#page-wrap {
  margin-top: 16px;
  padding: 16px;
  max-width: 600px;
}

#img-wrap {
  text-align: center;
}

img {
  width: 400px;
}

#product-details {
  padding: 16px;
  position: relative;
}

#add-to-cart {
  width: 100%;
}

#price {
  position: absolute;
  top: 24px;
  right: 16px;
}
</style>
