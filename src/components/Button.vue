<template>
  <button type="button" class="btn btn-success">{{btn}}</button>
</template>

<script>
export default {
  name: "Button",
  props: ["btn"],
  data() {
    return {
      // btn: ""
    };
  }
};
</script>

<style>
.btn-success,
.btn-success:hover {
  background-color: #2ecc71 !important;
  border-color: #2ecc71 !important;
  border-radius: #2ecc71 !important;
}
.btn-success {
  border-radius: 0 !important;
}
.btn-success:not(:disabled):not(.disabled):active,
.btn-success:not(:disabled):not(.disabled).active,
.show > .btn-success.dropdown-toggle {
  background-color: #2ecc71;
  border-color: #2ecc71;
  border-radius: #2ecc71;
}
</style>