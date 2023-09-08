<template>
    <div class="page">
        <div class="kyc__container">
            <p class="kyc__p">
                <strong>
                    धितोपत्र कारोबारको सम्बन्धमा तपशिल बमोजिमको स्वघोषणा गर्दछु।
                </strong>
            </p>
            <ol class="kyc__list">
                <li class="kyc__li">मा/ हामीले धितोपत्र खरिदका लागि प्रयोग गर्ने रकम सम्पति शुद्धिकरण सम्बन्धि प्रचलित कानुन
                    वरिपरित आर्जन गरेको हुने छैन।</li>
                <li class="kyc__li">धितोपत्रमा गरिएको लगानीमा निहित जोखिमको सम्बन्धमा जानकार छु।</li>
                <li class="kyc__li">मा/हामीले खरिद गरेको धितोपत्रहरु बापतको भुक्तानी लिने दिने कार्य तोकिएको समय भित्र गर्ने
                    छु।</li>
                <li class="kyc__li">मा/हामीले धित्रोपत्र सम्बन्धि तथा आन्या प्रचलित नियम कानुनहरुको पालना गर्नेछु।</li>
                <li class="kyc__li">मा/हामी कर्जा सूचना केन्द्रको कालो सुचिमा रहेको छु/छैन।</li>
            </ol>
            <p class="kyc__p mt-3">
                <strong>
                    संलग्न गर्नुपर्ने कागजातहरु:
                </strong>
            </p>
            <ol class="kyc__list">
                <li class="kyc__li">नेपाली नागरिकहरुको हकमा नागरिकताको प्रमंपत्रको प्रतिलिपि। </li>
                <li class="kyc__li">अन्य देशको नागरिकको हकमा पासपोर्टको प्रतिलिपि।</li>
                <li class="kyc__li">नाबालकको हकमा संरक्षक नाबालक दुबैको फोटो।</li>
                <li class="kyc__li">कानुनी संरक्षक भए सो सम्बन्धी कागजात।</li>
                <li class="kyc__li">आम वा बाबु संरक्षक भएमा छोरा वा छोरीको जन्म दर्ताको प्रमंपत्रको प्रतिलिपि। </li>
                <li class="kyc__li">निवेदकको हस्ताक्षर तथा औंठ छाप। </li>
                <li class="kyc__li">कुनै संस्थाको कर्मचारी रहेको हकमा कर्मचारी परिचयपत्रको प्रतिलिपि।</li>
            </ol>
            <p class="kyc__p mt-3">
                माथि उल्लेखित विवरण सत्य तथ्य रहेको र सो विवारंमा कुनै फरक परे कानुन वमोजिम सहुँला, बुझाउँला।
            </p>
            <p class="kyc__p">I/We hereby acknowledge that the above disclosed details are true. I/We further herby consent
                to bear any legal actions in case any false disclosure of information related to me/us.</p>
            <div class="kyc__biometrics mt-5">
                <div class="fp">
                    <div class="fp__header bb pa-1">
                        <p class="kyc__p text-center">औथाको छाप:</p>
                        <p class="kyc__p text-center">Thumb Print</p>
                    </div>
                    <div class="prints">
                        <div class="right br">
                            <p class="kyc__p">दायाँ </p>
                            <p class="kyc__p">Right</p>
                        </div>
                        <div class="left">
                            <p class="kyc__p">बायाँ </p>
                            <p class="kyc__p">Left</p>
                        </div>
                    </div>
                </div>
                <div class="sig">
                    <p class="kyc__empty medium text-center"></p>
                    <p class="kyc__p text center">ग्राहकको हस्ताक्षर</p>
                    <p class="kyc__p text center">Client’s Signature</p>
                </div>

            </div>
            <!-- Official Use Section -->
            <p class="kyc__p my-5">
                कार्यालयको प्रयोजनको लागि:
            </p>
            <div class="kyc__ig official">
                <div class="kyc__ir">
                    <div class="kyc__ic">
                        <p class="kyc__p mb-4"><strong>राजु गर्ने:</strong></p>
                        <p class="kyc__p mb-4">नाम, थर:</p>
                        <p class="kyc__p mb-4">पद:</p>
                        <p class="kyc__p mb-4">हस्ताक्षर:</p>
                        <p class="kyc__p">मिति:</p>
                    </div>
                    <div class="kyc__ic">
                        <p class="kyc__stamp"></p>
                        <div class="kyc__p text-center">कार्यालयको नाम तथा छाप </div>
                    </div>
                    <div class="kyc__ic">
                        <p class="kyc__p mb-4"><strong>प्रमाणित गर्ने:</strong></p>
                        <p class="kyc__p mb-4">नाम, थर:</p>
                        <p class="kyc__p mb-4">पद:</p>
                        <p class="kyc__p mb-4">हस्ताक्षर:</p>
                        <p class="kyc__p">मिति:</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "KYCPage4"
}
</script>

<style scoped>
.kyc__list {
    list-style-type: nepali;
}

.kyc__biometrics {
    display: grid;
    grid-template-columns: 2fr 3fr;
    column-gap: 40px;
}

.fp {
    border: 1px solid black;
}

.fp .prints {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 4cm;
}

.right,
.left {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 5px;
    align-items: center;

}

.sign {
    align-self: end;
}

.official .kyc__ir {
    grid-template-columns: 2fr 1fr 2fr;
    column-gap: 10px;
}

.kyc__stamp {
    border: 1px solid black;
    display: block;
    height: 4cm;
}

/* Globals */
@counter-style nepali {
    system: numeric;
    symbols: '०' '१' '२' '३' '४' '५' '६' '७' '८' '९';
}

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