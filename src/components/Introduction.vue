<template>
  <div class="container">
    <div class="bg-white text-end introduction">
      <video-player
        :src="'./images/' + 'video.mp4'"
        :poster="'./images/' + 'intro-poster.svg'"
        controls
        :volume="0.6"
      />
      <span class="title">معرفی</span>
      <p class="introduction-content">
        اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های
        برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما
        (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون معنی است که برای امتحان
        فونت و یا پر کردن فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده میشود.
        طراحان وب و گرافیک از این متن برای پرکردن صفحه و ارائه شکل کلی طرح
        استفاده می‌کنند.
      </p>
    </div>
  </div>
</template>


 <script>
import { VideoPlayer } from "@videojs-player/vue";
import "video.js/dist/video-js.css";

export default {
  name: "Introduction",
  components: {
    VideoPlayer,
  },
};
</script> 

<style>
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
@media only screen and (max-width: 320px) {
  .video-js {
    height: 154px;
  }
  .introduction {
    padding: 24px 16px 24px 16px;
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
</style>