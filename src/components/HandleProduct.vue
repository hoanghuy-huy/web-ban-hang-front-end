<template>
    <HeaderAdmin/>
    <div class="container mt-3">
      <h2>Product List</h2>
      <table class="table table-hover">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>ID Product</th>
            <th>Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td><p :href="'products/' + product.id"> {{ product.name }}</p></td>
            <td>{{ product.id }}</td>

            <td>
              <a :href="'/admin/products/' + product.id + '/edit'" class="btn btn-primary">Edit</a>
              <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#delete-product-modal"
                  @click="deleteId(product.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <!-- Modal -->
      <div class="modal fade" id="delete-product-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Delete product?</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              Delete
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-danger" id="btn-delete-product" @click="handleDelete()">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import HeaderAdmin from './HeaderAdmin.vue';
  import productApi from '../api/productApi'
  import axiosClient from '@/api/axiosClient';
  export default {
    name: 'productList',
    components:{
        HeaderAdmin
    },
    data() {
      return {
        products: [],
        productIdToDelete: null ,
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
      },
      deleteId(id){
        this.productToDelete = id
      },
      async handleDelete(){
        try {
          await axiosClient.delete(`api/products/${this.productToDelete}`)
          confirm('Delete Successfully')  
          window.location.reload()       
        } catch (error) {
          console.log(error)
        }

      }
      
    },
    mounted() {
    this.retrieveProducts(); 

    }
  };
  </script>
  
  <style scoped>
  a {
    text-decoration: none;
    color: #333;
  }
  .modal-backdrop.show {
    backdrop-filter: blur(1px);
    background-color: rgba(0, 0, 0, 0.5); /* Đặt màu nền với độ trong suốt */
  }
  </style>