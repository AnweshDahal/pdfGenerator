<template>
  <div class="page">
    <div class="kyc__container">
      <!-- Family Details -->
      <p class="kyc__p">
        <strong>परिवारका सदस्यहरुको विवरण (ठाउँ नपुग भएमा थप गर्न सकिने)</strong>
      </p>

      <p class="kyc__p"><strong>Details of Family Members</strong></p>
      <!-- Grandfather -->
      <div class="kyc__ig grandfather">
        <div class="kyc__ir nepali bb">
          <div class="kyc__ic label ">
            <p class="kyc__p">बजेको नाम:</p>
          </div>
          <div class="kyc__ic value">{{ 'जेन मिशेल बास्किएट' }}</div>
        </div>
        <div class="kyc__ir english">
          <div class="kyc__ic label br">
            <p class="kyc__p">Grand Father’s Name</p>
          </div>
          <div class="kyc__ic value np">
            <span class="kyc__block-val" v-for="ch in 28" :key="ch">{{ 'Jean-Michel Basquiat'[ch - 1]
            }}</span>
          </div>
        </div>
      </div>
      <!-- Father -->
      <div class="kyc__ig father">
        <div class="kyc__ir nepali bb">
          <div class="kyc__ic label ">
            <p class="kyc__p">बुबाको नाम:</p>
          </div>
          <div class="kyc__ic value">{{ 'जेन मिशेल बास्किएट' }}</div>
        </div>
        <div class="kyc__ir english">
          <div class="kyc__ic label br">
            <p class="kyc__p">Father’s Name <span class="muted">(in Block Letters):</span></p>
          </div>
          <div class="kyc__ic value np">
            <span class="kyc__block-val" v-for="ch in 28" :key="ch">{{ 'Jean-Michel Basquiat'[ch - 1]
            }}</span>
          </div>
        </div>
      </div>
      <!-- Mother -->
      <div class="kyc__ig mother">
        <div class="kyc__ir nepali bb">
          <div class="kyc__ic label ">
            <p class="kyc__p">आमाको नाम:</p>
          </div>
          <div class="kyc__ic value">{{ 'जेन मिशेल बास्किएट' }}</div>
        </div>
        <div class="kyc__ir english">
          <div class="kyc__ic label br">
            <p class="kyc__p">Mother’s Name <span class="muted">(in Block Letters):</span></p>
          </div>
          <div class="kyc__ic value np">
            <span class="kyc__block-val" v-for="ch in 28" :key="ch">{{ 'Jean-Michel Basquiat'[ch - 1]
            }}</span>
          </div>
        </div>
      </div>
      <!-- Spouse -->
      <div class="kyc__ig spouse">
        <div class="kyc__ir nepali bb">
          <div class="kyc__ic label ">
            <p class="kyc__p">पति पत्नीको नाम:</p>
          </div>
          <div class="kyc__ic value">{{ 'जेन मिशेल बास्किएट' }}</div>
        </div>
        <div class="kyc__ir english">
          <div class="kyc__ic label br">
            <p class="kyc__p">Spouse’s Name <span class="muted">(in Block Letters):</span></p>
          </div>
          <div class="kyc__ic value np">
            <span class="kyc__block-val" v-for="ch in 28" :key="ch">{{ 'Jean-Michel Basquiat'[ch - 1]
            }}</span>
          </div>
        </div>
      </div>
      <!-- Son -->
      <div class="kyc__ig son">
        <div class="kyc__ir nepali bb">
          <div class="kyc__ic label ">
            <p class="kyc__p">छोराको नाम:</p>
          </div>
          <div class="kyc__ic value">{{ 'जेन मिशेल बास्किएट' }}</div>
        </div>
        <div class="kyc__ir english">
          <div class="kyc__ic label br">
            <p class="kyc__p">Son’s Name <span class="muted">(in Block Letters):</span></p>
          </div>
          <div class="kyc__ic value np r2">
            <span class="kyc__block-val" v-for="ch in 56" :key="ch">{{ 'Jean-Michel Basquiat'[ch - 1]
            }}</span>
          </div>
        </div>
      </div>
      <!-- Daughter -->
      <div class="kyc__ig daughter">
        <div class="kyc__ir nepali bb">
          <div class="kyc__ic label ">
            <p class="kyc__p">छोरीको नाम (अविवाहित):</p>
          </div>
          <div class="kyc__ic value">{{ 'जेन मिशेल बास्किएट' }}</div>
        </div>
        <div class="kyc__ir english">
          <div class="kyc__ic label br">
            <p class="kyc__p">Daughter’s Name <span class="muted">(in Block Letters):</span></p>
          </div>
          <div class="kyc__ic value np r2">
            <span class="kyc__block-val" v-for="ch in 56" :key="ch">{{ 'Jean-Michel Basquiat'[ch - 1]
            }}</span>
          </div>
        </div>
      </div>
      <!-- Daughter In Law -->
      <div class="kyc__ig daughter-in-law">
        <div class="kyc__ir nepali bb">
          <div class="kyc__ic label ">
            <p class="kyc__p">बुहारीको नाम:</p>
          </div>
          <div class="kyc__ic value">{{ 'जेन मिशेल बास्किएट' }}</div>
        </div>
        <div class="kyc__ir english">
          <div class="kyc__ic label br">
            <p class="kyc__p">Daughter-in-Law’s Name <span class="muted">(in Block Letters):</span></p>
          </div>
          <div class="kyc__ic value np r2">
            <span class="kyc__block-val" v-for="ch in 56" :key="ch">{{ 'Jean-Michel Basquiat'[ch - 1]
            }}</span>
          </div>
        </div>
      </div>
      <!-- Father In Law -->
      <div class="kyc__ig father-in-law">
        <div class="kyc__ir nepali bb">
          <div class="kyc__ic label ">
            <p class="kyc__p">ससुराको नाम (विवाहित महिलाको हकमा)</p>
          </div>
          <div class="kyc__ic value">{{ 'जेन मिशेल बास्किएट' }}</div>
        </div>
        <div class="kyc__ir english">
          <div class="kyc__ic label br">
            <p class="kyc__p">
              Father-in-Law’s Name :
            </p>
          </div>
          <div class="kyc__ic value np">
            <span class="kyc__block-val" v-for="ch in 28" :key="ch">{{ 'Jean-Michel Basquiat'[ch - 1]
            }}</span>
          </div>
        </div>
      </div>
      <!-- Mother in Law -->
      <div class="kyc__ig mother-in-law">
        <div class="kyc__ir nepali bb">
          <div class="kyc__ic label ">
            <p class="kyc__p">सासुको नाम (विवाहित महिलाको हकमा)</p>
          </div>
          <div class="kyc__ic value">{{ 'जेन मिशेल बास्किएट' }}</div>
        </div>
        <div class="kyc__ir english">
          <div class="kyc__ic label br">
            <p class="kyc__p">
              Mother-in-Law’s Name:
            </p>
          </div>
          <div class="kyc__ic value np">
            <span class="kyc__block-val" v-for="ch in 28" :key="ch">{{ 'Jean-Michel Basquiat'[ch - 1]
            }}</span>
          </div>
        </div>
      </div>
      <!-- Bank Account Details -->
      <p class="kyc__p mt-4"><strong>बैंक खाताको विवरण:</strong></p>
      <p class="kyc__p"><strong>Bank Account Details:</strong></p>
      <!-- Bank Account Type  -->
      <div class="kyc__ig bank-type">
        <div class="kyc__ir">
          <div class="kyc__ic label br">
            <p class="kyc__p">बैंक खाताको किसिम:</p>
            <p class="kyc__p">Type of Bank Account:</p>
          </div>
          <div class="kyc__ic value">
            <div class="val__c">
              <div class="label">
                <p class="kyc__p">बचत खाता:</p>

                <p class="kyc__p">Saving Account:</p>
              </div>
              <div class="checkbox">{{ '✓' }}</div>
            </div>
            <div class="val__c">
              <div class="label">
                <p class="kyc__p">चल्ती खाता:</p>

                <p class="kyc__p">Current Account:</p>
              </div>
              <div class="checkbox"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- Bank Account Number -->
      <div class="kyc__ig bank-number">
        <div class="kyc__ir">
          <div class="kyc__ic label br">
            <p class="kyc__p">बैंक खाता नम्बर:</p>
            <p class="kyc__p">Bank Account Number:</p>
          </div>
          <div class="kyc__ic value">{{ '1112223334P' }}</div>
        </div>
      </div>
      <!-- Bank Name -->
      <div class="kyc__ig bank-name">
        <div class="kyc__ir">
          <div class="kyc__ic label br">
            <p class="kyc__p">बैंक खाता भएको बैंकको नाम र ठेगाना:</p>
            <p class="kyc__p">Name & Address of Bank:</p>
          </div>
          <div class="kyc__ic value">{{ 'Standard Chartered Bank Nepal Limited' }}</div>
        </div>
      </div>
      <!-- Occupation Details -->
      <p class="kyc__p mt-4"><strong>पेसागत विवरण</strong></p>
      <p class="kyc__p"><strong>Details of Occupation</strong></p>
      <!-- Occupation -->
      <div class="kyc__ig occupation">
        <div class="kyc__ir">
          <div class="kyc__ic label br">
            <p class="kyc__p">पेशा:</p>
            <p class="kyc__p">Occupation:</p>
          </div>
          <div class="kyc__ic value">
            <div class="val__c">
              <div class="label">
                <p class="kyc__p">सेवा:</p>

                <p class="kyc__p">Service:</p>
              </div>
              <div class="checkbox"></div>
            </div>
            <div class="val__c">
              <div class="label">
                <p class="kyc__p">सरकारी:</p>

                <p class="kyc__p">Govt.:</p>
              </div>
              <div class="checkbox"></div>
            </div>
            <div class="val__c">
              <div class="label">
                <p class="kyc__p">सामाजिक/ निजि क्षेत्र :</p>

                <p class="kyc__p">Public/Private Sector:</p>
              </div>
              <div class="checkbox"></div>
            </div>
            <div class="val__c">
              <div class="label">
                <p class="kyc__p">एन.जी.ओ./आई.न.जी.ओ:</p>

                <p class="kyc__p">NGO/INGO:</p>
              </div>
              <div class="checkbox"></div>
            </div>
            <div class="val__c">
              <div class="label">
                <p class="kyc__p">विशेषज्ञ:</p>

                <p class="kyc__p">Expert:</p>
              </div>
              <div class="checkbox"></div>
            </div>
            <div class="val__c">
              <div class="label">
                <p class="kyc__p">व्यापारी:</p>

                <p class="kyc__p">Businessperson:</p>
              </div>
              <div class="checkbox"></div>
            </div>
            <div class="val__c">
              <div class="label">
                <p class="kyc__p">कृषि:</p>

                <p class="kyc__p">Agriculture:</p>
              </div>
              <div class="checkbox"></div>
            </div>
            <div class="val__c">
              <div class="label">
                <p class="kyc__p">सेवा निवृत्त:</p>

                <p class="kyc__p">Retired:</p>
              </div>
              <div class="checkbox"></div>
            </div>
            <div class="val__c">
              <div class="label">
                <p class="kyc__p">गृहिणी:</p>

                <p class="kyc__p">House Wife:</p>
              </div>
              <div class="checkbox"></div>
            </div>
            <div class="val__c">
              <div class="label">
                <p class="kyc__p">विद्यार्थी:</p>

                <p class="kyc__p">Student:</p>
              </div>
              <div class="checkbox"></div>
            </div>
            <div class="val__c">
              <div class="label">
                <p class="kyc__p">अन्य:</p>

                <p class="kyc__p">Others:</p>
              </div>
              <div class="checkbox">{{ '✓' }}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- Business Type -->
      <div class="kyc__ig business-type">
        <div class="kyc__ir">
          <div class="kyc__ic label br">
            <p class="kyc__p">व्यापारको प्रकार:</p>
            <p class="kyc__p">Types of Business:</p>
          </div>
          <div class="kyc__ic value">
            <div class="val__c">
              <div class="label">
                <p class="kyc__p">उत्पादन:</p>

                <p class="kyc__p">Manufacturing:</p>
              </div>
              <div class="checkbox"></div>
            </div>
            <div class="val__c">
              <div class="label">
                <p class="kyc__p">सेवामुखी:</p>

                <p class="kyc__p">Service Oriented:</p>
              </div>
              <div class="checkbox">{{ '✓' }}</div>
            </div>
            <div class="val__c">
              <div class="label">
                <p class="kyc__p">अन्य:</p>

                <p class="kyc__p">Others:</p>
              </div>
              <div class="checkbox"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- Organization Name + Address -->
      <div class="kyc__ig org-address">
        <div class="kyc__ir">
          <div class="kyc__ic label br">
            <p class="kyc__p">संस्थाको नाम:</p>

            <p class="kyc__p">Organization’s Name:</p>
          </div>
          <div class="kyc__ic value br">{{ 'Acme Co.' }}</div>
          <div class="kyc__ic label br">
            <p class="kyc__p">ठेगाना:</p>

            <p class="kyc__p">Address:</p>
          </div>
          <div class="kyc__ic value">{{ 'Kupondole, Lalitpur, Nepal' }}</div>
        </div>
      </div>
      <!-- Designation + ID Number -->
      <div class="kyc__ig designation-id">
        <div class="kyc__ir">
          <div class="kyc__ic label br">
            <p class="kyc__p">पद:</p>

            <p class="kyc__p">Designation:</p>
          </div>
          <div class="kyc__ic value br">{{ 'Developer' }}</div>
          <div class="kyc__ic label br">
            <p class="kyc__p">कर्मचारीको हकमा कर्मचारी परिचयपत्र नं.:</p>

            <p class="kyc__p">(ID No. of Employee):</p>
          </div>
          <div class="kyc__ic value">{{ '19039735' }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KYCPage2",
};
</script>

<style scoped>
.grandfather .kyc__ir {
  grid-template-columns: 2.5fr 7.5fr;
}

.father .kyc__ir {
  grid-template-columns: 2.5fr 7.5fr;
}

.mother .kyc__ir {
  grid-template-columns: 2.5fr 7.5fr;
}

.spouse .kyc__ir {
  grid-template-columns: 2.5fr 7.5fr;
}

.son .kyc__ir {
  grid-template-columns: 2.5fr 7.5fr;
}

.daughter .kyc__ir {
  grid-template-columns: 2.5fr 7.5fr;
}

.daughter-in-law .kyc__ir {
  grid-template-columns: 2.5fr 7.5fr;
}

.father-in-law .kyc__ir {
  grid-template-columns: 2.5fr 7.5fr;
}

.father-in-law .nepali {
  grid-template-columns: 3fr 7fr;
}

.mother-in-law .kyc__ir {
  grid-template-columns: 2.5fr 7.5fr;
}

.mother-in-law .nepali {
  grid-template-columns: 3fr 7fr;
}

.bank-number .kyc__ir {
  grid-template-columns: 3fr 7fr;
}

.bank-name .kyc__ir {
  grid-template-columns: 3fr 7fr;
}

.bank-type .value {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.bank-type .kyc__ir {
  grid-template-columns: 3fr 7fr;
}

.occupation .kyc__ir {
  grid-template-columns: 1fr 8fr;
}

.occupation .value {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 6px;
}

.occupation .value .val__c {
  display: grid !important;
  grid-template-columns: 4fr 1fr;
}

.occupation .value .val__c:nth-child(3) {
  grid-column: span 2;
}

.occupation .value .val__c:nth-child(4) {
  grid-column: span 2;
}

.occupation .value .val__c .label .kyc__p {
  font-size: 0.6rem !important;
}

.business-type .kyc__ir {
  grid-template-columns: 2fr 8fr;
}

.business-type .value {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.org-address .kyc__ir {
  grid-template-columns: 2.5fr 3fr 1fr 3.5fr;
}

.designation-id .kyc__ir {
  grid-template-columns: 2fr 2fr 3fr 3fr;
}

@media print {
  .grandfather .kyc__ir {
    grid-template-columns: 2.75fr 7.25fr;
  }

  .father .kyc__ir {
    grid-template-columns: 2.75fr 7.25fr;
  }

  .mother .kyc__ir {
    grid-template-columns: 2.75fr 7.25fr;
  }

  .spouse .kyc__ir {
    grid-template-columns: 2.75fr 7.25fr;
  }

  .son .kyc__ir {
    grid-template-columns: 2.75fr 7.25fr;
  }

  .daughter .kyc__ir {
    grid-template-columns: 2.75fr 7.25fr;
  }

  .daughter-in-law .kyc__ir {
    grid-template-columns: 2.75fr 7.25fr;
  }

  .father-in-law .kyc__ir {
    grid-template-columns: 2.75fr 7.25fr;
  }

  .father-in-law .nepali {
    grid-template-columns: 4fr 6fr !important;
  }

  .mother-in-law .nepali {
    grid-template-columns: 4fr 6fr !important;
  }

  .mother-in-law .kyc__ir {
    grid-template-columns: 2.75fr 7.25fr;
  }
}

/* Globals */
.muted {
  font-size: 0.6rem;
  font-family: 'Roboto Condensed', sans-serif;
  font-stretch: condensed;
}

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

.kyc__block-val:last-child,
.kyc__block-val:nth-child(28) {
  border-right: none;
}

.kyc__block-val:nth-child(n+29) {
  border-top: 1px solid black;
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
  display: grid;
  grid-template-columns: repeat(28, 1fr);
}

.r2 {
  grid-template-rows: 1fr 1fr;
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
