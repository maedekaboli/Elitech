<template>
  <div class="card bg-light mb-3">
    <div class="card-body">
      <label class="d-block text-end form-label"
        >مصرف کننده دارای خودروی چینی :</label
      >
      <div class="d-flex row">
        <div class="col-md-4 mb-3 pb-3">
          <v-select
            dir="rtl"
            class="bg-white"
            :options="cities"
            v-model="cityValue"
            placeholder="شهر محل سکونت"
          ></v-select>
        </div>
        <div class="col-md-4 mb-3 pb-3">
          <v-select
            dir="rtl"
            class="bg-white"
            v-model="selectedModel"
            :options="carModels"
            placeholder=" مدل خودرو "
          ></v-select>
        </div>
        <div class="col-md-4 mb-3 pb-3">
          <input
            class="form-control"
            type="text"
            v-model="form.kilometers"
            placeholder="کارکرد خودرو (کیلومتر)"
          />
        </div>
      </div>
           <label class="form-label d-block text-end">
        نحوه تامین لوازم یدکی :</label
      >
      <div class="d-flex justify-content-between col-md-7 flex-wrap mb-4">
        <div
          dir="ltr"
          v-for="(item, index) in spareSupplyApproach"
          :key="index"
          class="form-check col-auto"
        >
          <label
            class="form-check-label"
            :for="`spareSupplyApproach${item.value}`"
          >
            {{ item.label }}
          </label>
          <input
            class="form-check-input"
            type="checkbox"
            :value="item"
            v-model="checkedProducts"
            :id="`spareSupplyApproach${item.value}`"
          />
        </div>
      </div>
      <div class="col-12">
        <textarea
          placeholder="توضیحات"
          class="form-control"
          rows="7"
          v-model="form.comment"
        ></textarea>
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
  name: "Consumer",
  components: {
    vSelect,
  },
  props: ["cities", "carModels", "data", "loading"],
  data() {
    return {
      form: this.data,
      cityValue: null,
      selectedModel: null,
      checkedProducts: [],
      spareSupplyApproach: [
        { value: 1, label: "اینترنتی", checked: false },
        { value: 2, label: "حضوری", checked: false },
        { value: 3, label: "شرکتی", checked: false },
        { value: 4, label: "مکانیکی", checked: false },
      ],
    };
  },
  methods: {
    submitForm() {
      this.checkedProducts.forEach((i) =>
        this.form.supplyApproach.push(i.value)
      );
      this.form.city = this.cityValue?.code;
      this.form.carModel = this.selectedModel?.code;
      this.$emit("submitForm", this.form);
    },
  },
};
</script>