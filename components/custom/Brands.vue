<template>
    <div class="brands-wrap mt--80">
        <div class="container">
            <div class="row row--30 mtn--40">
                <div class="offset-md-3 col-md-6 col-sm-12 mt--40">
                    <h3>We are passionate about the work that we do and the people we partner with.</h3>
                    <h5>When you love what you do it shows.</h5>
                </div>
            </div>
            <div class="row row--30 mtn--40">
                <div class="col-md-3 col-sm-4 mt--40" v-for="i in 16" :key="i">
                    <img :src="`${$router.options.base}images/brands/brand-${i}.svg`" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    };
</script>

<style scoped>
    .brands-wrap {
        background-color: #f2f2f2;
    }
    h3, h5 {
        text-align: center;
    }
</style>

