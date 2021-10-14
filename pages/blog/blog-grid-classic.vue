<template>
    <div class="main-wrapper">

        <HeaderElement />

        <OffCanvasMobileMenu />

        <SearchPopup />

        <Breadcrumb :items="items" title="Blog Grid Classic" />

        <div class="bk-blog-grid-area pt--70 pb--100 pt_md--80 pb_md--80 pb_sm--80 pt_sm--60 bg_color--5">
            <div class="container">
                <div class="row">
                    <div class="col-xl-3 col-md-4 col-sm-6 move-up wow mt--30" v-for="blog in data.blogs.slice(3, 15)" :key="blog.id">
                        <div class="blog-grid">
                            <div class="post-thumb">
                                <n-link :to="`/blog/${blog.id}`">
                                    <img :src="blog.image" :alt="blog.alt">
                                </n-link>
                            </div>
                            <div class="post-content">
                                <div class="post-inner">
                                    <h5 class="heading heading-h5">
                                        <n-link :to="`/blog/${blog.id}`">{{ blog.title }}</n-link>
                                    </h5>
                                    <div class="post-meta">
                                        <div class="post-date">{{ blog.date }}</div>
                                        <div class="post-category">
                                            <n-link :to="`/blog/${blog.id}`">{{ blog.category }}</n-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <div class="brook-pagination-wrapper text-center pt--80">
                            <paginate
                                :page-count="4"
                                :page-range="3"
                                :margin-pages="2"
                                :prev-text="'Prev'"
                                :next-text="'Next'"
                                :container-class="'brook-pagination'"
                                :page-class="'page-item'">
                            </paginate>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <FooterTwo />
        
    </div>
</template>

<script>
    import data from '../../data/blog.json';

    export default {
        components: {
            HeaderElement: () => import('@/components/HeaderElement'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            FooterTwo: () => import('@/components/FooterTwo'),
        },

        data () {
            return {
                data,
                items: [
                    {
                        text: 'Home',
                        to: "/"
                    },
                    {
                        text: 'Blog',
                        to: "/blog"
                    },
                    {
                        text: 'Blog Grid Classic',
                        active: true
                    }
                ]
            }
        },

        mounted () {
            document.body.classList.add('template-color-1', 'template-font-1')
        },

        head() {
            return {
                title: 'Blog Grid Classic'
            }
        },
    };
</script>