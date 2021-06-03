<template>
    <div id="app">
      
      <Header />
      <Navigation />
  
        <router-view></router-view>


      <Footer />


  


      





    </div>
</template>

<script>
import './assets/css/style.css'
import axios from 'axios'
import Header from './components/ui/Header.vue'
import Footer from './components/ui/Footer.vue'
import Navigation from './components/ui/Navigation.vue'

  export default{
  	components: {Header, Footer, Navigation},
    created(){
      this.$store.dispatch('catalog/loadCategory')
    }
  }
</script>



<style>
  select{
    width: 100%;
  }
</style>





