<template>
  <div class="container">
    <div class="bg-white text-end about">
      <span class="title">سبد محصولات ما</span>
      <div class="products">
        <div
          class="d-flex align-items-baseline"
          v-for="(item, index) in products"
          :key="index"
        >
          <img class="tick" src="../assets/images/tick-square.svg" alt="tick" />
          <span class="card-text"> {{ item }} </span>
        </div>
      </div>
      <div class="card mt-4">
        <div
          class="card-header d-flex justify-content-between align-items-center"
        >
          <img src="../assets/images/garanti.svg" alt="" />
          <span> شرایط گارانتی</span>
          <img src="../assets/images/garanti.svg" alt="" />
        </div>
        <div class="card-body">
          <p>
            گروه الیتک با هدف جلب رضایت مشتریان خود ، کلیه قطعات با برند الیتک
            را با شرایط و ضوابط مختص هر قطعه گارانتی می نماید .
          </p>
          <p>
            مشتریان محترم الیتک با ارسال پیامک سریال نامبر مندرج بر روی بسته
            بندی قطعات الیتک قادر به فعالسازی گارانتی قطعات خود می باشند.
          </p>
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
      products: [
        "قطعات موتوری",
        "سیستم تعلیق / فرمان/ چرخ و اکسل",
        "سیستم ترمز",
        "خنک کننده / بخاری و متعلقات",
        "برقی و چراغ ها",
        "بدنه و اسکلت",
        "سیستم ایمنی و ایربگ",
        "برای کلیه خودروهای چینی : MVM-GEELY-JAC-CHERY  و .....",
      ],
    };
  },
};
</script>

<style scoped>
.products {
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 16px;
  margin-bottom: 48px;
}
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
  padding: 32px 46px 30px 46px;
}

.card-text {
  margin-right: 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 240%;
}
.tick {
  width: 20px;
  height: 20px;
  top: 6px;
  position: relative;
}
.about {
  padding: 48px 71px 55px 71px;
  border-radius: 0 0 34px 34px;
  margin-bottom: 18px;
  margin-top: 38px;
}

.about .title {
  font-weight: 700;
  font-size: 24px;
  line-height: 37px;
  margin-bottom: 10px;
  display: block;
}
@media only screen and (max-width: 426px) {
  .products{display: unset;}
  .about {
    padding: 24px 16px 36px 16px;
  }
  .about .title {
    margin-top: 16px !important;
    font-size: 18px !important;
    line-height: 28px !important;
  }

  .card-body {
    grid-template-columns: unset;
    gap: 12px;
    font-size: 14px !important;
    padding: 18px 15px 21px 12px;
  }
  .card-text {
    font-size: 12px;
    line-height: 19px;
    margin-right: 8px;
  }
  .card-header img {
    width: 31px;
  }
  .card-header {
    height: 59px;
  }
  .card-header span {
    font-size: 18px;
    line-height: 28px;
  }
}
</style>