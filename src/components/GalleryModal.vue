<template>
  <div
    v-if="modalShow1"
    :class="['modal fade show',modalShow1 ? 'd-block' : ``]"
    :id="`modal-${modalIndex1}`"
    tabindex="-1"
    role="dialog"
    aria-modal="true"
    aria-labelledby="exampleModalLabel"
    aria-hidden="false"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="text-start">
          <button
            @click="closeModal()"
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <img :src="modalItem1.url" alt="" class="" />
          <div class="d-flex align-items-end mt-2">
            <img
              src="../assets/images/medal.svg"
              class="mr-3 icon"
              alt="medal"
            />
            <div class="title">{{ modalItem1.title }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: ["modalShow", "modalIndex", "modalItem"],
  data() {
    return {
      modalShow1: false,
      showModalClass: "",
      modalItem1: { url: null, title: null },
      modalIndex1: null,
    };
  },
  updated() {
    (this.showModalClass = "d-block"), (this.modalShow1 = this.modalShow);
    this.modalItem1 = this.modalItem;
    this.modalIndex1 = this.modalIndex;
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
});
</script>

<style scoped>
.modal-body img {
  width: -webkit-fill-available;
  height: auto;
  border-radius: 16px;
}
.modal-body .title {
  font-weight: 500;
  font-size: 24px;
  line-height: 37px;
  text-align: right;
  color: #000000;
}
.modal-body .icon {
  width: 48px;
  height: 48px;
}
.modal {
  background: #231f207a;
}
.btn-close {
  margin-bottom: 27px;
  border: 1.5px solid #000;
  border-radius: 7px;
  background-size: 11px;
  height: 30px;
  width: 30px;
}
.modal-content {
  background-color: unset !important;
  border: none;
}
</style>