<template>
  <div class="container my-5">
    <div class="card bg-light mb-3">
      <div class="card-body">
        <div class="d-flex row">
          <div class="col-4 mb-3 pb-3">
            <v-select
              dir="rtl"
              v-model="selectedAuthor"
              class="bg-white"
              :options="authors"
              placeholder="نام کارشناس"
            ></v-select>
          </div>
          <div class="col-4 mb-3 pb-3">
            <input
              class="form-control"
              type="text"
              v-model="form.name"
              placeholder="نام بازدید کننده"
            />
          </div>
          <div class="col-4 mb-3 pb-3">
            <input
              v-model="form.mobile"
              class="form-control"
              type="text"
              placeholder="شماره تماس"
            />
          </div>
        </div>
        <label class="form-label d-block text-end"> نوع بازدید کننده :</label>
        <div class="d-flex justify-content-between">
          <ul class="nav nav-tabs border-0" id="myTab" role="tablist">
            <li
              v-for="(item, index) in visitorTypes"
              :key="index"
              class="nav-item"
              role="presentation"
            >
              <button :class="['nav-link border-0']" type="button" role="tab">
                <div
                  dir="ltr"
                  @click="changeActivetab(item)"
                  class="form-check col-auto"
                >
                  <label
                    class="form-check-label"
                    :for="`visitorType${item.id}`"
                  >
                    {{ item.label }}
                  </label>
                  <input
                    name="visitorType"
                    class="form-check-input"
                    type="radio"
                    :checked="item.id == active.id ? true : false"
                    :id="`visitorType${item.id}`"
                  />
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active">
        <RegularVisitor
          v-if="active.id == 1"
          :comment="form.data.comment"
          @submitForm="submitForm"
        ></RegularVisitor>

        <Consumer
          v-if="active.id == 2"
          :provinces="provinces"
          @submitForm="submitForm"
        ></Consumer>

        <SparePartStore
          v-if="active.id == 3"
          :provinces="provinces"
          :cities="cities"
          @submitForm="submitForm"
        ></SparePartStore>

        <RepairShop
          v-if="active.id == 4"
          :provinces="provinces"
          :cities="cities"
          @submitForm="submitForm"
        ></RepairShop>

        <Supplier
          v-if="active.id == 5"
          :provinces="provinces"
          :cities="cities"
          :data="form.data"
          @submitForm="submitForm"
        ></Supplier>

        <Representation
          v-if="active.id == 6"
          :data="form.data"
          @submitForm="submitForm"
        ></Representation>
      </div>
    </div>
  </div>
</template>


<script>
import vSelect from "vue-select";
import RegularVisitor from "./forms/RegularVisitor.vue";
import Consumer from "./forms/Consumer.vue";
import SparePartStore from "./forms/SparePartStore.vue";
import RepairShop from "./forms/RepairShop.vue";
import Supplier from "./forms/Supplier.vue";
import Representation from "./forms/Representation.vue";
import api from "../api";

export default {
  name: "FormContainer",
  components: {
    vSelect,
    RegularVisitor,
    RepairShop,
    Consumer,
    Supplier,
    SparePartStore,
    Representation,
  },
  data() {
    return {
      selectedAuthor: null,
      active: { id: 1, value: "normal", label: "عادی" },
      authors: [],
      provinces: [],
      cities: [],
      visitorTypes: [
        { id: 1, value: "normal", label: "عادی" },
        { id: 2, value: "consumer", label: "مصرف کننده" },
        { id: 3, value: "shop", label: "فروشگاه لوازم یدکی" },
        { id: 4, value: "repair", label: "تعمیر گاه" },
        { id: 5, value: "supplier", label: "تولید کننده / تامین کننده " },
        { id: 6, value: "representation", label: "نمایندگی" },
      ],
      form: {
        name: null,
        mobile: null,
        form: "crm",
        type: "normal",
        author: null,
        data: {
          comment: null,
          city: null,
          provience: null,
          carModel: null,
          kilometers: null,
          supplyApproach: null,
          name: null,
          phone: null,
          sparePart: null,
          cocperateHistory: null,
          cooperateWiiling: null,
          orderWilling: null,
          partType: null,
          address: null,
        },
      },
    };
  },
  methods: {
    submitForm(info) {
      let data = { ...this.form.data, ...info };
      this.form.data = data;
      this.form.author = this.selectedAuthor.label;
      this.form.type = this.active.value;
      console.log("form", this.form);
      api.post("form", this.form).then((res) => console.log("res", res));
    },
    changeActivetab(item) {
      this.form.data = {
        comment: null,
        city: null,
        provience: null,
        carModel: null,
        kilometers: null,
        supplyApproach: null,
        name: null,
        phone: null,
        sparePart: null,
        cocperateHistory: null,
        cooperateWiiling: null,
        orderWilling: null,
        partType: null,
        address: null,
      };
      console.log(this.form)
      this.active = item;
    },
  },
  mounted() {
    api.get("general").then((res) => {
      res?.data?.data?.provinces.forEach((item) =>
        this.provinces.push({ label: item.name, code: item.id })
      );
      res?.data?.data?.cities.forEach((item) =>
        this.cities.push({ label: item.name, code: item.id })
      );
      res?.data?.data?.authors.forEach((item) =>
        this.authors.push({ label: item.name, code: item.id })
      );
    });
  },
};
</script>