<template>
  
</template>

<script>
export default {
  name: "KYCPage1",
};
</script>

<style scoped>
/* pre-body */
.kyc__header {
  position: relative;
}

.kyc__header-photo {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  border: 1px solid black;
  padding: 1rem;
  width: 2.2cm;
  height: 2.3cm;
  align-items: center;
  justify-content: center;
}

.kyc__callout {
  border: 1px solid black;
  padding-block: 0.02cm;
  vertical-align: center;
}

.kyc__grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  column-gap: 0.1cm;
  margin-top: 5px;
}

.kyc__grid .kyc__p {
  font-size: 0.75rem !important;
  line-height: 0.9rem;

}

.kyc__p.sub {
  font-size: 1rem !important;
  margin-top: 4px;
}

.kyc__cell {
  display: flex;
  /* grid-template-columns: auto 60%; */
}

.kyc__field {
  border: 1px solid black;
  margin-left: 5px;
  width: 100%;
  flex-grow: 1;
  flex-basis: 0;
}

.name .kyc__ir {
  grid-template-columns: 1.25fr 3.75fr;
}

.name .kyc__ic.label {
  border-right: 1px solid black;
}

.dob .kyc__ir {
  grid-template-columns: 1.8fr 4.1fr 4.1fr;
}

.dob .kyc__ic.value {
  display: flex;
  align-items: center;
}

.gender .kyc__ir {
  grid-template-columns: 1.8fr 8.2fr;
}

.gender .kyc__ic.value {
  display: grid;
  grid-template-columns: 1fr 2fr;
}

.nationality .kyc__ir {
  grid-template-columns: 1.8fr 8.2fr;
}

.nationality .kyc__ic.value {
  display: grid;
  grid-template-columns: 1fr 2fr;
}

.citizenship .kyc__ir {
  grid-template-columns: 1.75fr 2fr 1.75fr 2fr 1.5fr 2fr;
}

.beneficiary .kyc__ir {
  grid-template-columns: 3fr 7fr;
}

.beneficiary .value {
  display: grid;
  grid-template-columns: repeat(17, 1fr);
}

.pan .kyc__ir {
  grid-template-columns: 3fr 7fr;
}

.pan .value {
  display: grid;
  grid-template-columns: repeat(17, 1fr);
}

.nrn .kyc__ir {
  grid-template-columns: 3fr 7fr;
}

.country-province .kyc__ir {
  grid-template-columns: 1fr 4fr 1fr 4fr;
}

.district .kyc__ir {
  grid-template-columns: 1fr 9fr;
}

.city-ward .kyc__ir {
  grid-template-columns: 4fr 3fr 1fr 2fr;
}

.tole-tele .kyc__ir {
  grid-template-columns: 1fr 5fr 2fr 2fr;
}

.email-mobile .kyc__ir {
  grid-template-columns: 1fr 5fr 2fr 2fr;
}

.province-district .kyc__ir {
  grid-template-columns: 1fr 4fr 1fr 4fr;
}

.city-tole .kyc__ir {
  grid-template-columns: 4fr 3fr 1fr 2fr;
}

.telephone-ward-block .kyc__ir {
  grid-template-columns: 1.5fr 3fr 1.5fr 1fr 1.5fr 1fr;

}

/* Globals */

.kyc__container {
  padding: 1rem;
}

.val__c {
  display: flex;
  align-items: center;
}

.checkbox {
  display: block;
  width: 1.25rem;
  height: 1.25rem;
  border: 1px solid black;
  margin-left: 10px;
}

.kyc__block-val {
  border-right: 1px solid black;
  padding: 2px;
  height: 100%;
  min-width: 1.25rem;
  text-align: center;
  text-transform: uppercase;
  font-size: 0.8rem;
}

.kyc__p {
  font-size: 0.8rem !important;
  line-height: 1rem;
  text-align: left;
}

@media print {
  .kyc__block-val {
    border-right: 1px solid black;
    padding: 2px;
    height: 100%;
    min-width: 1.1rem;
    text-align: center;
    text-transform: uppercase;
    font-size: 0.8rem;
  }
}

.bb {
  border-bottom: 1px solid black;
}

.br {
  border-right: 1px solid black;
}

.np {
  padding: 0 !important;
  display: flex;
}

.kyc__ic {
  padding: 3px 4px;
}

.kyc__ig {
  border: 1px solid;
}

.kyc__ir {
  display: grid;
}

.kyc__ig+.kyc__ig {
  margin-top: -1px;
}

.kyc__empty {
  display: inline-block;
  min-width: 4rem;
  border-bottom: black 1px dotted;
}

.kyc__empty.medium {
  width: 10rem;
}

.kyc__empty.large {
  width: 30rem;
}

p {
  margin-bottom: 0px !important;
}

@media print {
  .page {
    page-break-before: always;
  }
}
</style>
