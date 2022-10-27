<template>
    <GalleryModal></GalleryModal>
  <div class="d-flex justify-content-center">
    <div
      id="gallery"
      class="carousel w-100 slide"
      data-bs-interval="7000"
    >
      <div class="carousel-inner">
        <div
          class="carousel-item active"
          v-for="(item, index) in headerItems"
          :key="index"
        >
          <img
            :src="'./images/' + item.imgURL"
            class="d-block"
            :alt="item.imgURL"
          />
          <div class="carousel-caption d-none d-md-block">
            <h2>{{ item.title }}</h2>
            <p>{{ item.content }}</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#gallery"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#gallery"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>
  
  
  <script>
  import GalleryModal from './GalleryModal.vue'
export default {
  name: "Footer",
  components:{
    GalleryModal
  },
  data() {
    return {
      headerItems: [
        {
          title: "با الیتک همواره در حرکت باش",
          content: "تهیه و توزیع لوازم یدکی خودرو های چینی در ایران",
          imgURL: "chad.png",
        },
        {
          title: "با الیتک همواره در حرکت باش",
          content: "تهیه و توزیع لوازم یدکی خودرو های چینی در ایران",
          imgURL: "intro-poster.svg",
        },
      ],
    };
  },
};
</script>
  
  
  
  <style scoped>
.carousel-item img {
  width: 306px;
  height: 207px;
  border-radius: 16px;
}
.carousel-caption h2 {
  font-weight: 900;
  font-size: 48px;
  line-height: 132%;
  text-align: center;
  color: #ffdd00;
}
.carousel-caption p {
  margin-top: 32px;
  font-weight: 700;
  font-size: 32px;
  line-height: 50px;
  color: #dcddde;
}
</style>