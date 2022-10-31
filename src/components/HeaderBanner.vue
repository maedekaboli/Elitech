<template>
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
        <a target="_blank" :href="item.link" class="social-items">
          <img :src="'./images/' + item.imgURL" />
        </a>
      </li>
    </ul>
  </div>
</template>



<script>
export default {
  name: "HeaderBanner",
  data() {
    return {
      socials: [
        {
          link: "https://www.instagram.com/elitechpartcom",
          imgURL: "facebook-yellow.svg",
        },
        {
          link: "https://www.instagram.com/elitechpartcom",
          imgURL: "whatsapp-yellow.svg",
        },
        {
          link: "https://www.instagram.com/elitechpartcom",
          imgURL: "twitter-yellow.svg",
        },
        {
          link: "https://www.instagram.com/elitechpartcom",
          imgURL: "linkedin-yellow.svg",
        },
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
@media only screen and (min-width: 1025px) {
  .header-banner {
    width: 1120px;
  }
}

@media only screen and (max-width: 426px) {
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