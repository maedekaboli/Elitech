<template>
  <div class="container">
    <div class="bg-white text-end introduction">
      <div class="h_iframe-aparat_embed_frame">
        <span style="display: block; padding-top: 57%"></span
        ><iframe
          src="https://www.aparat.com/video/video/embed/videohash/8hXcV/vt/frame"
          allowFullScreen="true"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
        ></iframe>
      </div>

      <span class="title">معرفی</span>
      <div class="introduction-content">
        <p>
          مجموعه الیتک پارت از سال 1380به عنوان یک واحد تولیدی، بازرگانی با
          واردات قطعات خودرو های چینی آغاز به کار نموده است و با توجه به نیاز
          کشور به استفاده از فن آوری های نوین در امر تولید مبادرت به همکاری و
          حمایت از شرکت های دانش بنیان داخلی و سرمایه گذاری در این حوزه نموده
          است.
        </p>
        <p>
          الیتک با بهره گیری از استانداردهای جهانی ۱۶۹۴۹ ISO/TS و ۱۶۹۴۹ IATF
          درتولید، کلیه محصولات خود را با شرایط گارانتی وخدمات پس از فروش به
          مشتریان ارائه نموده و واحد CRM در این مجموعه جهت رضایت و پاسخگویی فعال
          می باشد .
        </p>
        <p>
          عزم ما ارائه محصولات برتر و امیدمان استقبال همکاران و مشتریان است .
        </p>
        <p>ارزش برند الیتک همراه بودن با مشتری در تمام مسیر می باشد</p>
        <p class="mb-0">با الیتک همواره به حرکت</p>
      </div>
    </div>
  </div>
</template>


 <script>

export default {
  name: "Introduction"
};
</script> 

<style>
.h_iframe-aparat_embed_frame {
  position: relative;
}
.h_iframe-aparat_embed_frame .ratio {
  display: block;
  width: 100%;
  height: auto;
}
.h_iframe-aparat_embed_frame iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.video-js .vjs-modal-dialog {
  border-radius: 16px;
}
.vjs-poster {
  background-size: cover;
  border-radius: 16px;
}
.video-js {
  width: 100%;
  background: rgba(220, 221, 222, 0.33);
  border-radius: 16px;
  height: 417px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.video-js .vjs-big-play-button {
  position: relative;
  width: 82px !important;
  height: 82px !important;
  border: 1px solid #ffdd00 !important;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) !important;
  border-radius: 50% !important;
}
.introduction {
  padding: 48px 71px 55px 71px;
  border-radius: 34px 34px 0 0;
  margin-bottom: 18px;
  margin-top: -170px;
  position: relative;
  z-index: 1;
}

.introduction .title {
  font-weight: 700;
  font-size: 24px;
  line-height: 37px;
  margin-top: 24px;
  display: block;
}
.introduction-content {
  margin-bottom: 48px;
  font-weight: 500;
  font-size: 16px;
  line-height: 240%;
  margin-top: 24px;
  color: #676767;
}
.vjs-play-control .vjs-icon-placeholder:before,
.video-js .vjs-big-play-button .vjs-icon-placeholder:before {
  content: "";
  background-image: url("../assets/images/play.svg") !important;
  background-position: center;
  background-repeat: no-repeat;
}
@media only screen and (max-width: 426px) {
  .vjs-play-control .vjs-icon-placeholder:before,
  .video-js .vjs-big-play-button .vjs-icon-placeholder:before {
    background-size: 40%;
  }
  .video-js .vjs-big-play-button {
    width: 48px !important;
    height: 48px !important;
  }
  .video-js {
    height: 154px;
  }
  .introduction {
    padding: 16px 16px 24px 16px;
    margin-top: -38px;
    border-radius: 16px 16px 0 0;
  }
  .introduction .title {
    margin-top: 16px !important;
    font-size: 18px !important;
    line-height: 28px !important;
  }
  .introduction-content {
    margin-top: 8px !important;
    font-size: 14px !important;
    margin-bottom: 0 !important;
  }
}
</style>