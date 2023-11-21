<template>

<div class="header">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/admin">Admin</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <a class="nav-link" href="/admin/products">Products</a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="/admin/users">Users</a>
            </li>
            
            <li class="nav-item">
                <a class="nav-link" href="/admin/add-product">Add Product</a>
            </li>
        </ul>

 
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" id="btn-logout">
                <button class="logout-button" @click="logout">Logout</button>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>

</template>
  
  <script>
  export default {
    name: 'HeaderAdmin',
    methods: {
    logout() {

      localStorage.removeItem('userData');
      this.user = null; 
    },
  },
  };
  </script>
  
<style scoped>

.navbar {
  background-color: #343a40;
  padding: 10px;
}

.navbar-brand,
.navbar-nav .nav-link {
  color: #fff;
  text-decoration: none;
}

.navbar-toggler {
  border: none;
  background-color: transparent;
  color: #fff;
}

.navbar-toggler:focus {
  outline: none;
}

.dropdown-menu {
  display: none;
  position: absolute;
  background-color: #343a40;
  padding: 0;
  margin-top: 2px;
}

.dropdown-menu.show {
  display: block;
}

.dropdown-item {
  color: #fff;
  padding: 8px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-item:hover {
  background-color: #495057;
}

.logout-button {
  padding: 8px 16px;
  background-color: red;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
</style>
