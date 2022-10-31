<template>
  <div class="card bg-light mb-3">
    <div class="card-body">
      <label class="form-label d-block text-end"> نمایندگی:</label>
      <div class="d-flex row">
        <div class="col-md-4 mb-3 pb-3">
          <input
            class="form-control mb-4"
            type="text"
            v-model="form.name"
            placeholder=" نام و کد نمایندگی"
          />
          <label class="d-block text-end form-label"
            >تمایل به همکاری با الیتک :</label
          >
          <div class="d-flex justify-content-start gap">
            <div
              style="direction: ltr"
              v-for="(item, index) in yesOrNo"
              :key="index"
              class="form-check col-auto"
              @click="changeItem(item)"
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
        <div class="col-md-8 mb-3 pb-3">
          <input
            v-model="form.address"
            class="form-control mb-4"
            type="text"
            placeholder="آدرس"
          />
          <textarea
            placeholder="توضیحات"
            v-model="form.comment"
            class="form-control"
            id="visitorComment"
            rows="4"
          ></textarea>
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
export default {
  name: "Representation",
  props: ["data", "loading"],
  data() {
    return {
      form: this.data,
      yesOrNo: [
        { id: 1, value: false, label: "دارد" },
        { id: 0, value: false, label: "ندارد" },
      ],
    };
  },
  methods: {
    changeItem(item) {
      this.form.cooperateWiiling = item.id;
    },
    submitForm() {
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