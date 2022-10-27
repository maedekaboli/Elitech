<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    Launch demo modal
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="text-start">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <img src="../assets/images/chad.png" alt="" class="" />
          <div class="d-flex justify-content-between">
            <div class=""></div>
            <div class="">
                <img src="../assets/images/medal.svg" alt="" class="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.modal-body img{
    width: -webkit-fill-available;
    height: auto;
  border-radius: 16px;
}
.modal {
  background: rgba(35, 31, 32, 0.48);
}
.modal-content {
  background-color: unset !important;
  border: none;
}
</style>