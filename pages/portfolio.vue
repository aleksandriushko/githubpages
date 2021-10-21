<template>
    <div class="main-container">

        <HeaderBlack addClass="header-transparent" />

        <OffCanvasMobileMenu />

        <SearchPopup />

        <div class="breadcaump-area pt--260 pb--80 pt_md--200 pt_sm--150 bg_color--5 breadcaump-title-bar">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="breadcaump-inner text-center">
                            <h1 class="heading heading-h1">Our Work</h1>
                            <p class="font-20">Why think outside the box when you can build a new one? Our approach with clients is never a one-size-fits-all solution. We balance expertise with lessons learned across industries and award-winning campaigns. Always testing, tweaking and transforming brands with every single touchpoint.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="brook-portfolio-area ptb--100 ptb-md--80 ptb-sm--60 bg_color--5">
            <div class="container">
                <div class="row mtn--30">
                    <div class="col-lg-4 col-sm-6 mt--30" v-for="portfolio in portfolioItems" :key="portfolio.id">
                        <PortfolioItemCaptionBottom :portfolio="portfolio" />
                    </div>
                </div>
            </div>
        </div>

        <FooterTwo />

    </div>
</template>

<script>
    export default {
        components: {
            HeaderBlack: () => import('@/components/custom/HeaderBlack'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            PortfolioItemCaptionBottom: () => import('@/components/PortfolioItemCaptionBottom'),
            FooterTwo: () => import('@/components/FooterTwo'),
        },
        
        data () {
            return {
                portfolioItems: [
                    {
                        "id": 1,
                        "image": this.$router.options.base+"images/our-work/our-work-1.webp",
                        "heading": "Red Bull Wheels of Summer",
                        "category": "Brand",
                        "filterClass": "creative digital"
                    },
                    {
                        "id": 2,
                        "image": this.$router.options.base+"images/our-work/our-work-2.jpeg",
                        "heading": "Rebranding Downtown",
                        "category": "Brand",
                        "filterClass": "photography design"
                    },
                    {
                        "id": 3,
                        "image": this.$router.options.base+"images/our-work/our-work-3.jpeg",
                        "heading": "Vital Spaces Site Design",
                        "category": "Interactive",
                        "filterClass": "photography creative"
                    },
                    {
                        "id": 4,
                        "image": this.$router.options.base+"images/our-work/our-work-4.jpeg",
                        "heading": "Spring Summer Virtual Show",
                        "category": "Virtual Events",
                        "filterClass": "design"
                    },
                    {
                        "id": 5,
                        "image": this.$router.options.base+"images/our-work/our-work-5.png",
                        "heading": "Brand Awareness Campaign",
                        "category": "Brand",
                        "filterClass": "creative"
                    },
                    {
                        "id": 6,
                        "image": this.$router.options.base+"images/our-work/our-work-6.jpeg",
                        "heading": "Brand Campaign",
                        "category": "Brand",
                        "filterClass": "digital"
                    },
                    {
                        "id": 7,
                        "image": this.$router.options.base+"images/our-work/our-work-7.png",
                        "heading": "Brand Strategy and Execution",
                        "category": "Brand"
                    },
                    {
                        "id": 8,
                        "image": this.$router.options.base+"images/our-work/our-work-8.jpeg",
                        "heading": "50 Site Platform Migration",
                        "category": "Interactive",
                        "filterClass": "digital design"
                    },
                    {
                        "id": 9,
                        "image": this.$router.options.base+"images/our-work/our-work-9.png",
                        "heading": "VR Virtual Restaraunt Experience",
                        "category": "AR / VR",
                        "filterClass": "digital"
                    },
                    {
                        "id": 10,
                        "image": this.$router.options.base+"images/our-work/our-work-10.jpeg",
                        "heading": "Design System Management",
                        "category": "Design System Management",
                        "filterClass": "digital"
                    },
                    {
                        "id": 11,
                        "image": this.$router.options.base+"images/our-work/our-work-11.png",
                        "heading": "Brand Strategy and Implementation",
                        "category": "Brand",
                        "filterClass": "digital"
                    },
                    {
                        "id": 12,
                        "image": this.$router.options.base+"images/our-work/our-work-12.webp",
                        "heading": "Site Design & Social Foundation",
                        "category": "Communications",
                        "filterClass": "digital"
                    },
                    {
                        "id": 13,
                        "image": this.$router.options.base+"images/our-work/our-work-13.png",
                        "heading": "New Branding",
                        "category": "Brand",
                        "filterClass": "digital"
                    },
                    {
                        "id": 14,
                        "image": this.$router.options.base+"images/our-work/our-work-14.jpeg",
                        "heading": "A New Name and a New Look",
                        "category": "Brand",
                        "filterClass": "digital"
                    },
                    {
                        "id": 15,
                        "image": this.$router.options.base+"images/our-work/our-work-15.jpeg",
                        "heading": "Brand Strategy and Implementation",
                        "category": "Brand",
                        "filterClass": "digital"
                    },
                    {
                        "id": 16,
                        "image": this.$router.options.base+"images/our-work/our-work-16.jpeg",
                        "heading": "Banking on a Personalized Experience",
                        "category": "Interactive",
                        "filterClass": "digital"
                    },
                    {
                        "id": 17,
                        "image": this.$router.options.base+"images/our-work/our-work-17.jpeg",
                        "heading": "Rebranding with a Fresh New Look",
                        "category": "Brand",
                        "filterClass": "digital"
                    },
                    {
                        "id": 18,
                        "image": this.$router.options.base+"images/our-work/our-work-18.jpeg",
                        "heading": "Back to Nature Site Redesign",
                        "category": "Interactive",
                        "filterClass": "digital"
                    },
                    {
                        "id": 19,
                        "image": this.$router.options.base+"images/our-work/our-work-19.png",
                        "heading": "Branding & Communications",
                        "category": "Brand",
                        "filterClass": "digital"
                    },
                    {
                        "id": 20,
                        "image": this.$router.options.base+"images/our-work/our-work-20.jpeg",
                        "heading": "Always Climbing Campaign",
                        "category": "Communications",
                        "filterClass": "digital"
                    }
                ]
            }
        },

        mounted () {
            document.body.classList.add('template-color-5', 'template-font-1')
        },

        head() {
            return {
                title: 'Portfolio With Caption'
            }
        },
    };
</script>

<style lang="scss" scoped>
    .font-20 {
        line-height: 30px;
        font-size: 20px;
        margin: 20px 10%;
    }
</style>