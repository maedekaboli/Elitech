<template>
  <div class="card bg-light mb-3">
    <div class="card-body">
      <label class="form-label d-block text-end"> تعمیرگاه :</label>
      <div class="d-flex row">
        <div class="col-md-4 mb-3 pb-3">
          <input
            v-model="form.name"
            class="form-control"
            type="text"
            placeholder="نام تعمیرگاه"
          />
        </div>
        <div class="col-md-4 mb-3 pb-3">
          <input
            class="form-control"
            type="text"
            v-model="form.phone"
            placeholder="شماره تماس تعمیرگاه"
          />
        </div>
        <div class="col-md-4 mb-3 pb-3">
          <v-select
            dir="rtl"
            class="bg-white"
            :options="provinces"
            v-model="provincesValue"
            placeholder="استان"
          ></v-select>
        </div>
        <div class="col-md-4 mb-3 pb-3">
          <v-select
            dir="rtl"
            class="bg-white"
            :options="cities"
            v-model="cityValue"
            placeholder="شهر"
          ></v-select>
        </div>
        <div class="col-md-4 mb-3 pb-3">
          <label class="d-block text-end form-label"
            >زمینه فعالیت تخصصی :</label
          >
          <div class="d-flex justify-content-between">
            <div
              style="direction: ltr"
              v-for="(item, index) in sparePartType"
              :key="index"
              class="form-check col-auto"
            >
              <label class="form-check-label" :for="`repair${item.value}`">
                {{ item.label }}
              </label>
              <input
                class="form-check-input"
                type="checkbox"
                :value="item"
                :id="`repair${item.value}`"
                v-model="checkedProducts"
              />
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3 pb-3">
          <label class="d-block text-end form-label"
            >سابقه کاری با الیتک :</label
          >
          <div class="d-flex justify-content-start gap">
            <div
              style="direction: ltr"
              v-for="(item, index) in yesOrNo"
              :key="index"
              class="form-check col-auto"
              @click="changeItem(item, 'cooperateHistory')"
            >
              <label
                class="form-check-label"
                :for="`repairCooperate${item.id}`"
              >
                {{ item.label }}
              </label>
              <input
                name="repairCooperate"
                class="form-check-input"
                type="radio"
                :checked="item.value"
                :id="`repairCooperate${item.id}`"
              />
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3 pb-3">
          <label class="d-block text-end form-label"
            >تمایل به همکاری با الیتک :</label
          >
          <div class="d-flex justify-content-start gap">
            <div
              style="direction: ltr"
              v-for="(item, index) in yesOrNo"
              :key="index"
              class="form-check col-auto"
              @click="changeItem(item, 'cooperateWilling')"
            >
              <label
                class="form-check-label"
                :for="`repairElitechWilling${item.id}`"
              >
                {{ item.label }}
              </label>
              <input
                name="repairElitechWilling"
                class="form-check-input"
                type="radio"
                :checked="item.value"
                :id="`repairElitechWilling${item.id}`"
              />
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3 pb-3">
          <label class="d-block text-end form-label"
            >تمایل به سفارش گذاری اینترنتی :</label
          >
          <div class="d-flex justify-content-start gap">
            <div
              style="direction: ltr"
              v-for="(item, index) in yesOrNo"
              :key="index"
              class="form-check col-auto"
              @click="changeItem(item, 'orderWilling')"
            >
              <label
                class="form-check-label"
                :for="`repairOderhWilling${item.id}`"
              >
                {{ item.label }}
              </label>
              <input
                name="repairOderhWilling"
                class="form-check-input"
                type="radio"
                :checked="item.value"
                :id="`repairOderhWilling${item.id}`"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <button
    :disabled="loading ? true : false"
    type="button"
    class="
      btn btn-primary
      w-50
      d-inline-flex
      align-items-center
      justify-content-center
      gap-2
    "
    @click="submitForm"
  >
    <div
      v-if="loading"
      class="spinner-border text-light spinner-border-sm"
      role="status"
    >
      <span class="visually-hidden">Loading...</span>
    </div>
    ثبت و ادامه
  </button>
</template>



<script>
import vSelect from "vue-select";

export default {
  name: "RepairShop",
  components: {
    vSelect,
  },
  props: ["provinces", "cities", "data", "loading"],
  data() {
    return {
      provincesValue: { code: 8, label: "تهران" },
      form: this.data,
      cityValue: null,
      sparePartType: [
        { value: 1, label: "چینی", checked: false },
        { value: 2, label: "ایرانی", checked: false },
        { value: 3, label: "سایر", checked: false },
      ],
      yesOrNo: [
        { id: 1, value: false, label: "دارد" },
        { id: 0, value: false, label: "ندارد" },
      ],
      checkedProducts: [],
    };
  },
  methods: {
    changeItem(item, type) {
      switch (type) {
        case "orderWilling":
          this.form.orderWilling = item.id;
          break;
        case "cooperateWilling":
          this.form.cooperateWiiling = item.id;
          break;
        case "cooperateHistory":
          this.form.cooperateHistory = item.id;
          break;
      }
    },
    submitForm() {
      this.checkedProducts.forEach((i) => this.form.partType.push(i.value));
      this.form.provinces = this.provincesValue?.code;
      this.form.city = this.cityValue?.code;
      this.$emit("submitForm", this.form);
    },
  },
};
</script>

<style scoped>
.gap {
  gap: 35px;
}
</style>