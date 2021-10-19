<template>
    <div class="main-container">

        <HeaderElement />

        <OffCanvasMobileMenu />

        <SearchPopup />

        <ServiceModernBreadcrumb />

        <ServiceModern />

        <WhatNext />

        <FooterTwo />

    </div>
</template>

<script>
    export default {
        components: {
            HeaderElement: () => import('@/components/HeaderElement'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            ServiceModernBreadcrumb: () => import('@/components/custom/ServiceModernBreadcrumb'),
            ServiceModern: () => import('@/components/custom/ServiceModern'),
            WhatNext: () => import('@/components/custom/WhatNext'),
            FooterTwo: () => import('@/components/FooterTwo'),
        },

        mounted () {
            document.body.classList.add('template-color-5', 'template-font-1')
        },

        head() {
            return {
                title: 'Brook || Service Modern'
            }
        },
    };
</script>