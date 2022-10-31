<template>
  <div class="card bg-light mb-3">
    <div class="card-body">
      <label class="form-label d-block text-end">
        تامین کننده / تولید کننده :</label
      >
      <div class="d-flex row">
        <div class="col-md-4 mb-3 pb-3">
          <input
            v-model="form.name"
            class="form-control"
            type="text"
            placeholder="نام سازمان"
          />
        </div>
        <div class="col-md-4 mb-3 pb-3">
          <input
            class="form-control"
            type="text"
            v-model="form.phone"
            placeholder="شماره تماس سازمان"
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
        <div class="col-12">
          <div class="mb-3">
            <label for="visitorComment" class="form-label d-block text-end">
              نحوه خدمات:</label
            >
            <textarea
              v-model="form.comment"
              placeholder="توضیحات"
              class="form-control"
              id="visitorComment"
              rows="4"
            ></textarea>
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
  name: "Supplier",
  components: {
    vSelect,
  },
  props: ["provinces", "cities", "data", "loading"],
  data() {
    return {
      provincesValue: { code: 8, label: "تهران" },
      cityValue: null,
      form: this.data,
    };
  },
  methods: {
    submitForm() {
      this.form.provinces = this.provincesValue?.code;
      this.form.city = this.cityValue?.code;
      this.$emit("submitForm", this.form);
    },
  },
};
</script>