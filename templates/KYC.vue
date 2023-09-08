<template>
  <div class="kyc">
    <page-1 />
    <page-2 />
    <page-3 />
    <page-4 />
  </div>
</template>

<script>
import KYCPage1 from "./KYCPage1.vue";
import KYCPage2 from "./KYCPage2.vue";
import KYCPage3 from "./KYCPage3.vue"
import KYCPage4 from "./KYCPage4.vue"
export default {
  name: "KYCForm",
  components: {
    page1: KYCPage1,
    page2: KYCPage2,
    page3: KYCPage3,
    page4: KYCPage4
  },
  data: () => ({}),
};
</script>

<style scoped>

</style>
