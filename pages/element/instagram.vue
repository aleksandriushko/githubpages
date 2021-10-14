<template>
    <div class="main-wrapper">

        <HeaderElement />

        <OffCanvasMobileMenu />

        <SearchPopup />

        <Breadcrumb :items="items" title="Instagram" />

        <div class="brook-instagram-area ptb--100 ptb-md--80 ptb-sm--60 bg_color--1">
            <div class="bk-intagram-list instagram-grid">
                <InstagramPost addClass="instagram-grid-5 pl--30 pr--30 move-up wow" />
            </div>
        </div>

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
            InstagramPost: () => import('@/components/InstagramPost'),
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
                        text: 'Instagram',
                        active: true
                    }
                ]
            }
        },

        head() {
            return {
                title: 'Instagram'
            }
        },
    };
</script>