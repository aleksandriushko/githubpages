<template>
    <div class="main-container">

        <HeaderElement />

        <OffCanvasMobileMenu />

        <SearchPopup />

        <AboutBreadcrumbFour />

        <ServiceTwo />

        <WhatWeDoThree />

        <TeamTwo />

        <AccordionOne />

        <FeaturesOne />

        <CallToAction />

        <FooterTwo />

    </div>
</template>

<script>
    export default {
        components: {
            HeaderElement: () => import('@/components/HeaderElement'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            AboutBreadcrumbFour: () => import('@/components/AboutBreadcrumbFour'),
            ServiceTwo: () => import('@/components/sections/ServiceTwo'),
            WhatWeDoThree: () => import('@/components/sections/WhatWeDoThree'),
            TeamTwo: () => import('@/components/sections/TeamTwo'),
            AccordionOne: () => import('@/components/sections/AccordionOne'),
            FeaturesOne: () => import('@/components/sections/FeaturesOne'),
            CallToAction: () => import('@/components/CallToAction'),
            FooterTwo: () => import('@/components/FooterTwo'),
        },

        mounted () {
            document.body.classList.add('template-color-1', 'template-font-1')
        },

        head() {
            return {
                title: 'Brook || About Us 04'
            }
        },
    };
</script>