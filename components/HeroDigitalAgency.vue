<template>
    <div class="brook-hero-number-slider-area position-relative">
        <div class="brook-element-carousel number-dot">
            <swiper :options="swiperOption">
                <div class="swiper-slide" v-for="slider in sliders" :key="slider.id">
                    <div class="hero-item bg-image" :style="{ backgroundImage: `url(${slider.bgImage})` }">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <div class="hero-content-2 center">
                                        <h3>{{ slider.heading }}</h3>
                                        <n-link :to="slider.btnUrl" class="bk-btn theme-btn">White button</n-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper>

            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                swiperOption: {
                    spaceBetween: 20,
                    loop: false,
                    speed: 1000,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                        renderBullet: function (index, className) {
                            return '<span class="' + className + '">' + (index + 1) + '</span>';
                        },
                    },
                },

                sliders: [
                    {
                        id: 1,
                        heading: "Bringing the best digital solutions for your brands",
                        bgImage: "/img/slider/digital-agency-slide-01.jpg",
                        btnUrl: "/"
                    },
                    {
                        id: 2,
                        heading: "Bringing the best digital solutions for your brands",
                        bgImage: "/img/slider/digital-agency-slide-02.jpg",
                        btnUrl: "/"
                    },
                    {
                        id: 3,
                        heading: "Bringing the best digital solutions for your brands",
                        bgImage: "/img/slider/digital-agency-slide-03.jpg",
                        btnUrl: "/"
                    }
                ]
            }
        }
    };
</script>