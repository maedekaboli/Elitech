 
<template>
  <div class="home">
    <Header></Header>
    <div class="main-body-space">
      <Introduction></Introduction>
      <Gallery></Gallery>
      <About></About>
    </div>
    <Footer></Footer>
  </div>
</template>
  
  <script>
import Gallery from "./Gallery.vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import About from "./About.vue";
import Introduction from "./Introduction.vue";

export default {
  name: "Home",
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
.home {
  background-color: #cecece;
}
.main-body-space {
  padding: 0 160px;
}
@media only screen and (min-width: 320px) {
  .main-body-space {
    padding: 0 12px;
  }
}
</style>
  