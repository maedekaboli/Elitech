<template>
  <div class="container my-5">
    <div class="card bg-light mb-3">
      <div class="card-body">
        <div class="d-flex row">
          <div class="col-4 mb-3 pb-3">
            <input class="form-control" type="text" placeholder="نام کارشناس" />
          </div>
          <div class="col-4 mb-3 pb-3">
            <input
              class="form-control"
              type="text"
              placeholder="نام بازدید کننده"
            />
          </div>
          <div class="col-4 mb-3 pb-3">
            <input class="form-control" type="text" placeholder="شماره تماس" />
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
                  @click="changeActivetab(item.id)"
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
                    :checked="item.id == active ? true : false"
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
        <RegularVisitor v-if="active == 1" @submitForm="submitForm"></RegularVisitor>
        <Consumer v-if="active == 2" :provinces="provinces"  @submitForm="submitForm"></Consumer>
        <SparePartStore
          v-if="active == 3"
          :provinces="provinces"
          :cities="cities"
        ></SparePartStore>
        <RepairShop
          v-if="active == 4"
          :provinces="provinces"
          :cities="cities"
        ></RepairShop>
        <Supplier
          v-if="active == 5"
          :provinces="provinces"
          :cities="cities"
        ></Supplier>
        <Representation v-if="active == 6"></Representation>
      </div>
    </div>
  </div>
</template>


<script>
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
    RegularVisitor,
    RepairShop,
    Consumer,
    Supplier,
    SparePartStore,
    Representation,
  },
  data() {
    return {
      active: 1,
      provinces: [],
      cities: [],
      visitorTypes: [
        { id: 1, value: false, label: "عادی" },
        { id: 2, value: false, label: "مصرف کننده" },
        { id: 3, value: false, label: "فروشگاه لوازم یدکی" },
        { id: 4, value: false, label: "تعمیر گاه" },
        { id: 5, value: false, label: "تولید کننده / تامین کننده " },
        { id: 6, value: false, label: "نمایندگی" },
      ],
    };
  },
  methods: {
    submitForm(info){
      console.log('info',info)
    },
    changeActivetab(id) {
      this.active = id;
    },
  },
  created() {
    let a = { comment: "111" };
    let b = { comment: "2222", hi: "d" };
    let c = { ...b, ...a };
    console.log("b", c);
    api.get("provinces").then((res) => {
      res?.data?.data.forEach((item) =>
        this.provinces.push({ label: item.name, code: item.id })
      );
    });
    api.get("cities").then((res) => {
      res?.data?.data.forEach((item) =>
        this.cities.push({ label: item.name, code: item.id })
      );
    });
  },
};
</script>