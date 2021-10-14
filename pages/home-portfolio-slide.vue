<template>
    <div class="main-container">

        <fixed-header>
            <header class="br_header header-default header-portfolio-slide position-from--top black-logo--version haeder-fixed-width header-mega-menu clearfix">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <div class="header__wrapper ptb--40 ptb-sm--20 justify-content-between mr--0">
                                <div class="header-left">
                                    <div class="simple-logo">
                                        <n-link to="/">
                                            <img src="/img/logo/simple-dark-logo2.png" alt="Brand Logo">
                                        </n-link>
                                    </div>
                                </div>

                                <div class="header-right">
                                    <div class="manu-hamber hamberger-trigger black-version d-none d-xl-block" @click="togglePopupMenu('addClass', 'is-visiable')">
                                        <div>
                                            <i></i>
                                        </div>
                                    </div>

                                    <div class="manu-hamber popup-mobile-click black-version d-block d-xl-none" @click="mobiletoggleClass('addClass', 'show-mobile-menu')">
                                        <div>
                                            <i></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </fixed-header>

        <OffcanvasMenu />

        <OffCanvasMobileMenu />

        <HeroPortfolioSlide />

        <footer id="bk-footer" class="page-footer bg_color--1 plr--100 plr_md--90 plr_sm--10">
            <div class="copyright ptb--50">
                <div class="container-fluid pl--5 pr--5">
                    <div class="row align-items-center row--0">
                        <div class="col-md-6">
                            <div class="copyright-left">
                                <ul class="social-icon social-text text-md-left text-center text-dark second-font">
                                    <li class="facebook">
                                        <a href="https://www.facebook.com/" target="_blank" class="link">
                                            <span class="color-dark">Facebook</span>
                                        </a>
                                    </li>
                                    <li class="twitter">
                                        <a href="https://twitter.com/" target="_blank" class="link">
                                            <span class="color-dark">Twitter</span>
                                        </a>
                                    </li>
                                    <li class="instagram">
                                        <a href="https://www.instagram.com/" target="_blank" class="link">
                                            <span class="color-dark">Instagram</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="copyright-right text-md-right text-center mt_sm--10">
                                <p class="color-dark">&copy; 2021 <b>Brook</b> Made with <i class="fa fa-heart text-danger"></i> by <b>HasThemes</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    </div>
</template>

<script>
    import FixedHeader from 'vue-fixed-header'

    export default {
        components: {
            FixedHeader,
            HeroPortfolioSlide: () => import('@/components/HeroPortfolioSlide'),
            OffcanvasMenu: () => import('@/components/OffcanvasMenu'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
        },

        mounted () {
            document.body.classList.add('template-color-1', 'template-font-2')
        },

        methods: {
            // popup fullscreen menu
            togglePopupMenu(addRemoveClass, className) {
                const el = document.querySelector('#popup-fullscreen-menu');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },

            // offcanvas mobilemenu open
            mobiletoggleClass(addRemoveClass, className) {
                const el = document.querySelector('#offcanvas-menu');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
        },

        head() {
            return {
                title: 'Brook || Home Portfolio Slider'
            }
        },
    };
</script>

<style lang="scss" scoped>
    .vue-fixed-header--isFixed {
        top: 0;
        left: 0;
        width: 100vw;
        z-index: 999;
        position: fixed !important;
        background-color: rgba($white, 0.9);
        box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.2);
        animation: 900ms cubic-bezier(0.2, 1, 0.22, 1) 0s normal none 1 running fadeInDown;
        padding-top: 0 !important;
        .header__wrapper {
            padding: 15px 0;
        }
    }
</style>