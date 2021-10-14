<template>
    <div class="main-wrapper">

        <HeaderElement />

        <OffCanvasMobileMenu />

        <SearchPopup />

        <Breadcrumb :items="items" title="Testimonials" />

        <TestimonialTwo />

        <div class="brook-testimonial-area ptb--150 ptb-md--80 ptb-sm--80 bg_color--5 poss_relative">
            <div class="container">
                <TestimonialWithoutCarousel />
            </div>
        </div>

        <TestimonialThree addClass="ptb--150 ptb-md--80 ptb-sm--60 bg_color--7" />

        <TestimonialThree addClass="ptb--150 ptb-md--80 ptb-sm--60 bg_color--6" />

        <FooterTwo />
        
    </div>
</template>

<script>

    export default {
        components: {
            HeaderElement: () => import('@/components/HeaderElement'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            TestimonialTwo: () => import('@/components/sections/TestimonialTwo'),
            TestimonialWithoutCarousel: () => import('@/components/sections/TestimonialWithoutCarousel'),
            TestimonialThree: () => import('@/components/sections/TestimonialThree'),
            FooterTwo: () => import('@/components/FooterTwo'),
        },

        data () {
            return {
                items: [
                    {
                        text: 'Home',
                        to: "/"
                    },
                    {
                        text: 'Element',
                        to: "/"
                    },
                    {
                        text: 'Testimonials',
                        active: true
                    }
                ]
            }
        },

        mounted () {
            document.body.classList.add('template-color-1', 'template-font-1')
        },

        head() {
            return {
                title: 'Testimonials'
            }
        },
    };
</script>