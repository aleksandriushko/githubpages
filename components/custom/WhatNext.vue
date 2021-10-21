<template>
    <div>
        <div :class="{'smile-bg-color': bgColor === '#f2f2f2'}" class="gradient-3 brook-video-area pb_md--80 pb_sm--60 bg-as-text smile text-center block-7">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 mt_md--40 mt_sm--40">
                        <div class="video-content move-up wow mt-4 mb-40">
                            <h5 class="heading heading-h3 line-height-1-42 text-white">WHAT'S NEXT?</h5>
                            <h3 class="heading heading-h3 line-height-1-42 text-white">Let's Chat.</h3>
                            <div class="bkseparator--25"></div>
                            <p class="bk_pra text-white">We’re always down for exciting new challenges and would love to add a little soul to your brand’s next act. Let us know how we can help.</p>
                            <div class="bkseparator--40"></div>
                            <n-link to="/about-us-01" class="moredetails-btn yellow-color-1 btn-style-1 btn-center">
                                <span>Contact Us</span> 
                            </n-link>
                            <img :src="$router.options.base+'images/content-blocks/content-image-7.png'" alt="video images">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["bgColor"]
    }
</script>

<style lang="scss" scoped>
    .gradient-3 {
        background: linear-gradient(45deg, #e84700 1.66%, #ffa300 100%);
    }
    .text-white {
        color: #fff;
    }
    .mb-40 {
        margin-bottom: 40px!important;
        display: block;
    }
    .btn-style-1 {
        display: block;
        background-color: #fff;
        width: 110px;
        text-align: center;
        border-radius: 21px;
        padding: 10px;
        margin-top: auto;
        margin: 0 auto;
    }
    .smile:before {
        content: '';
        border-radius: 0 0 95% 95% / 75%;
        background: #fefefe;
        display: block;
        width: 110vw;
        margin-left: -5vw;
        margin-bottom: 2em;
        min-height: 100px;
        border-radius: 0 0 95% 95% / 90%;
        min-height: 200px;
    }
    .smile-bg-color:before {
        background: #f2f2f2;
    }
    .text-center {
        text-align: center;
    }
    .block-7 img {
        width: 100px;
        display: block;
        margin: 30px auto 0;
    }
</style>