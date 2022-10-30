<template>
  <div class="card bg-light mb-3">
    <div class="card-body">
      <label class="form-label d-block text-end">
        تامین کننده / تولید کننده :</label
      >
      <div class="d-flex row">
        <div class="col-4 mb-3 pb-3">
          <input class="form-control" type="text" placeholder="نام سازمان" />
        </div>
        <div class="col-4 mb-3 pb-3">
          <input
            class="form-control"
            type="text"
            placeholder="شماره تماس سازمان"
          />
        </div>
        <div class="col-4 mb-3 pb-3">
          <v-select
            dir="rtl"
            class="bg-white"
            :options="provinces"
            placeholder="استان"
          ></v-select>
        </div>
        <div class="col-4 mb-3 pb-3">
          <v-select
            dir="rtl"
            class="bg-white"
            :options="cities"
            placeholder="شهر"
          ></v-select>
        </div>
        <div class="col-12">
          <div class="mb-3">
            <label for="visitorComment" class="form-label d-block text-end">
              نحوه خدمات:</label
            >
            <textarea
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
  <button type="button" class="btn btn-primary w-50">ثبت و ادامه</button>
</template>




<script>
import vSelect from "vue-select";

export default {
  name: "Supplier",
  components: {
    vSelect,
  },
  props: ["provinces", "cities"],
  data() {
    return {
      sparePartType: [
        { value: 1, label: "چینی" },
        { value: 2, label: "ایرانی" },
        { value: 3, label: "سایر" },
      ],
      yesOrNo: [
        { id: 1, value: false, label: "دارد" },
        { id: 0, value: false, label: "ندارد" },
      ],
    };
  },
};
</script>