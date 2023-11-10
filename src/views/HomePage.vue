<template>
  <div>
    <NavBar :user="user" @logout="logout" />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';


export default {
  name: 'HomePage',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  components:{
    NavBar,


  },
  data() {
    return {

    };
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