<template>
  <div id="page-wrap">
    <h1>Shopping Cart</h1>
    <ProductsList 
      :products="cartItems"
    />
    <!-- <h3 id="total-price">Total: ${{ totalPrice }}</h3> -->
    <button id="checkout-button">Proceed to Checkout</button>
  </div>
</template>
  
<script>

import ProductsList from '@/components/ProductsList.vue';
import axiosClient from '../api/axiosClient';
export default {
    name: 'CartPage',
    components:{
      ProductsList
    },
    data() {
      return {
          cartItems:[],
      }
    },
    created() {
      const userDataString = localStorage.getItem('userData');
      const userData = JSON.parse(userDataString);

      this.getAllCart(userData.id)
    },
    methods: {
      async getAllCart(idUser) {
        try {
          const res = await axiosClient.get(`api/users/${idUser}/cart`);
          this.cartItems = res.data
          console.log(this.cartItems)
          // Xử lý dữ liệu giỏ hàng ở đây
        } catch (error) {
          console.log(error);
        }
      }
    },
    computed: {
    // totalPrice() {
    //   return this.cartItems.reduce(
    //     (sum, item) => sum + Number(item.price),
    //     0,
    //   );
    // }
  }

};
</script>
  
<style scoped>
h1 {
  border-bottom: 1px solid black;
  margin: 0;
  margin-top: 16px;
  padding: 16px;
}

#total-price {
  padding: 16px;
  text-align: right;
}

#checkout-button {
  width: 100%;
}

.product-container {
  align-content: 'center';
  border-bottom: 1px solid #ddd;
  display: flex;
  padding: 16px;
  width: 100%;
}

.product-image {
  flex: 1;
  height: 100px;
  max-width: 100px;
}

.details-wrap {
  padding: 0 16px;
  flex: 3;
}

.remove-button {
  flex: 1;
  margin: auto;
}
</style>
  