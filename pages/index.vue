<template>
    
    <div class="main-container">

        <HeaderBlack />

        <OffCanvasMobileMenu />

        <SearchPopup />

        <HeroEssential />

        <EffectiveSolution />

        <WhatNext />

        <FooterTwo />

    </div>

</template>

<script>
    export default {
        components: {
            HeaderBlack: () => import('@/components/custom/HeaderBlack'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            HeroEssential: () => import('@/components/custom/HeroEssential'),
            EffectiveSolution: () => import('@/components/custom/EffectiveSolution'),
            WhatNext: () => import('@/components/custom/WhatNext'),
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