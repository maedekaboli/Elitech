<template>
  <div class="d-flex justify-content-center">
    <HeaderBanner />
    <div
      id="carouselExampleCaptions"
      class="carousel w-100 slide"
      data-bs-interval="7000000"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div
          class="carousel-item active"
          v-for="(item, index) in headerItems"
          :key="index"
        >
          <img
            :src="'./images/' + item.imgURL"
            class="d-block w-100"
            :alt="item.imgURL"
          />
          <div class="carousel-caption">
            <h2>{{ item.title }}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import HeaderBanner from "./HeaderBanner.vue";

export default {
  name: "Footer",
  components: { HeaderBanner },
  data() {
    return {
      headerItems: [
        {
          title: "با الیتک، همواره در حرکت ",
          imgURL: "chad.png",
        },
      ],
    };
  },
};
</script>



<style scoped>

.carousel-control-prev-icon {
  background-image: url("../assets/images/arrow.svg") !important;
}
.carousel-control-next,
.carousel-control-prev {
  opacity: 1 !important;
}
.carousel-control-next-icon {
  background-image: url("../assets/images/arrow.svg") !important;
  rotate: 180deg;
}
.carousel-item {
  height: 576px;
  background: rgba(35, 31, 32, 0.48);
}

.carousel-item img {
  height: inherit;
}
.carousel-caption {
  bottom: 240px;
}
.carousel-caption h2 {
  font-weight: 900;
  font-size: 48px;
  line-height: 132%;
  text-align: center;
  color: #ffdd00;
}
.carousel-caption p {
  margin-top: 26px;
  font-weight: 700;
  font-size: 32px;
  line-height: 50px;
  color: #dcddde;
}


.carousel {
  direction: ltr !important;
}

@media only screen and (max-width: 426px) {
  .carousel-control-next-icon,
  .carousel-control-prev-icon {
    height: 16px;
  }
  .carousel-caption {
    bottom: 60px;
  }
  .carousel-caption h2 {
    font-size: 24px;
    line-height: 132%;
  }

  .carousel-caption p {
    font-size: 14px;
    line-height: 22px;
    margin-top: 0;
  }
  .carousel-item {
    height: 236px;
  }

}
</style>