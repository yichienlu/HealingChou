<template>
<LoaderComponent :class="{'d-none': !isLoading}" class="loader" />
  <div class="position-relative user-select-none">
    <h1 class="text-white bg-image text-center fs-1 py-40 py-lg-80 lh-1 mb-0" :style="{ backgroundImage: `url(${banner_bg})` }">
      舟舟小療
    </h1>
    <section class="py-40 py-lg-80">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-9">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <RouterLink to="/blog">舟舟小療</RouterLink>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  <RouterLink :to="`/blog/${article.id}`">{{ article.title }}</RouterLink>
                </li>
              </ol>
            </nav>
            <h2 class="mt-4">{{ article.title }}</h2>
            <div class="fs-14 mb-4">{{ $filters.date(article.create_at) }}</div>
            <img :src="article.imageUrl" :alt="article.title" />
            <div v-html="article.content"></div>
            <div>
              <span class="badge rounded-pill bg-secondary fw-thin">{{ article.author }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-beige py-40 py-lg-80 ">
      <h2 class="container mb-4 d-flex justify-content-between">
        <span>更多文章</span>
        <div class="d-flex justify-content-center swiper-custom-button">
          <div class="swiper-custom-button-prev px-2">
            <span class="material-symbols-outlined">arrow_back_ios_new</span>
          </div>
          <div class="swiper-custom-button-next px-2">
            <span class="material-symbols-outlined">arrow_forward_ios</span>
          </div>
        </div>
      </h2>
      <div class="container">
        <div class="position-relative">
          <swiper class="swiper blog-swiper" :slidesPerView="1" :spaceBetween="30" :loop="true"  :modules="modules"  
          :breakpoints=" {
          380: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          576: {
            slidesPerView: 2.6,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 3.2,
            spaceBetween: 30
          },
          992: {
            slidesPerView: 3.8,
            spaceBetween: 40
          },
          1200: {
            slidesPerView: 4.4,
            spaceBetween: 40
          },
        }"
          :navigation="{
            nextEl: '.swiper-custom-button-next',
            prevEl: '.swiper-custom-button-prev'
            }"
          >
            <swiper-slide class="swiper-slide align-self-stretch" v-for="item in articles" :key="item.id">
              <RouterLink :to="`/blog/${item.id}`" class="blog-more-item d-flex">
                <div class="p-2 mx-auto">
                    <img :src="item.imageUrl" class="d-block blog-more-item-image mb-2  mx-auto object-fit-cover" :alt="item.title">
                  <h3 class="fs-6">{{ item.title }}</h3>
                </div>
              </RouterLink>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Autoplay, Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { RouterLink } from 'vue-router'
import banner_bg from '@/assets/images/banner-tarot-06.jpg'
import LoaderComponent from '@/components/LoaderComponent.vue'

const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  components: {
    RouterLink,
    Swiper,
    SwiperSlide,
    LoaderComponent
  },
  data() {
    return {
      banner_bg,
      isLoading: false,
      article: {},
      articles: [],
    }
  },
  methods: {
    getArticle(id) {
      this.$http.get(`${VITE_URL}/api/${VITE_PATH}/article/${id}`)
        .then((res) => {
          this.isLoading = true
          this.article = res.data.article
          this.getArticles(this.article.id)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getArticles(id){
      this.$http.get(`${VITE_URL}/api/${VITE_PATH}/articles`)
      .then((res) => {
          this.articles = res.data.articles
          const index = this.articles.findIndex(i=>i.id === id)
          this.articles.splice(index, 1)
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(()=>{
          setTimeout(()=>{
            this.isLoading = false
          },1000)
        })
    }
  },
  watch:{
    $route(to) {
      if (to.params.id) {
        const { id } = this.$route.params
        this.getArticle(id)
      }
    },
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    }
  },
  mounted() {
    const { id } = this.$route.params
    this.getArticle(id)
  }
}
</script>

<style lang="scss">
.swiper-slide {
  height: 100%;
  text-align: center;
  .blog-more-item {
    height: 100%;
    img {
      height: 200px;
    }
  }
}
.swiper-custom-button-prev, .swiper-custom-button-next{
  color: var(--bs-primary);
  cursor: pointer;
  &:hover {
    color: var(--bs-secondary)
  }
  &:active {
    color: var(--bs-light)
  }
}

</style>

