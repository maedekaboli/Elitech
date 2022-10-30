<template>
  <div class="card bg-light mb-3">
    <div class="card-body">
      <label class="d-block text-end form-label"
        >مصرف کننده دارای خودروی چینی :</label
      >
      <div class="d-flex row">
        <div class="col-4 mb-3 pb-3">
          <v-select
            dir="rtl"
            class="bg-white"
            :options="provinces"
            placeholder="شهر محل سکونت"
          ></v-select>
        </div>
        <div class="col-4 mb-3 pb-3">
          <input class="form-control" type="text" placeholder="مدل خودرو" />
        </div>
        <div class="col-4 mb-3 pb-3">
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
      <div class="d-flex justify-content-between">
        <div
          dir="ltr"
          v-for="(item, index) in spareSupplyApproach"
          :key="index"
          class="form-check col-auto"
          @click="choose(item.value, item.checked)"
        >
          <label
            class="form-check-label"
            :for="`spareSupplyApproach${item.value}`"
          >
            {{ item.label }}
            {{item.checked}}
          </label>
          <input
            class="form-check-input"
            type="checkbox"
            :value="item.value"
            :checked="item.checked"
            :id="`spareSupplyApproach${item.value}`"
          />
        </div>
      </div>
    </div>
  </div>
  <button type="button" class="btn btn-primary w-50" @click="submitForm">
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
  props: ["provinces"],
  data() {
    return {
      form: {
        city: null,
        carModel: null,
        kilometers: null,
        spareSupplyApproach: [],
      },
      spareSupplyApproach: [
        { value: 1, label: "اینترنتی", checked: true },
        { value: 2, label: "حضوری", checked: false },
        { value: 3, label: "شرکتی", checked: false },
        { value: 4, label: "مکانیکی", checked: false },
      ],
    };
  },
  methods: {
    choose(val, checked) {
      console.log(val, checked);
      
        this.spareSupplyApproach.forEach((item) => {
          if (val == item.value) {
          console.log(item)
          item.checked = !item.checked ;
          console.log(item)
          }
        });
      //   console.log(val,checked)
      // if(!this.form.spareSupplyApproach.includes(val) && true)

      // this.form.spareSupplyApproach.push(val)
    },
    submitForm() {
      this.$emit("submitForm", this.form);
    },
  },
};
</script>