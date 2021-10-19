<template>
    <div class="main-container">

        <HeaderAbout />

        <OffCanvasMobileMenu />

        <SearchPopup />

        <div class="brook-breadcrumb-area pt--130 pb--145 bg_color--1 breadcrumb-title-bar">
            <div class="container-fluid plr--150 plr_md--50 plr_sm--20">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="breadcrumb-inner text-center">
                            <h1 class="heading heading-h1 line-height-1-5">Meet Yalo.</h1>
                            <p class="font-20">Titles are defined by the people who carry them. Strategists, creatives, technologists, salespeople—are what you expect in an agency. But we relish in the unexpected. It’s what makes us approach our clients—and life—differently. Problem-solvers, colorists, listeners, coaches, farmers, musicians are just a few of the folks you’ll meet at Yalo.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="brook-team-area bg_color--1">
            <div class="container">
                <div class="row row--30 mtn--40">
                    <div class="col-md-4 col-sm-6 mt--40" v-for="teamMember in teamMembers.slice(0, 3)" :key="teamMember.id">
                        <TeamMemberThree :teamMember="teamMember" />
                    </div>
                </div>
            </div>
        </div>

        <WhatNext />

        <FooterTwo />

    </div>
</template>

<script>
    export default {
        components: {
            HeaderAbout: () => import('@/components/HeaderAbout'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            TeamMemberThree: () => import('@/components/TeamMemberThree'),
            WhatNext: () => import('@/components/custom/WhatNext'),
            FooterTwo: () => import('@/components/FooterTwo'),
        },

        data () {
            return {
                teamMembers: [
                    {
                        "id": 1,
                        "image": this.$router.options.base+"images/about-us/person-3.webp",
                        "name": "Arnold Huffman",
                        "position": "President / CEO"
                    },
                    {
                        "id": 2,
                        "image": this.$router.options.base+"images/about-us/person-2.webp",
                        "name": "Eric Cantini",
                        "position": "VP"
                    },
                    {
                        "id": 3,
                        "image": this.$router.options.base+"images/about-us/person-1.webp",
                        "name": "Lance Shoulders",
                        "position": "VP of Client Strategy"
                    },
                    {
                        "id": 4,
                        "image": "/img/team/team-1/team-4.jpg",
                        "name": "Peter Parker",
                        "position": "Marketing"
                    },

                    {
                        "id": 5,
                        "image": "/img/team/team-3/team-1.jpg",
                        "name": "Caroline Roses",
                        "position": "Designer"
                    },
                    {
                        "id": 6,
                        "image": "/img/team/team-3/team-2.jpg",
                        "name": "Blake Hamilton",
                        "position": "Engineer"
                    },
                    {
                        "id": 7,
                        "image": "/img/team/team-3/team-3.jpg",
                        "name": "Kashara May",
                        "position": "Founder"
                    },

                    {
                        "id": 8,
                        "image": "/img/team/team-2/team-1.jpg",
                        "name": "Caroline Roses",
                        "position": "Designer"
                    },
                    {
                        "id": 9,
                        "image": "/img/team/team-2/team-2.jpg",
                        "name": "Blake Hamilton",
                        "position": "Engineer"
                    },
                    {
                        "id": 10,
                        "image": "/img/team/team-2/team-3.jpg",
                        "name": "Kashara May",
                        "position": "Founder"
                    }
                ]
            }
        },

        mounted () {
            document.body.classList.add('template-color-5', 'template-font-1')
        },

        head() {
            return {
                title: 'Brook || Team Grid'
            }
        },
    };
</script>

<style scoped>
    .font-20 {
        line-height: 30px;
        font-size: 20px;
    }
</style>