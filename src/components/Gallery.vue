<template>
  <div class="container gallery">
    <div class="d-md-block d-none mx-lg-5 mx-0 px-lg-4 px-0">
      <MasonryWall
        :items="galleryImages1"
        :ssr-columns="1"
        :column-width="306"
        :gap="30"
      >
        <template #default="{ item, index }">
          <div
            :style="{ height: item.height }"
            :class="[
              'mb-4 gallery-item flex items-center justify-center',
              index != 0 ? 'bg-white img-custom' : '',
            ]"
          >
            <div
              class="gallery-title text-end position-relative"
              v-if="index == 0"
            >
              <span class="first-title">گالری </span>
              <span class="second-title mt-5 position-absolute">تصاویر </span>
            </div>
            <div
              v-if="index != 0"
              @click="showModal(item, index)"
              :style="{ height: `${item.height}px` }"
            >
              <img
                :style="{ height: `${item.height}px` }"
                :src="item.url"
                alt=""
                class="w-100"
              />
              <div class="d-flex align-items-end mt-2">
                <img
                  src="../assets/images/medal.svg"
                  class="mr-3"
                  alt="medal"
                />
                <span class="title">{{ item.title }}</span>
              </div>
            </div>
          </div>
        </template>
      </MasonryWall>
      <GalleryModal
        :modalShow="showModalDialog"
        :modalIndex="modalIndex"
        :modalItem="modalItem"
        @closeModal="closeModal"
      ></GalleryModal>
    </div>
    <div class="d-sm-none d-block">
      <div class="d-flex justify-content-center flex-wrap">
        <div class="gallery-title mb-4">
          <span class="first-title">گالری </span>
          <span class="second-title mt-1">تصاویر </span>
        </div>
        <div id="gallery" class="carousel w-100 slide" data-bs-interval="7000">
          <div class="carousel-inner">
            <div
              :class="['carousel-item ', index == 1 ? 'active' : '']"
              v-for="(item, index) in galleryImages"
              :key="index"
            >
              <img
                :src="item.url"
                class="d-block carousel-img"
                :alt="item.url"
              />
              <div class="d-flex align-items-end justify-content-end mt-2">
                <span class="title">{{ item.title }}</span>
                <img
                  src="../assets/images/medal.svg"
                  class="mr-3 icon"
                  alt="medal"
                />
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
    </div>
  </div>
</template>

<script>
import MasonryWall from "@yeger/vue-masonry-wall";
import GalleryModal from "./GalleryModal.vue";

import { defineComponent } from "vue";

export default defineComponent({
  components: {
    MasonryWall,
    GalleryModal,
  },
  data() {
    return {
      showModalDialog: false,
      modalItem: null,
      modalIndex: null,
      galleryImages1: [
        {
          title: "",
          url: "",
          height: 207,
        },
        {
          title: "مجموعه دسته موتورها",
          url: "./images/01-min.png",
          height: 207,
        },
        {
          title: "مجموعه قطعات جلوبندی",
          url: "./images/02-min.png",
          height: 384,
        },
        {
          title: "مجموعه تسمه ها و سفت کن ها",
          url: "./images/03-min.png",
          height: 271,
        },
        {
          title: "سیستم ترمز ها",
          url: "./images/04-min.png",
          height: 384,
        },
        {
          title: "مجموعه قطعات برقی و سنسور ها",
          url: "./images/05-min.png",
          height: 271,
        },
        {
          title: "مجموعه قطعات موتوری",
          url: "./images/06-min.png",
          height: 207,
        },
      ],
      galleryImages: [
        {
          title: "مجموعه دسته موتورها",
          url: "./images/01-min.png",
        },
        {
          title: "مجموعه قطعات جلوبندی",
          url: "./images/02-min.png",
        },
        {
          title: "مجموعه تسمه ها و سفت کن ها",
          url: "./images/03-min.png",
        },
        {
          title: "سیستم ترمز ها",
          url: "./images/04-min.png",
        },
        {
          title: "مجموعه قطعات برقی و سنسور ها",
          url: "./images/05-min.png",
        },
        {
          title: "مجموعه قطعات موتوری",
          url: "./images/06-min.png",
        },
      ],
    };
  },
  methods: {
    closeModal() {
      this.showModalDialog = false;
    },
    showModal(item, index) {
      this.modalItem = item;
      this.showModalDialog = true;
      this.modalIndex = index;
    },
  },
});
</script>

<style scoped>
.carousel-img {
  border: 2px solid #ffdd00;
  background-color: white;
}
.carousel-item {
  text-align: -webkit-center;
}
.gallery-title .first-title {
  font-weight: 900;
  font-size: 48px;
  line-height: 74px;
  text-align: right;
  color: #231f20;
}
.gallery-title .second-title {
  font-weight: 500;
  font-size: 34px;
  line-height: 53px;
  text-align: right;
  color: #231f20;
}
.carousel-item .icon {
  width: 24px;
  height: 24px;
}
.title,
.carousel-item .title {
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  white-space: nowrap;
  overflow: hidden;
  width: 300px;
  text-align: right;
  text-overflow: ellipsis;
}
.carousel-item .title {
  width: 100% !important;
  direction: rtl;
}
.gallery {
  margin-top: 48px;
  margin-bottom: 38px;
}
.img-custom {
  border: 2px solid #ffdd00;
}
.masonry-item img,
.gallery-item {
  border-radius: 16px !important;
}
.masonry-item {
  margin-bottom: 23px;
}
.carousel {
  direction: ltr;
}
.carousel-item img {
  width: 96%;
  height: 207px;
  border-radius: 16px;
}
.carousel-control-next {
  height: 207px;
  position: absolute;
  right: -6%;
}
.carousel-control-next-icon {
  position: relative;
  right: -13px;
}
.carousel-control-prev {
  height: 207px;
  position: absolute;
  left: -11%;
}

@media only screen and (max-width: 426px) {
  .gallery-title .first-title {
    font-size: 24px;
    line-height: 37px;
  }
  .gallery-title .second-title {
    font-size: 18px;
    line-height: 28px;
  }
}
</style>
  
  