<template>
  <div class="d-flex justify-content-center">
    <div
      class="
        header-banner
        d-flex
        justify-content-md-between justify-content-center
        align-items-center
      "
    >
      <img src="../assets/images/main-logo.svg" alt="logo" class="" />
      <ul class="list-unstyled list-inline m-0 p-0 d-md-flex d-none">
        <li
          v-for="(item, index) in socials"
          :key="index"
          class="list-inline-item m-0"
        >
          <a :href="item.link" class="social-items">
            <img :src="'./images/' + item.imgURL" />
          </a>
        </li>
      </ul>
    </div>
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
            <p>{{ item.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Footer",
  data() {
    return {
      headerItems: [
        {
          title: "با الیتک، همواره در حرکت ",
          imgURL: "chad.png",
        }
      ],
      socials: [
        { link: "", imgURL: "facebook-yellow.svg" },
        { link: "", imgURL: "whatsapp-yellow.svg" },
        { link: "", imgURL: "twitter-yellow.svg" },
        { link: "", imgURL: "linkedin-yellow.svg" },
      ],
    };
  },
};
</script>



<style scoped>

.header-banner {
  padding: 0 32px 0 22px;
  width: 90%;
  height: 68px;
  z-index: 1;
  position: absolute;
  top: 50px;
  background: #dcddde;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 34px;
}
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

.social-items {
  width: 40px;
  margin-left: 10px;
  height: 40px;
  background-color: #231f20;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.carousel {
  direction: ltr !important;
}
@media only screen and (min-width: 1025px) {
  .header-banner {
    width: 1120px;
  }
}
@media only screen and (max-width: 426px) {
  .carousel-control-next-icon,
  .carousel-control-prev-icon {
    height: 16px;
  }
  .carousel-caption {
    bottom: 0;
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
  .header-banner {
    height: 48px;
    top: 24px;
  }
  .header-banner img {
    width: 102px;
    height: 24px;
  }
}
</style>