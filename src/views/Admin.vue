<template>
    <div class="admin">
 <div>
      <PageTitle :msg="msg"/>
    </div>
    </div>
</template>

<script>
import PageTitle from "@/components/PageTitle";
export default {
  name: "Admin",
  components: {
      PageTitle
  },
  data() {
      return {
           msg: "Admin Page",
      }
  }
}
</script>

<style>

</style>
