<template>
  <div id="nav-bar">
    <router-link to="/products" id="home-link">
      <h1>Welcome to my shop</h1>
    </router-link>
    <div class="user-info">

      <div>
        <h3>Hello, {{ user.username }}</h3>
      </div>
        
      <router-link to="/cart">
        <button class="cart-button">Cart</button>
      </router-link>
      <router-link to="/" id="btn-logout">
        <button class="logout-button" @click="logout">Logout</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  methods: {
    logout() {
      // Xử lý đăng xuất
      // Emit sự kiện logout để bắt trong App và thực hiện các xử lý tương ứng
      this.$emit('logout');
    },
  },
};
</script>

<style scoped>
#nav-bar {
  border-bottom: 1px solid #ddd;
  height: 75px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#home-link {
  text-align: center;
  color: black;
  font-size: 22px;
  text-decoration: none;
}

#home-link h1 {
  margin: 0;
}

.user-info {
  display: flex;
  align-items: center;
}

.user-info h3 {
  margin-right: 10px;
  padding-top: 10px;
  font-size: 16px;
  color: #333;
}

.cart-button {
  padding: 8px 16px;
  background-color: #f2f2f2;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-right: 8px;
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

.cart-button:hover {
  background-color: #e6e6e6;
}

.logout-button:hover {
  background-color: darkred;
}
</style>