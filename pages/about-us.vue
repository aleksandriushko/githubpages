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
                    <div class="col-md-4 col-sm-6 mt--40 mb--40" v-for="teamMember in teamMembers" :key="teamMember.id">
                        <TeamMemberThree :teamMember="teamMember" />
                    </div>
                </div>
            </div>
        </div>

        <Brands />

        <WhatNext :bgColor="'#f2f2f2'" />

        <FooterTwo />

    </div>
</template>

<script>
    export default {
        components: {
            HeaderAbout: () => import('@/components/custom/HeaderAbout'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            TeamMemberThree: () => import('@/components/TeamMemberThree'),
            Brands: () => import('@/components/custom/Brands'),
            WhatNext: () => import('@/components/custom/WhatNext'),
            FooterTwo: () => import('@/components/FooterTwo'),
        },

        data () {
            return {
                teamMembers: [
                    {
                        "id": 1,
                        "image": this.$router.options.base+"images/about-us/person-1.webp",
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
                        "image": this.$router.options.base+"images/about-us/person-3.webp",
                        "name": "Lance Shoulders",
                        "position": "VP of Client Strategy"
                    },
                    {
                        "id": 4,
                        "image": this.$router.options.base+"images/about-us/person-4.png",
                        "name": "Kate Castrovince",
                        "position": "Sr. Director / Executive Client Leader"
                    },
                    {
                        "id": 5,
                        "image": this.$router.options.base+"images/about-us/person-5.webp",
                        "name": "Anne Dawson",
                        "position": "Strategy Director"
                    },
                    {
                        "id": 6,
                        "image": this.$router.options.base+"images/about-us/person-6.jpeg",
                        "name": "Kevin MacConnell",
                        "position": "Sr. Director, Executive Client Leader"
                    },
                    {
                        "id": 7,
                        "image": this.$router.options.base+"images/about-us/person-7.jpeg",
                        "name": "Rachel Gehrs",
                        "position": "Sr. Creative Director"
                    },
                    {
                        "id": 8,
                        "image": this.$router.options.base+"images/about-us/person-8.jpeg",
                        "name": "Tim Aron",
                        "position": "Sr. Creative Director"
                    },
                    {
                        "id": 9,
                        "image": this.$router.options.base+"images/about-us/person-9.jpeg",
                        "name": "Scott Efferson",
                        "position": "Director of Business Development"
                    },
                    {
                        "id": 10,
                        "image": this.$router.options.base+"images/about-us/person-10.jpeg",
                        "name": "Brad Rehak",
                        "position": "Director, Executive Client Leader"
                    },
                    {
                        "id": 11,
                        "image": this.$router.options.base+"images/about-us/person-11.jpeg",
                        "name": "Drew Pearson",
                        "position": "Sr. Director of Development"
                    },
                    {
                        "id": 12,
                        "image": this.$router.options.base+"images/about-us/person-12.jpeg",
                        "name": "Cline Bates",
                        "position": "Front-End Developer"
                    },
                    {
                        "id": 13,
                        "image": this.$router.options.base+"images/about-us/person-13.jpeg",
                        "name": "Brandon Bradford",
                        "position": "Operations Director"
                    },
                    {
                        "id": 14,
                        "image": this.$router.options.base+"images/about-us/person-14.jpeg",
                        "name": "Pete Kever",
                        "position": "Digital Marketing Director"
                    },
                    {
                        "id": 15,
                        "image": this.$router.options.base+"images/about-us/person-15.jpeg",
                        "name": "Rachel Stallard",
                        "position": "Sr. Content Director"
                    },
                    {
                        "id": 16,
                        "image": this.$router.options.base+"images/about-us/person-16.jpeg",
                        "name": "Tim Ruby",
                        "position": "Experience Director"
                    },
                    {
                        "id": 17,
                        "image": this.$router.options.base+"images/about-us/person-17.jpeg",
                        "name": "Travis Ward",
                        "position": "Director of Video"
                    },
                    {
                        "id": 18,
                        "image": this.$router.options.base+"images/about-us/person-18.jpeg",
                        "name": "Maggie Tyma",
                        "position": "Business Analyst"
                    },
                    {
                        "id": 19,
                        "image": this.$router.options.base+"images/about-us/person-19.jpeg",
                        "name": "Kimi Frazier",
                        "position": "Designer"
                    },
                    {
                        "id": 20,
                        "image": this.$router.options.base+"images/about-us/person-20.jpeg",
                        "name": "Sarah Scheider",
                        "position": "Business Analyst"
                    },
                    {
                        "id": 21,
                        "image": this.$router.options.base+"images/about-us/person-21.jpeg",
                        "name": "Denise Cowden",
                        "position": "VP of Communications"
                    },
                    {
                        "id": 22,
                        "image": this.$router.options.base+"images/about-us/person-22.jpeg",
                        "name": "Brian Eisenberg",
                        "position": "Technical Director"
                    },
                    {
                        "id": 23,
                        "image": this.$router.options.base+"images/about-us/person-23.jpeg",
                        "name": "Chris Moe",
                        "position": "Executive Client Leader"
                    },
                    {
                        "id": 24,
                        "image": this.$router.options.base+"images/about-us/person-24.jpeg",
                        "name": "Rich Krahn",
                        "position": "Data Scientist"
                    },
                    {
                        "id": 25,
                        "image": this.$router.options.base+"images/about-us/person-25.jpeg",
                        "name": "Chris Dawson",
                        "position": "Full Stack Web Developer"
                    },
                    {
                        "id": 26,
                        "image": this.$router.options.base+"images/about-us/person-26.jpeg",
                        "name": "Cedric Thomas",
                        "position": "Head of Corporate Development"
                    },
                    {
                        "id": 27,
                        "image": this.$router.options.base+"images/about-us/person-27.png",
                        "name": "Kelsey Kagan",
                        "position": "Business Analyst"
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