<template>
  <div class="card bg-light mb-3">
    <div class="card-body">
      <label class="form-label d-block text-end"> فروشگاه لوازم یدکی :</label>
      <div class="d-flex row">
        <div class="col-md-4 mb-3 pb-3">
          <input
            v-model="form.name"
            class="form-control"
            type="text"
            placeholder="نام فروشگاه"
          />
        </div>
        <div class="col-md-4 mb-3 pb-3">
          <input
            v-model="form.phone"
            class="form-control"
            type="text"
            placeholder="شماره تماس "
          />
        </div>
        <div class="col-md-4 mb-3 pb-3">
          <v-select
            dir="rtl"
            class="bg-white"
            :options="provinces"
            placeholder="استان"
            v-model="provincesValue"
          ></v-select>
        </div>
        <div class="col-md-4 mb-3 pb-3">
          <v-select
            dir="rtl"
            class="bg-white"
            v-model="cityValue"
            :options="cities"
            placeholder="شهر"
          ></v-select>
        </div>
        <div class="col-md-4 mb-3 pb-3">
          <label class="d-block text-end form-label">نوع لوازم یدکی :</label>
          <div class="d-flex justify-content-between">
            <div
              style="direction: ltr"
              v-for="(item, index) in sparePartType"
              :key="index"
              class="form-check col-auto"
            >
              <label
                class="form-check-label"
                :for="`sparePartType${item.value}`"
              >
                {{ item.label }}
              </label>
              <input
                class="form-check-input"
                type="checkbox"
                :value="item"
                v-model="checkedProducts"
                :id="`sparePartType${item.value}`"
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
                :for="`elitechCooperate${item.id}`"
              >
                {{ item.label }}
              </label>
              <input
                name="elitechCooperate"
                class="form-check-input"
                type="radio"
                :checked="item.value"
                :id="`elitechCooperate${item.id}`"
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
              <label class="form-check-label" :for="`elitechWilling${item.id}`">
                {{ item.label }}
              </label>
              <input
                name="elitechWilling"
                class="form-check-input"
                type="radio"
                :checked="item.value"
                :id="`elitechWilling${item.id}`"
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
              <label class="form-check-label" :for="`orderhWilling${item.id}`">
                {{ item.label }}
              </label>
              <input
                name="orderhWilling"
                class="form-check-input"
                type="radio"
                :checked="item.value"
                :id="`orderhWilling${item.id}`"
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
  name: "SparePartStore",
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
        { value: 1, label: "چینی" },
        { value: 2, label: "ایرانی" },
        { value: 3, label: "سایر" },
      ],
      checkedProducts: [],
      yesOrNo: [
        { id: 1, value: false, label: "دارد" },
        { id: 0, value: false, label: "ندارد" },
      ],
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