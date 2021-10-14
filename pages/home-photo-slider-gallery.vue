<template>

    <div class="main-container">

        <HeaderVerticalOffcanvas />

        <OffcanvasMenu />

        <OffCanvasMobileMenu />

        <SearchPopup />
        
        <div class="page-content ml--100 ml_lg--0 ml_md--0 ml_sm--0">
            <HeroPhotoSliderGallery />
        </div>

        <footer class="bk-footer-area plr--100 plr_sm--10">
            <div class="copyright-area pb--45">
                <div class="copyright-right text-center text-md-right">
                    <p class="bk_pra heading-font2 color-dark">&copy; 2021 <b>Brook</b> Made with <i class="fa fa-heart text-danger"></i> by <a href="https://hasthemes.com/"><b>HasThemes</b></a></p>
                </div>
            </div>
        </footer>

    </div>

</template>

<script>

    export default {
        components: {
            HeaderVerticalOffcanvas: () => import('@/components/HeaderVerticalOffcanvas'),
            OffcanvasMenu: () => import('@/components/OffcanvasMenu'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            HeroPhotoSliderGallery: () => import('@/components/HeroPhotoSliderGallery'),
        },

        mounted () {
            document.body.classList.add('template-color-1', 'template-font-1')
        },

        head() {
            return {
                title: 'Brook || Home Photo Slider Gallery'
            }
        },
    };
</script>