<template>
    <HeaderAdmin/>
    <div class="container mt-3">
      <h2>user List</h2>
      <table class="table table-hover">
        <thead>
          <tr>
            <th>User Name</th>
            <th>Email</th>
            <th>Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>

            <td>
              <a :href="'/admin/users/' + user.id + '/edit'" class="btn btn-primary">Edit</a>
              <button type="button" class="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <!-- Modal -->
      <div class="modal fade" id="delete-user-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Delete user?</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              Delete
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-danger" >Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import HeaderAdmin from './HeaderAdmin.vue';
  import userApi from '../api/productApi'
  export default {
    name: 'HandleCars',
    components:{
        HeaderAdmin
    },
    data() {
      return {
        users: [], 
        userIdToDelete: null 
      };
    },
    methods: {
      retrieveusers() {
        userApi.getAllCarts()
          .then((res) => {
            this.users = res.data
            
          })
          .catch((error) => {
            console.log(error)
          })
      }
    },
    mounted() {
    this.retrieveusers(); 

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