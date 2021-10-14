<template>

    <div class="main-container">

        <HeaderVerticle />

        <OffCanvasMobileMenu />
        
        <HeroFullscreen />

    </div>

</template>

<script>
    export default {
        components: {
            HeaderVerticle: () => import('@/components/HeaderVerticle'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            HeroFullscreen: () => import('@/components/HeroFullscreen')
        }
    };
</script>