<template>
    <div>
      <Navbar />
      <router-view />
    </div>


    <div>test</div>
  </template>
  
  <script>
  import Navbar from '@/components/Navbar.vue'
  
  export default {
    components: {
      Navbar
    }
  }
  </script>