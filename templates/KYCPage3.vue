<template>
    <div class="page">
        <div class="kyc__container">
            <!-- Financial Details -->
            <div class="kyc__ig financial">
                <div class="kyc__ir">
                    <div class="kyc__ic label">
                        <p class="kyc__p">आर्थिक विवरण:</p>
                        <p class="kyc__p">Financial Details:</p>
                    </div>
                    <div class="kyc__ic value">
                        <p class="kyc__p mb-1">आयको सिमा (आर्थिक विवरण / Income Limit (Annual Details)</p>
                        <div class="value__grid">
                            <div class="val__c c1">
                                <div class="label">
                                    <p class="kyc__p">रू. ५,००,००० सम्म</p>
                                    <p class="kyc__p">Upto Rs. 5,00,000</p>
                                </div>
                                <div class="checkbox"></div>
                            </div>
                            <div class="val__c c2">
                                <div class="label">
                                    <p class="kyc__p">रू. ५,००,००१ देखि १०,००,००० सम्म</p>
                                    <p class="kyc__p">From Rs. 5,00,001 to Rs. 10,00,000</p>
                                </div>
                                <div class="checkbox"></div>
                            </div>
                            <div class="val__c c3">
                                <div class="label">
                                    <p class="kyc__p">रू. १०,००,००१ भन्दा माथि</p>
                                    <p class="kyc__p">Above Rs. 10,00,001</p>
                                </div>
                                <div class="checkbox"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Trading Involvement -->
            <div class="kyc__ig investment-involve">
                <div class="kyc__ir">
                    <div class="kyc__ic label">
                        <p class="kyc__p">धितोपत्र खरिद विक्री गर्ने मुख्य उद्देश्यले स्थापित इन्भेष्मेन्ट कम्पनिमा संग्लग्न
                        </p>

                        <p class="kyc__p">Involvement in Investment Companies which were established for securities trading
                        </p>

                        <p class="kyc__p">(भएमा देहाय बमोजिम विवरण उल्लेख गर्नु पर्ने।) (If yes mention below)</p>
                    </div>
                    <div class="kyc__ic value">
                        <div class="val__c">
                            <div class="label">
                                <p class="kyc__p">छु</p>
                                <p class="kyc__p">Yes</p>
                            </div>
                            <div class="checkbox"></div>
                        </div>
                        <div class="val__c">
                            <div class="label">
                                <p class="kyc__p">छैन</p>
                                <p class="kyc__p">No</p>
                            </div>
                            <div class="checkbox"></div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Trading Company Name -->
            <div class="kyc__ig t-company-name">
                <div class="kyc__ir">
                    <div class="kyc__ic label br">
                        <p class="kyc__p">कम्पनिको नाम:</p>
                        <p class="kyc__p">Name of Company:</p>
                    </div>
                    <div class="kyc__ic value"></div>
                </div>
            </div>
            <!-- Trading Company Designation -->
            <div class="kyc__ig investment-designation">
                <div class="kyc__ir">
                    <div class="kyc__ic label br">
                        <p class="kyc__p">पद:</p>
                        <p class="kyc__p">Designation:</p>
                    </div>
                    <div class="kyc__ic value">
                        <div class="val__c">
                            <div class="label">
                                <p class="kyc__p">संचालक</p>
                                <p class="kyc__p">Director</p>
                            </div>
                            <div class="checkbox"></div>
                        </div>
                        <div class="val__c">
                            <div class="label">
                                <p class="kyc__p">पदाधिकारी</p>
                                <p class="kyc__p">Executive</p>
                            </div>
                            <div class="checkbox"></div>
                        </div>
                        <div class="val__c">
                            <div class="label">
                                <p class="kyc__p">शेयरधनि</p>
                                <p class="kyc__p">Share Holder</p>
                            </div>
                            <div class="checkbox"></div>
                        </div>
                        <div class="val__c">
                            <div class="label">
                                <p class="kyc__p">कर्मचारी</p>
                                <p class="kyc__p">Employee</p>
                            </div>
                            <div class="checkbox"></div>
                        </div>
                        <div class="val__c">
                            <div class="label">
                                <p class="kyc__p">अन्य</p>
                                <p class="kyc__p">Others</p>
                            </div>
                            <div class="checkbox"></div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Guardian Details Header -->
            <div class="kyc__guardian-header mt-2">
                <div class="kyc__guardian-header-photo">
                    <span class="kyc__label"> संरक्षकको फोटो (हालसालै खिचिएको) </span>
                </div>
                <p class="kyc__p">
                    <strong>संरक्षकको विवरण (नाबालक को हकमा मात्र)</strong>
                </p>
                <p class="kyc__p"><strong>Guardian’s Details (In case of Minor only)</strong></p>
            </div>
            <!-- Guardian Name -->
            <div class="kyc__ig guardian-name">
                <div class="kyc__ir nepali bb">
                    <div class="kyc__ic label br">
                        <p class="kyc__p">नाम/ थर:</p>
                    </div>
                    <div class="kyc__ic value"></div>
                </div>
                <div class="kyc__ir english">
                    <div class="kyc__ic label br">
                        <p class="kyc__p">Name/ Surname <span class="muted">(In Block Letters)</span>:</p>
                    </div>
                    <div class="kyc__ic value np">
                        <span class="kyc__block-val" v-for="ch in 28" :key="ch">{{ 'Jean-Michel Basquiat'[ch - 1]
                        }}</span>
                    </div>
                </div>
            </div>
            <!-- Guardian Relationship -->
            <div class="kyc__ig guardian-relationship">
                <div class="kyc__ir">
                    <div class="kyc__ic label br">
                        <p class="kyc__p">निवेदकसंगको सम्बन्ध :</p>
                        <p class="kyc__p">Relationship with applicant:</p>
                    </div>
                    <div class="kyc__ic value"></div>
                </div>
            </div>
            <!-- Guardian Correspondence Address -->
            <div class="kyc__ig guardian-correspondence-address">
                <div class="kyc__ir">
                    <div class="kyc__ic label br">
                        <p class="kyc__p">पत्राचार ठेगाना:</p>
                        <p class="kyc__p">Correspondence Address:</p>
                    </div>
                    <div class="kyc__ic value"></div>
                </div>
            </div>
            <!-- Guardian Country + Province -->
            <div class="kyc__ig guardian-country-province">
                <div class="kyc__ir">
                    <div class="kyc__ic label br">
                        <p class="kyc__p">देश:</p>

                        <p class="kyc__p">Country:</p>
                    </div>
                    <div class="kyc__ic value br"></div>
                    <div class="kyc__ic label br">
                        <p class="kyc__p">प्रदेश:</p>

                        <p class="kyc__p">Province:</p>
                    </div>
                    <div class="kyc__ic value"></div>
                </div>
            </div>
            <!-- Guardian District + City -->
            <div class="kyc__ig guardian-district-city">
                <div class="kyc__ir">
                    <div class="kyc__ic label br">
                        <p class="kyc__p">जिल्ला::</p>

                        <p class="kyc__p">District:</p>
                    </div>
                    <div class="kyc__ic value br"></div>
                    <div class="kyc__ic label br">
                        <p class="kyc__p">गा.पा./ न.पा./ उ.म.न.पा./ म.न.पा.:</p>

                        <p class="kyc__p">
                            Rural Municipality/ Municipality/ Sub Metropolitan City/
                            Metropolitan City:
                        </p>
                    </div>
                    <div class="kyc__ic value"></div>

                </div>
            </div>
            <!-- Guardian Ward + Telephone -->
            <div class="kyc__ig guardian-ward-telephone">
                <div class="kyc__ir">
                    <div class="kyc__ic label">
                        <p class="kyc__p">वडा न.:</p>

                        <p class="kyc__p">Ward No.:</p>
                    </div>
                    <div class="kyc__ic value"></div>
                    <div class="kyc__ic label">
                        <p class="kyc__p">टेलिफोन नं.:</p>

                        <p class="kyc__p">
                            Telephone No.:
                        </p>
                    </div>
                    <div class="kyc__ic value"></div>

                </div>
            </div>
            <!-- Guardian Fax + Mobile No -->
            <div class="kyc__ig guardian-fax-mobile">
                <div class="kyc__ir">
                    <div class="kyc__ic label">
                        <p class="kyc__p">फ्याक्स न.:</p>

                        <p class="kyc__p">Fax No.:</p>
                    </div>
                    <div class="kyc__ic value"></div>
                    <div class="kyc__ic label">
                        <p class="kyc__p">मोबाईल नं.:</p>

                        <p class="kyc__p">
                            Mobile No.:
                        </p>
                    </div>
                    <div class="kyc__ic value"></div>

                </div>
            </div>
            <!-- Guardian Pan + Email -->
            <div class="kyc__ig guardian-pan-email">
                <div class="kyc__ir">
                    <div class="kyc__ic label br">
                        <p class="kyc__p">स्थायी लेखा नम्बर:</p>

                        <p class="kyc__p">Permanent Account No. (PAN)</p>
                    </div>
                    <div class="kyc__ic value br"></div>
                    <div class="kyc__ic label br">
                        <p class="kyc__p">ईमेल:</p>

                        <p class="kyc__p">
                            E-Mail ID:
                        </p>
                    </div>
                    <div class="kyc__ic value"></div>

                </div>
            </div>
            <!-- Guardian Signature -->
            <div class="guardian-signature mt-5">
                <div class="kyc__ir">
                    <div class="kyc ic">
                        <div class="kyc__empty medium"></div>
                        <p class="kyc__p">संरक्षकको हस्ताक्षर</p>
                        <p class="kyc__p">Guardian’s Signature</p>
                    </div>
                </div>
            </div>
            <!-- Address Map -->
            <div class="kyc__map">
                <div class="map__labels br">
                    <span class="map__label">
                        हाल बसोबास रहेको स्थान को नक्सा
                    </span>
                    <span class="map__label">
                        Location Map
                    </span>
                </div>
                <img :src="require('@/assets/Pointer.svg')" alt="" class="map__pointer">
                <p class="kyc__p">
                    From main Road Street <span class="kyc__empty small"></span> the distance of the Residence is <span
                        class="kyc__empty small"></span> meters (approximately)
                </p>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "KYCPage3"
}
</script>

<style scoped>
.financial .kyc__ir {
    grid-template-columns: 3fr 7fr;
}

.financial .value__grid {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
}

.investment-involve .kyc__ir {
    grid-template-columns: 7fr 3fr;
}

.investment-involve .value {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.investment-involve .value .val__c {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}

.t-company-name .kyc__ir {
    grid-template-columns: 2fr 8fr;
}

.investment-designation .kyc__ir {
    grid-template-columns: 2fr 8fr;
}

.investment-designation .value {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
}

.kyc__guardian-header {
    position: relative;
    padding-top: 5rem;
}

.kyc__guardian-header-photo {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 2.7cm;
    height: 2.9cm;
    border: 1px solid black;
}

.guardian-name .kyc__ir {
    grid-template-columns: 3fr 9fr;
}

.guardian-relationship .kyc__ir {
    grid-template-columns: 3.5fr 8.5fr;
}

.guardian-correspondence-address .kyc__ir {
    grid-template-columns: 3fr 9fr;
}

.guardian-country-province .kyc__ir {
    grid-template-columns: 1fr 2fr 1fr 2fr;
}

.guardian-district-city .kyc__ir {
    grid-template-columns: 1fr 2fr 3fr 4fr;
}

.guardian-ward-telephone .kyc__ir {
    grid-template-columns: 1fr 1fr 1fr 1fr;
}

.guardian-fax-mobile .kyc__ir {
    grid-template-columns: 1fr 1fr 1fr 1fr;
}

.guardian-pan-email .kyc__ir {
    grid-template-columns: 2fr 2fr 1fr 2fr;
}

.guardian-signature .kyc__ir {
    display: grid;
    justify-content: end;
}

.kyc__map {
    border: 1px solid black;
    height: 5.1cm;
    position: relative;
}

.map__labels {
    width: 3cm;
    padding: 1px;
    text-align: center;
    font-size: 0.7rem;
    line-height: 1rem;
}

.map__pointer {
    position: absolute;
    top: 0;
    right: 0;
}

.kyc__map .kyc__p {
    position: absolute;
    bottom: 0;
    left: 1cm;
    text-align: center;
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