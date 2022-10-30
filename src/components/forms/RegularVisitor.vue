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
  <button type="button" class="btn btn-primary w-50" @click="submitForm">
    ثبت و ادامه
  </button>
</template>


<script>
export default {
  name: "RegularVisitor",
  data() {
    return {
      form: {
        comment: "",
      },
    };
  },
  methods: {
    submitForm() {
      this.$emit("submitForm",this.form);
    },
  },
};
</script>