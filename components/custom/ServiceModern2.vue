<template>
    <div>
        <div class="cards-wrap">
            <div class="card-style-1">
                <img :src="`${$router.options.base}images/services/how-1.svg`" alt="">
                <span class="sub-title">RESEARCH</span>
                <h3 class="card-title">Discovery</h3>
                <span class="cat-title">SERVICES PROVIDED</span>
                <p>USER RESEARCH / STAKEHOLDER INTERVIEWS / BRAND AUDIT / UX AUDIT / COMPETITIVE ANALYSIS / CONTENT AUDIT /</p>
            </div>
            
            <div class="card-style-1">
                <img :src="`${$router.options.base}images/services/how-2.svg`" alt="">
                <span class="sub-title">DEFINE</span>
                <h3 class="card-title">Strategy</h3>
                <span class="cat-title">SERVICES PROVIDED</span>
                <p>CONTENT STRATEGY / USER PERSONAS / JOURNEY MAPPING /</p>
            </div>
            
            <div class="card-style-1">
                <img :src="`${$router.options.base}images/services/how-3.svg`" alt="">
                <span class="sub-title">EXPLORE</span>
                <h3 class="card-title">User Experience</h3>
                <span class="cat-title">SERVICES PROVIDED</span>
                <p>INFORMATION ARCHITECTURE / USER FLOWS / WIREFRAMES / PROTOTYPES /</p>
            </div>
            
            <div class="card-style-1">
                <img :src="`${$router.options.base}images/services/how-4.svg`" alt="">
                <span class="sub-title">IDEATE</span>
                <h3 class="card-title">Creative</h3>
                <span class="cat-title">SERVICES PROVIDED</span>
                <p>BRAND & IDENTITY / CONTENT DEVELOPMENT / COPYWRITING / SITE DESIGN / APPLICATION DESIGN / SOCIAL / VIDEO / DESIGN SYSTEMS / MARKTING COMMUNICATIONS / BRAND POSITIONING /</p>
            </div>
            
            <div class="card-style-1">
                <img :src="`${$router.options.base}images/services/how-5.svg`" alt="">
                <span class="sub-title">BUILD</span>
                <h3 class="card-title">Development</h3>
                <span class="cat-title">SERVICES PROVIDED</span>
                <p>DSM / CMS / FRONT END DEVELOPMENT / APPLICATION DEVELOPMENT /</p>
            </div>
            
            <div class="card-style-1">
                <img :src="`${$router.options.base}images/services/how-6.svg`" alt="">
                <span class="sub-title">MEASURE</span>
                <h3 class="card-title">Analytics</h3>
                <span class="cat-title">SERVICES PROVIDED</span>
                <p>SEARCH / DATA SCIENCE / DESCRIPTIVE AND INFERENTIAL STATISTICS / SUPERVISED AND UNSUPERVISED LEARNING / SENTIMENT ANALYSIS / FULL STORY /</p>
            </div>
        </div>

    </div>
</template>

<script>
    export default {

    };
</script>

<style scoped>
    .cards-wrap {
        margin-top: 40px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 30px;
        row-gap: 30px;
    }
    .card-style-1 {
        padding: 30px;
        background-color: rgb(248, 244, 244);
    }
    span.sub-title {
        display: block;
        margin-top: 20px;
    }
    span.cat-title {
        font-weight: bold;
    }
    .card-style-1 p {
        margin-top: 10px;
    }
    .card-style-1 img {
        margin-top: 20px;
    }
</style>

