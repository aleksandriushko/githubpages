<template>
    <div class="main-wrapper">

        <HeaderElement />

        <OffCanvasMobileMenu />

        <SearchPopup />

        <Breadcrumb :items="items" title="Tabs" />

        <section class="tabs-section section ptb--120 ptb-md--80 ptb-sm--60 bg_color--1">
            <div class="container mtn--50">
                <div class="row mt--50">
                    <div class="col-12">
                        <h3 class="mb--30">Basic Tabs</h3>
                        <TabOne />
                    </div>
                </div>

                <div class="row mt--50">
                    <div class="col-12">
                        <h3 class="mb--30">Vertical Tabs</h3>
                        <TabOne addClass="vertical d-flex flex-wrap" />
                    </div>
                </div>
            </div>
        </section>

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
            TabOne: () => import('@/components/TabOne'),
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
                        text: 'Tabs',
                        active: true
                    }
                ]
            }
        },

        head() {
            return {
                title: 'Tabs'
            }
        },
    };
</script>