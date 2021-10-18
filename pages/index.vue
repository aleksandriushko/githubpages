<template>
    
    <div class="main-container">

        <HeaderBlack />

        <OffCanvasMobileMenu />

        <SearchPopup />

        <HeroEssential />

        <FeatureStartUp />

        <WhatWeDo />

        <EffectiveSolution />

        <StartUpStratagy />

        <PortfolioItemFilter />

        <NewsletterCta />

        <FooterTwo />

    </div>

</template>

<script>
    export default {
        components: {
            HeaderBlack: () => import('@/components/HeaderBlack'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            HeroEssential: () => import('@/components/custom/HeroEssential'),
            FeatureStartUp: () => import('@/components/sections/FeatureStartUp'),
            WhatWeDo: () => import('@/components/WhatWeDo'),
            EffectiveSolution: () => import('@/components/custom/EffectiveSolution'),
            StartUpStratagy: () => import('@/components/sections/StartUpStratagy'),
            PortfolioItemFilter: () => import('@/components/sections/PortfolioItemFilter'),
            NewsletterCta: () => import('@/components/NewsletterCta'),
            FooterTwo: () => import('@/components/FooterTwo'),
        },

        mounted () {
            document.body.classList.add('template-color-5', 'template-font-1')
        },

        head() {
            return {
                title: 'Brook || Home Start Up'
            }
        },
    };
</script>