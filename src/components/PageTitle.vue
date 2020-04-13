<template>
  <section class="page-title">
    <b-container>
      <b-row>
        <b-col>
          <h2>{{ msg }}</h2>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: "PageTitle",
  props: ["msg"]
};
</script>

<style>
.page-title {
  background-color: #2ecc71;
  height: 100px;
}

.page-title h2 {
  padding-top: 30px;
  color: white;
  text-transform: uppercase;
}
</style>
