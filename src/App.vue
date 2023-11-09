<template>
  <div id="app">
    <NavBar/>
    <router-view></router-view>
    <div class="auth-wrapper">
      <div class="auth-inner">
          
      </div>
    </div>
    
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import axiosClient from './api/axiosClient';
export default {
  name:'App',
  components: {
    NavBar,
  },
  async created() {
    const res = await axiosClient.get('api/users')
    console.log(res)
  }
}
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