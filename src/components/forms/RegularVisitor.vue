<template>
  <div class="card bg-light mb-3">
    <div class="card-body">
      <div class="mb-3">
        <label for="visitorComment" class="form-label d-block text-end">
          بازدید کننده عادی :</label
        >
        <textarea
          placeholder="توضیحات"
          class="form-control"
          id="visitorComment"
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
export default {
  name: "RegularVisitor",
  props: ["comment", "loading"],
  data() {
    return {
      form: {
        comment: this.comment,
      },
    };
  },
  methods: {
    submitForm() {
      this.$emit("submitForm", this.form);
    },
  },
};
</script>