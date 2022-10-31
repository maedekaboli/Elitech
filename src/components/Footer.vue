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
            class="d-flex align-items-baseline contact-info"
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
              <a target="_blank" :href="item.link" class="social-items">
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
            mb-4 mb-md-0
          "
        >
          <span class="text-white d-flex title">درخواست همکاری</span>
          <form>
            <div class="mb-2">
              <input
                type="text"
                class="form-control"
                id="fullName"
                v-model="form.name"
                aria-describedby="emailHelp"
                placeholder="نام نام خانوادگی"
              />
            </div>
            <div class="mb-2">
              <input
                type="text"
                class="form-control"
                id="phone"
                v-model="form.mobile"
                placeholder="شماره موبایل"
              />
            </div>
            <div class="mb-3">
              <v-select
                dir="rtl"
                class="bg-white"
                v-model="selectedProvience"
                :options="provinces"
                placeholder="شهر"
              ></v-select>
            </div>
            <button
            :disabled="loading ? true : false"
              type="button"
              class="
                btn btn-warning
                submit-cooperate-btn
                d-inline-flex
                align-items-center
                justify-content-center
                gap-2
              "
              @click="submitForm"
            >
              <div
                v-if="loading"
                class="spinner-border text-dark spinner-border-sm"
                role="status"
              >
                <span class="visually-hidden">Loading...</span>
              </div>
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
import api from "../api";
import vSelect from "vue-select";
import { useToast } from "vue-toastification";

export default {
  name: "Footer",
  components: {
    vSelect,
  },
  data() {
    return {
      loading: false,
      toast: useToast(),
      contactInfo: [
        {
          icon: "location.svg",
          info: "آدرس فروشگاه مرکزی: تهران، خیابان ملت تقاطع اکباتان پلاک 133",
        },
        {
          icon: "location.svg",
          info: "آدرس دفتر مرکزی: تهران، سهروردی، خیابان کاووسی فر پلاک 59 واحد 1",
        },
        { icon: "call-calling.svg", info: "021-33988000" },
        { icon: "sms.svg", info: "sales@elitechpart.com" },
      ],
      socials: [
        {
          link: "https://www.instagram.com/elitechpartcom",
          imgURL: "facebook-black.svg",
        },
        {
          link: "https://www.instagram.com/elitechpartcom",
          imgURL: "whatsapp-black.svg",
        },
        {
          link: "https://www.instagram.com/elitechpartcom",
          imgURL: "twitter-black.svg",
        },
        {
          link: "https://www.instagram.com/elitechpartcom",
          imgURL: "linkedin-black.svg",
        },
      ],
      provinces: [],
      selectedProvience: null,
      form: {
        name: null,
        mobile: null,
        form: "cooperation",
        type: null,
        author: null,
        data: { city: null },
      },
    };
  },
  methods: {
    submitForm() {
      this.loading = true;
      this.form.data.city = this.selectedProvience?.code;
      api
        .post("form", this.form)
        .then((res) => {
          this.loading = false;
          this.form.name = null;
          this.form.mobile = null;
          this.toast.success(res.data.message);
        })
        .catch((res) => {
          this.loading = false;
          this.toast.error(res.data.message);
        });
    },
  },
  mounted() {
    api.get("general").then((res) => {
      res?.data?.data?.provinces.forEach((item) =>
        this.provinces.push({ label: item.name, code: item.id })
      );
    });
  },
};
</script>

<style scoped>
.footer {
  background-color: #231f20;
  border-top: 7px solid #ffdd00;
  padding: 54px 0;
}
.contact-info p {
  text-align: right;
}
.contact-info img {
  width: 20px;
  position: relative;
  top: 5px;
  left: 5px;
  height: 20px;
}
.contact-info {
  margin-bottom: 34px;
  color: #cbcbcb;
}
.contact-us {
  flex-direction: column;
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
@media only screen and (min-width: 1025px) {
  .contact-us {
    padding-right: 160px;
  }
}
@media only screen and (max-width: 320px) {
  .footer {
    padding: 20px 12px 32px 12px;
  }
  .cooperation-request > form,
  .submit-cooperate-btn {
    width: 100% !important;
  }
}
</style>