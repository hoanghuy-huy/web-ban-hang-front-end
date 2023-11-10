<template>
  <div id="app">

    <div class="auth-wrapper">
      <div class="auth-inner">
          <!-- <RouterView/> -->
          <template v-if="showLogin">
              <Login @login-success="onLoginSuccess" />
          </template>
          <template v-else>
            <HomePage :user="user" @logout="logout" />
            
          </template>
      </div>
    </div>
    
  </div>
</template>

<script>

import HomePage from './views/HomePage.vue';
import Login from './components/Login.vue';

export default {
  name: 'App',
  data() {
    return {
      showLogin: true,
      user: null,
    };
  },
  components: {
    Login,
    HomePage,
  },
  methods: {
    onLoginSuccess(userData) {
      this.user = userData;
      this.showLogin = false;
      localStorage.setItem('token', userData.accessToken);
      localStorage.setItem('userData', JSON.stringify(userData));
    },
    checkTokenExistence() {
      
      const token = localStorage.getItem('token');
      if (token) {
        const userData = localStorage.getItem('userData');
        if (userData) {
          this.user = JSON.parse(userData);
        }
        this.showLogin = false;
      }

      
    },
    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('userData');
      this.user = null;
      this.showLogin = true;
    },
  },
  mounted() {
    this.checkTokenExistence();
  },
};
</script>

<style>
  * {
    box-sizing: border-box;
    font-family: Arial;
  }

  #page-wrap {
    margin: auto;
    max-width: 800px;
    min-height: 100vh;
  }

  button {
    background-color: black;
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    outline: 0;
    padding: 16px;
  }
</style>