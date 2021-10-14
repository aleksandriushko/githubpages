<template>
    <div class="main-container">

        <HeaderTransparentWithSocial />

        <OffCanvasMobileMenu />

        <HeroAuthenticStudio />

        <AboutAuthenticStudio />

        <VideoService />

        <PortfolioTwo addClass="pt--130 pb--100 pt_md--80 pt_sm--80 pb_md--80 pb_sm--80" />

        <ServiceIconBoxWithTitleStleTwo class="pt-0 pb-0" />

        <TestimonialFive />

        <FooterStyleFour />

    </div>
</template>

<script>

    export default {
        components: {
            HeaderTransparentWithSocial: () => import('@/components/HeaderTransparentWithSocial'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            HeroAuthenticStudio: () => import('@/components/HeroAuthenticStudio'),
            AboutAuthenticStudio: () => import('@/components/AboutAuthenticStudio'),
            VideoService: () => import('@/components/VideoService'),
            PortfolioTwo: () => import('@/components/sections/PortfolioTwo'),
            ServiceIconBoxWithTitleStleTwo: () => import('@/components/sections/ServiceIconBoxWithTitleStleTwo'),
            TestimonialFive: () => import('@/components/sections/TestimonialFive'),
            FooterStyleFour: () => import('@/components/FooterStyleFour'),
        },

        mounted () {
            document.body.classList.add('template-color-20', 'template-font-2')
        },

        head() {
            return {
                title: 'Brook || Home Authentic Studio'
            }
        },
    };
</script>