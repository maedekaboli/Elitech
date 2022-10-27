<template>
  <div class="container-fluid p-0 m-0">
    <div class="footer">
      <div class="d-flex p-0 m-0 row">
        <div
          class="
            col-xs-12 col-lg-8 col-md-7
            order-md-1 order-2
            contact-us
            d-flex
            align-items-start
          "
        >
          <span class="title">تماس با ما</span>
          <div
            class="d-flex align-items-center contact-info"
            v-for="(item, index) in contactInfo"
            :key="index"
          >
            <img :src="'./images/' + item.icon" class="mr-3" :alt="item.icon" />
            <p class="mb-0 pr-3">{{ item.info }}</p>
          </div>
          <ul class="list-unstyled list-inline m-0 p-0">
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
          class="
            col-xs-12 col-lg-4 col-md-5
            order-md-2 order-1
            cooperation-request
            mb-5 mb-md-0
          "
        >
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
      <span> تمامی حقوق متعلق به سایت الیتک می باشد </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      contactInfo: [
        {
          icon: "location.svg",
          info: "تهران-خیابان آزادی-خیابان جمالزاده شمالی-کوچه بزمه-پلاک 10",
        },
        { icon: "call-calling.svg", info: "021-44444444" },
        { icon: "sms.svg", info: "info@elitechpart.com" },
      ],
      socials: [
        { link: "", imgURL: "facebook-black.svg" },
        { link: "", imgURL: "whatsapp-black.svg" },
        { link: "", imgURL: "twitter-black.svg" },
        { link: "", imgURL: "linkedin-black.svg" },
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
.contact-info {
  margin-bottom: 34px;
  color: #cbcbcb;
}
.contact-us {
  flex-direction: column;
}
@media only screen and (min-width: 1025px) {
  .contact-us {
    padding-right: 160px;
  }
}
@media only screen and (max-width: 320px) {
  .footer {
    padding-right: 22px;
    padding-left: 22px;
  }
  .cooperation-request > form,
  .submit-cooperate-btn {
    width: 100% !important;
  }
}
.contact-us > .title {
  font-weight: 700;
  font-size: 24px;
  line-height: 37px;
  color: #dcdcdc;
  margin-bottom: 32px;
}
.cooperation-request > form {
  width: 300px;
}
.cooperation-request .form-control,
.cooperation-request .form-select {
  background-color: #e6eaee !important;
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
  width: 300px;
}
.footer-last-part {
  font-size: 14px;
  height: 59px;
  background-color: #e6eaee;
}
.social-items {
  width: 40px;
  margin-left: 10px;
  height: 40px;
  background-color: #ffdd00;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>