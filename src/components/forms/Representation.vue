<template>
  <div class="card bg-light mb-3">
    <div class="card-body">
      <label class="form-label d-block text-end"> نمایندگی:</label>
      <div class="d-flex row">
        <div class="col-4 mb-3 pb-3">
          <input
            class="form-control"
            type="text"
            placeholder=" نام و کد نمایندگی"
          />
        </div>
        <div class="col-8 mb-3 pb-3">
          <input class="form-control mb-5" type="text" placeholder="آدرس" />
          <textarea
            placeholder="توضیحات"
            class="form-control"
            id="visitorComment"
            rows="4"
          ></textarea>
        </div>
        <div class="col-4 mb-3 pb-3">
          <label class="d-block text-end form-label"
            >تمایل به همکاری با الیتک :</label
          >
          <div class="d-flex justify-content-start">
            <div
              style="direction: ltr"
              v-for="(item, index) in yesOrNo"
              :key="index"
              class="form-check col-auto"
            >
              <label class="form-check-label" :for="`repre${item.id}`">
                {{ item.label }}
              </label>
              <input
                name="repre"
                class="form-check-input"
                type="radio"
                :checked="item.value"
                :id="`repre${item.id}`"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <button type="button" class="btn btn-primary w-50">ثبت و ادامه</button>
</template>


<script>
export default {
  name: "Representation",

  data() {
    return {
      yesOrNo: [
        { id: 1, value: false, label: "دارد" },
        { id: 0, value: false, label: "ندارد" },
      ],
    };
  },
};
</script>