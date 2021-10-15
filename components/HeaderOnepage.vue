<template>
    <FixedHeader>
        <header class="br_header header-default one-page-header light-logo-version headroom--sticky clearfix">
            <div class="header-wrapper">
                <div class="header-left-wrapper">
                    <div class="branding">
                        <div class="logo">
                            <n-link to="/">
                                <img :src="$router.options.base+'img/logo/simple-light-logo.png'" alt="brook logo">
                            </n-link>
                        </div>
                    </div>
                    <div class="header-left-inner">
                        <div class="header-page-menu-style-2 d-none d-xl-block">
                            <div class="manu-hamber-2 hamberger-trigger" @click="togglePopupMenu('addClass', 'is-visiable')">
                                <div>
                                    <i></i>
                                </div>
                            </div>
                        </div>
                        <div class="header-page-menu-style-2 d-block d-xl-none">
                            <div class="manu-hamber-2 popup-mobile-click" @click="mobiletoggleClass('addClass', 'show-mobile-menu')">
                                <div>
                                    <i></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="header-right-wrapper d-none d-sm-block">
                    <div class="header-text text-right">
                        <h5 class="heading heading-h5 font-20 text-white"> 
                            <span class="fa fa-heart"></span> 
                            Hello, we are brook studio
                        </h5>
                    </div>
                </div>
            </div>
        </header>
    </FixedHeader>
</template>

<script>
    import FixedHeader from 'vue-fixed-header'

    export default {
        components: {
            FixedHeader,
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
    };
</script>

<style lang="scss">

</style>