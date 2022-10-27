<template>
  <Header></Header>
  <div class="main-body-space">
    <Introduction></Introduction>
    <Gallery></Gallery>
    <About></About>
  </div>
  <Footer></Footer>
</template>

<script>
import Gallery from "./components/Gallery.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import About from "./components/About.vue";
import Introduction from "./components/Introduction.vue";

export default {
  name: "App",
  components: {
    Footer,
    Gallery,
    Introduction,
    Header,
    About,
  },
};
</script>

<style>
#app {
  background-color: #cecece;
  direction: rtl !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #231f20;
}
.main-body-space{
  padding: 0 160px
}
@media only screen and (min-width: 320px) {
  .main-body-space{
  padding: 0 12px
}
}
</style>
