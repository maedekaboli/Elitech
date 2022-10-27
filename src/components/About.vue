<template>
  <div class="container">
    <div class="bg-white text-end about">
      <span class="title">درباره ما</span>
      <p class="about-content">
        اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های
        برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما
        (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون معنی است که برای امتحان
        فونت و یا پر کردن فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده میشود.
        طراحان وب و گرافیک از این متن برای پرکردن صفحه و ارائه شکل کلی طرح
        استفاده می‌کنند.اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار
        دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم
        ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون معنی است
        که برای امتحان فونت و یا پر کردن فضا در یک طراحی گرافیکی و یا صنعت چاپ
        استفاده میشود. طراحان وب و گرافیک از این متن برای پرکردن صفحه و ارائه
        شکل کلی طرح استفاده می‌کنند.
      </p>
      <div class="card">
        <div
          class="card-header d-flex justify-content-between align-items-center"
        >
          <img src="../assets/images/garanti.svg" alt="" />
          <span> شرایط گارانتی</span>
          <img src="../assets/images/garanti.svg" alt="" />
        </div>
        <div class="card-body">
          <div
            class="d-flex align-items-center"
            v-for="(item, index) in 8"
            :key="index"
          >
            <img src="../assets/images/tick-square.svg" alt="tick" />
            <span class="card-text">
              اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
.card {
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  border: 0;
}
.card-header {
  background: #dcddde;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  border: 0;
  height: 125px;
  font-weight: 700;
  font-size: 32px;
  line-height: 50px;
}
.card-body {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 16px;
  padding: 32px 46px 30px 46px;
}

.card-text {
  margin-right: 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 240%;
}
.card-body img {
  width: 20px;
  height: 20px;
  margin-bottom: 3px;
}
.about {
  padding: 48px 71px 55px 71px;
  border-radius: 0 0 34px 34px;
  margin-bottom: 18px;
  margin-top: 38px;
}
@media only screen and (min-width: 320px) {
  .about {
    padding: 24px 16px 36px 16px;
  }
  .card-header img {
    width: 31px;
  }
  .card-header{
    height: 59px;
  }
  .card-header span {
    font-size: 18px;
line-height: 28px;
  }
}
.about .title {
  font-weight: 700;
  font-size: 24px;
  line-height: 37px;
}
.about-content {
  margin-bottom: 48px;
  font-weight: 500;
  font-size: 16px;
  line-height: 240%;
  margin-top: 24px;
  color: #676767;
}
</style>