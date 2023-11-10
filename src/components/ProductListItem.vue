<template>
    <div class="product-container">
        <img class="product-image" :src="product.imageUrlProduct" />
        <div class="details-wrap">
            <h3>{{ product.nameProduct }}</h3>
            <p>${{ product.priceProduct }}</p>
        </div>
        <button class="remove-button" @click="removeItemFromCart">Remove From Cart</button>
    </div>
</template>

<script>
import axiosClient from '../api/axiosClient'
export default {
    name:'ProductListItem',
    props:['product'],
    methods: {
    async removeItemFromCart() {
        try {
            const userDataString = localStorage.getItem('userData');
            const userData = JSON.parse(userDataString);
            const idUser = userData.id;
            const idProduct = this.product.id
            console.log(idProduct)
            const res = await axiosClient.delete(`api/users/${idUser}/cart/${idProduct}`);
            console.log(res.data);
            confirm("Delete item successfully");


        } catch (error) {
            console.log(error);
        }
    }
}
}
</script>

<style scoped>


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