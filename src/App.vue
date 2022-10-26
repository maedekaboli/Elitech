<template>
  <About></About>
  <Footer></Footer>
</template>

<script>
import Footer from './components/Footer.vue'
import About from './components/About.vue'


export default {
  name: 'App',
  components: {
    Footer,
    About
  }
}
</script>

<style>
#app {
  background-color: #CECECE;
  direction: rtl !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #231F20;
}
</style>
