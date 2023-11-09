<template>
  <div v-if="products.length > 0">
    <div>
      <ProductListItem
          v-for ="product in products"
          :key="product.id"
          :product="product"
      />
    </div>
  </div>
  <p v-else> You haven't added anything to your cart yet</p>
</template>

<script>
import ProductListItem from './ProductListItem.vue';
export default {
  name:'ProductsList',
  props:['products'],
  components:{
    ProductListItem
  }
}
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
</style>