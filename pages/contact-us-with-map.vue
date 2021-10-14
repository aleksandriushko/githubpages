<template>
    <div class="main-container">

        <HeaderAbout />

        <OffCanvasMobileMenu />

        <SearchPopup />

        <GoogleMap />

        <ContactUsTwo />

        <FooterTwo />

    </div>
</template>

<script>
    export default {
        components: {
            HeaderAbout: () => import('@/components/HeaderAbout'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            GoogleMap: () => import('@/components/GoogleMap'),
            ContactUsTwo: () => import('@/components/ContactUsTwo'),
            FooterTwo: () => import('@/components/FooterTwo'),
        },

        mounted () {
            document.body.classList.add('template-color-1', 'template-font-1')
        },

        head() {
            return {
                title: 'Brook || Contact Us With Map'
            }
        },
    };
</script>