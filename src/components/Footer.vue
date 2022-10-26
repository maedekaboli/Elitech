<template>
  <div class="container-fluid p-0 m-0">
    <div class="footer">
      <div class="d-flex p-0 m-0 row">
        <div class="col-xs-12 col-lg-8 col-md-6 contact-us d-flex align-items-start">
          <span class="title">تماس با ما</span>
          <div>
            <img src="" alt="">
            <p></p>
          </div>
          <ul class="list-unstyled list-inline m-0 p-0">
            <li
              v-for="(item, index) in socials"
              :key="index"
              class="list-inline-item m-0"
            >
              <a :href="item.link" class="social-items">
                <img :src="item.imgURL" />
              </a>
            </li>
          </ul>
        </div>
        <div class="col-xs-12 col-lg-4 col-md-6 cooperation-request">
          <span class="text-white d-flex title">درخواست همکاری</span>
          <form>
            <div class="mb-2">
              <input
                type="text"
                class="form-control"
                id="fullName"
                aria-describedby="emailHelp"
                placeholder="نام نام خانوادگی"
              />
            </div>
            <div class="mb-2">
              <input
                type="text"
                class="form-control"
                id="phone"
                placeholder="شماره موبایل"
              />
            </div>
            <div class="mb-3">
              <select class="form-select" aria-label="Default select example">
                <option selected>انتخاب شهر</option>
                <option value="1">تهران</option>
                <option value="2">البرز</option>
                <option value="3">شیراز</option>
              </select>
            </div>
            <button type="submit" class="btn btn-warning submit-cooperate-btn">
              ثبت درخواست
            </button>
          </form>
        </div>
      </div>
    </div>
    <div
      class="footer-last-part d-flex align-items-center justify-content-center"
    >
      <span> تمامی حقوق متعلق به سایت .......... می باشد </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      socials: [
        { link: "", imgURL: "/assets/facebook.png" },
        { link: "", imgURL: "../../assets/whatsapp.png" },
        { link: "", imgURL: "./src/assets/twitter.png" },
        { link: "", imgURL: "/src/assets/linkedin.png" },
      ],
    };
  },
};
</script>

<style scoped>
.footer {
  background-color: #231f20;
  border-top: 7px solid #ffdd00;
  padding: 54px 0;
}
.contact-us {
  flex-direction: column;
  padding-right: 160px;
}
.contact-us > .title {
  font-weight: 700;
  font-size: 24px;
  line-height: 37px;
  color: #dcdcdc;
}
.cooperation-request > form {
  width: 300px;
}
.cooperation-request  .form-control, .cooperation-request .form-select{
    background-color: #E6EAEE !important;
}
.cooperation-request > .title {
  margin-bottom: 22px;
  font-weight: 700;
  font-size: 24px;
  line-height: 37px;
}
.submit-cooperate-btn {
  background-color: #ffdd00 !important;
  font-weight: 700;
  font-size: 16px;
  line-height: 25px;
  width: 300px !important;
}
.footer-last-part {
  font-size: 14px;
  height: 59px;
  background-color: #e6eaee;
}
.social-items {
    margin-top: 30px !important;
  width: 40px;
  height: 40px;
  background-color: #ffdd00;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>