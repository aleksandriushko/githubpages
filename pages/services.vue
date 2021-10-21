<template>
    <div class="main-container">

        <HeaderElement />

        <OffCanvasMobileMenu />

        <SearchPopup />

        <ServiceModernBreadcrumb />

        <b-tabs pills card>
            <b-tab title="What We Do" active>
                <ServiceModern />
            </b-tab>
            <b-tab title="How We Do It">
                <ServiceModern2 />
            </b-tab>
        </b-tabs>

        <WhatNext />

        <FooterTwo />

    </div>
</template>

<script>
    export default {
        components: {
            HeaderElement: () => import('@/components/custom/HeaderElement'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            ServiceModernBreadcrumb: () => import('@/components/custom/ServiceModernBreadcrumb'),
            ServiceModern: () => import('@/components/custom/ServiceModern'),
            ServiceModern2: () => import('@/components/custom/ServiceModern2'),
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
