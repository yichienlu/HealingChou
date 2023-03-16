<template>
<LoaderComponent :class="{'d-none': !isLoading}" class="loader"></LoaderComponent>

  <div class="position-relative">
    <h1 class="text-white bg-image text-center fs-1 py-40 py-lg-80 lh-1 mb-0" :style="{ backgroundImage: `url(${banner_bg})` }">
      舟舟小療
    </h1>
    <section class="bg-primary blog-navbar text-center">
      <div class="container">
        <div class="row justify-content-center">
          <ul class="nav col-lg-9">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">全部文章</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">靈性知識庫</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">靈性生活分享</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">水手回饋</a>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="py-40 py-lg-80">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-9">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <RouterLink to="/blog">舟舟小療</RouterLink>
                  <!-- <a href="./blog.html"></a> -->
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  <RouterLink :to="`/blog/${article.id}`">{{ article.title }}</RouterLink>
                </li>
              </ol>
            </nav>
            <h2 class="mt-4">{{ article.title }}</h2>
            <div class="fs-14 mb-4">{{ article.created_at }}</div>

            <img :src="article.imageUrl" alt="" />
            <div v-html="article.content"></div>

            <div>
              <span class="badge rounded-pill bg-secondary fw-thin">{{ article.author }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-beige py-40 py-lg-80 d-none">
      <h2 class="container mb-4">更多文章</h2>
      <div class="container">
        <div class="d-flex align-items-center">
          <swiper class="swiper blog-swiper" :modules="modules" :loop="true" navigation
            :breakpoints="swiperOptions.breakpoints">
            <swiper-slide class="swiper-slide align-self-stretch">
              <RouterLink to="" class="blog-more-item d-block h-100">
                <div class="p-2">
                  <div class="d-block blog-more-item-image bg-image mb-2"
                    style="background-image: url(@/assets/images/blog-02.jpg)"></div>
                  <h3 class="fs-6">壓克力畫課程體驗</h3>
                </div>
              </RouterLink>
            </swiper-slide>
            <swiper-slide class="swiper-slide align-self-stretch">
              <RouterLink to="" class="blog-more-item d-block h-100">
                <div class="p-2">
                  <div class="d-block blog-more-item-image bg-image mb-2"
                    style="background-image: url(src/assets/images/blog-03.jpg)"></div>
                  <h3 class="fs-6">生命樹工作坊後記</h3>
                </div>
              </RouterLink>
            </swiper-slide>
            <swiper-slide class="swiper-slide align-self-stretch">
              <RouterLink to="" class="blog-more-item d-block h-100">
                <div class="p-2">
                  <div class="d-block blog-more-item-image bg-image mb-2"
                    style="background-image: url(src/assets/images/blog-04.jpg)"></div>
                  <h3 class="fs-6">壓克力畫課程體驗</h3>
                </div>
              </RouterLink>
            </swiper-slide>
            <swiper-slide class="swiper-slide align-self-stretch">
              <RouterLink to="" class="blog-more-item d-block h-100">
                <div class="p-2">
                  <div class="d-block blog-more-item-image bg-image mb-2"
                    style="background-image: url(src/assets/images/blog-05.jpg)"></div>
                  <h3 class="fs-6">舟舟小療</h3>
                </div>
              </RouterLink>
            </swiper-slide>
            <swiper-slide class="swiper-slide align-self-stretch">
              <RouterLink to="" class="blog-more-item d-block h-100">
                <div class="p-2">
                  <div class="d-block blog-more-item-image bg-image mb-2"
                    style="background-image: url(src/assets/images/blog-06.jpg)"></div>
                  <h3 class="fs-6">深度挖掘課程昨日結業紀錄</h3>
                </div>
              </RouterLink>
            </swiper-slide>
            <swiper-slide class="swiper-slide align-self-stretch">
              <RouterLink to="" class="blog-more-item d-block h-100">
                <div class="p-2">
                  <div class="d-block blog-more-item-image bg-image mb-2"
                    style="background-image: url(src/assets/images/blog-07.jpg)"></div>
                  <h3 class="fs-6">礦礦展示檯</h3>
                </div>
              </RouterLink>
            </swiper-slide>
          </swiper>

          <!-- <div class="swiper blog-swiper">
          <div class="swiper-wrapper ">
            <div class="swiper-slide align-self-stretch">
              <a href="./blog_page.html" class="blog-more-item d-block h-100">
                <div class="p-2">
                  <div
                    class="d-block blog-more-item-image bg-image mb-2"
                    style="background-image: url(src/assets/images/blog-02.jpg)"
                  ></div>
                  <h3 class="fs-6">壓克力畫課程體驗</h3>
                </div>
              </a>
            </div>
            <div class="swiper-slide align-self-stretch">
              <a href="./blog_page.html" class="blog-more-item d-block h-100">
                <div class="p-2">
                  <div class="d-block blog-more-item-image bg-image mb-2" 
                  style="background-image: url(src/assets/images/blog-03.jpg)"></div>
                  <h3 class="fs-6">生命樹工作坊後記</h3>
                </div>
              </a>
            </div>
            <div class="swiper-slide align-self-stretch">
              <a href="./blog_page.html" class="blog-more-item d-block h-100">
                <div class="p-2">
                  <div
                    class="d-block blog-more-item-image bg-image mb-2"
                    style="background-image: url(src/assets/images/blog-04.jpg)"
                  ></div>
                  <h3 class="fs-6">射箭體驗</h3>
                </div>
              </a>
            </div>
            <div class="swiper-slide align-self-stretch">
              <a href="./blog_page.html" class="blog-more-item d-block h-100">
                <div class="p-2">
                  <div
                    class="d-block blog-more-item-image bg-image mb-2"
                    style="background-image: url(src/assets/images/blog-05.jpg)"
                  ></div>
                  <h3 class="fs-6">舟舟小療</h3>
                </div>
              </a>
            </div>
            <div class="swiper-slide align-self-stretch">
              <a href="./blog_page.html" class="blog-more-item d-block h-100">
                <div class="p-2">
                  <div
                    class="d-block blog-more-item-image bg-image mb-2"
                    style="background-image: url(src/assets/images/blog-06.jpg)"
                  ></div>
                  <h3 class="fs-6">深度挖掘課程昨日結業紀錄</h3>
                </div>
              </a>
            </div>
            <div class="swiper-slide align-self-stretch">
              <a href="./blog_page.html" class="blog-more-item d-block h-100">
                <div class="p-2">
                  <div
                    class="d-block blog-more-item-image bg-image mb-2"
                    style="background-image: url(src/assets/images/blog-07.jpg)"
                  ></div>
                  <h3 class="fs-6">礦礦展示檯</h3>
                </div>
              </a>
            </div>
          </div>
        </div> -->
          <!-- <span class="material-symbols-outlined blog-swiper-button-next p-2 p-lg-3 py-5 user-select-none">
          arrow_forward_ios
        </span> -->
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
      swiperOptions: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          320: {
            slidesPerView: 2.2,
            spaceBetween: 20
          },
          576: {
            slidesPerView: 2.7,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 3.2,
            spaceBetween: 30
          },
          992: {
            slidesPerView: 4.2,
            spaceBetween: 40
          },
          1200: {
            slidesPerView: 5.2,
            spaceBetween: 40
          },
        }
      }
    }
  },
  methods: {
    getArticle() {
      const { id } = this.$route.params
      this.$http.get(`${VITE_URL}/api/${VITE_PATH}/article/${id}`)
        .then((res) => {
          // console.log(res.data)
          this.article = res.data.article
          // document.querySelector('#content').innerHTML = res.data.article.content
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  setup() {
    // const onSwiper = (swiper) => {
    //     console.log(swiper);
    //   };
    //   const onSlideChange = () => {
    //     console.log('slide change');
    //   };
    return {

      modules: [Autoplay, Pagination, Navigation],
    }
  },
  mounted() {
    // loader
    this.isLoading = true
    setTimeout(()=>{
      this.isLoading = false
    },1000)

    this.getArticle()

    // new Swiper('.blog-swiper', {
    //   loop: true,
    //   freeMode: true,
    //   autoHeight: true,
    //   slidesPerView: 1.2,
    //   spaceBetween: 8,
    //   breakpoints: {
    //     320: {
    //       slidesPerView: 2.2,
    //       spaceBetween: 20
    //     },
    //     576: {
    //       slidesPerView: 2.7,
    //       spaceBetween: 20
    //     },
    //     768: {
    //       slidesPerView: 3.2,
    //       spaceBetween: 30
    //     },
    //     992: {
    //       slidesPerView: 4.2,
    //       spaceBetween: 40
    //     },
    //     1200: {
    //       slidesPerView: 5.2,
    //       spaceBetween: 40
    //     },
    //   },

    // navigation: {
    //   nextEl: '.blog-swiper-button-next',
    //   prevEl: '.blog-swiper-button-prev',
    // },
    // });

  }
}
//
</script>

<style lang="scss">
* {
  outline: 1px solid #AAA
}

swiper-slide {
  height: 200px;
}
</style>

