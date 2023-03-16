<template>
<div class="position-relative">
  <h1 class="text-center fs-1 py-40 py-lg-80 lh-1 mb-0 bg-image text-white" style="background-image: url(src/assets/images/banner-tarot-06.jpg);">
    舟舟小療
  </h1>
  <!-- <section class="bg-primary blog-navbar text-center d-none">
    <div class="container">
      <div class="row justify-content-center">
        <ul class="nav col-lg-9">
          <li class="nav-item">
            <RouterLink to="" class="nav-link active" aria-current="page">全部文章</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="" class="nav-link">靈性知識庫</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="" class="nav-link">靈性生活分享</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="" class="nav-link">水手回饋</RouterLink>
          </li>
        </ul>
      </div>    
    </div>
  </section> -->
  <section class="py-40 py-lg-80 container">
    <div class="row justify-content-center">
      <!-- <h2 class="mb-5 col-xl-9 ">全部文章</h2> -->
      <ul class="list-unstyled col-xl-9">
        <li class="mb-4" v-for="article in articles" :key="article.id">
          <RouterLink :to="`/blog/${article.id}`" class="blog-border d-block">
            <div class="row align-items-stretch">
              <div class="col-lg-3 col-md-4">
                <div class="d-block blog-list-item-image bg-image" :style="{backgroundImage: `url(${article.imageUrl})`}"></div>
              </div>
              <div class="col-lg-9 col-md-8">
                <div class="px-2 ps-md-0 py-2 d-flex flex-column">
                  <div class="mb-1 d-flex justify-content-between">
                    <span class="badge rounded-pill bg-secondary fw-thin">{{ article.author }}</span>
                    <span class="fs-14">{{ $filters.date(article.create_at) }}</span>
                  </div>
                  <h3 class="">{{ article.title }}</h3>
                  <div class="d-none d-sm-block">
                    <div v-html="article.description"></div>
                  </div>
                  <div class="text-end d-none d-md-block mt-auto">...more</div>                
                </div>
              </div>
            </div>
          </RouterLink>
        </li>
        <!-- <li class="mb-4">
          <RouterLink to="blog_article" class="blog-border d-block">
            <div class="row align-items-stretch">
              <div class="col-lg-3 col-md-4">
                <div class="d-block blog-list-item-image bg-image" style="background-image:url(src/assets/images/blog-02.jpg)"></div>
              </div>
              <div class="col-lg-9 col-md-8">
                <div class="px-2 ps-md-0 py-2 d-flex flex-column">
                  <div class="mb-1 d-flex justify-content-between">
                    <span class="badge rounded-pill bg-secondary fw-thin">靈性生活分享</span>
                    <span class="fs-14">2022/9/5</span>
                  </div>
                  <h3 class="">壓克力畫課程體驗</h3>
                  <p class="d-none d-sm-block">
                    今天下午排個休假去找 @goanywheredesign 上課 <br>
                    老師很細心，會仔細說明構圖、筆觸、顏色等等等等等等
                  </p>
                  <div class="text-end d-none d-md-block mt-auto">...more</div>                
                </div>
              </div>
            </div>
          </RouterLink>
        </li>
        <li class="mb-4">
          <RouterLink to="blog_article" class="blog-border d-block">
            <div class="row align-items-stretch">
              <div class="col-lg-3 col-md-4">
                <div class="d-block blog-list-item-image bg-image" style="background-image:url(src/assets/images/blog-03.jpg)"></div>
              </div>
              <div class="col-lg-9 col-md-8">
                <div class="px-2 ps-md-0 py-2 d-flex flex-column">
                  <div class="mb-1 d-flex justify-content-between">
                    <span class="badge rounded-pill bg-secondary fw-thin">靈性生活分享</span>
                    <span class="fs-14">2022/8/24</span>
                  </div>
                  <h3 class="">生命樹工作坊後記</h3>
                  <p class="d-none d-sm-block">
                    8/20、8/21參加巧度老師辦的「生命樹工作坊」，當時單純覺得可以畫畫耶好有趣！殊不知我是過程中爆哭的那位😂
                  </p>
                  <div class="text-end d-none d-md-block mt-auto">...more</div>                
                </div>
              </div>
            </div>
          </RouterLink>
        </li>
        <li class="mb-4">
          <RouterLink to="blog_article" class="blog-border d-block">
            <div class="row align-items-stretch">
              <div class="col-lg-3 col-md-4">
                <div class="d-block blog-list-item-image bg-image" style="background-image:url(src/assets/images/blog-04.jpg)"></div>
              </div>
              <div class="col-lg-9 col-md-8">
                <div class="px-2 ps-md-0 py-2 d-flex flex-column">
                  <div class="mb-1 d-flex justify-content-between">
                    <span class="badge rounded-pill bg-secondary fw-thin">靈性生活分享</span>
                    <span class="fs-14">2022/8/13</span>
                  </div>
                  <h3 class="">射箭體驗</h3>
                  <p class="d-none d-sm-block">
                    今日再次去體驗射箭。 <br>
                    因為知道自己就是會被彈到手，所以這次課程直接跟老師借護具了😂
                  </p>
                  <div class="text-end d-none d-md-block mt-auto">...more</div>                
                </div>
              </div>
            </div>
          </RouterLink>
        </li>
        <li class="mb-4">
          <RouterLink to="blog_article" class="blog-border d-block">
            <div class="row align-items-stretch">
              <div class="col-lg-3 col-md-4">
                <div class="d-block blog-list-item-image bg-image" style="background-image:url(src/assets/images/blog-05.jpg)"></div>
              </div>
              <div class="col-lg-9 col-md-8">
                <div class="px-2 ps-md-0 py-2 d-flex flex-column">
                  <div class="mb-1 d-flex justify-content-between">
                    <span class="badge rounded-pill bg-secondary fw-thin">靈性生活分享</span>
                    <span class="fs-14">2022/8/8</span>
                  </div>
                  <h3 class="">舟舟小療</h3>
                  <p class="d-none d-sm-block">
                    今天是我安排按摩的日子。我在按摩前，鎖骨被蜜蜂叮，當我覺鎖骨一陣刺痛，手伸過去抓到在動的蟲
                  </p>
                  <div class="text-end d-none d-md-block mt-auto">...more</div>                
                </div>
              </div>
            </div>
          </RouterLink>
        </li>
        <li class="mb-4">
          <RouterLink to="blog_article" class="blog-border d-block">
            <div class="row align-items-stretch">
              <div class="col-lg-3 col-md-4">
                <div class="d-block blog-list-item-image bg-image" style="background-image:url(src/assets/images/blog-06.jpg)"></div>
              </div>
              <div class="col-lg-9 col-md-8">
                <div class="px-2 ps-md-0 py-2 d-flex flex-column">
                  <div class="mb-1 d-flex justify-content-between">
                    <span class="badge rounded-pill bg-secondary fw-thin">靈性生活分享</span>
                    <span class="fs-14">2022/8/7</span>
                  </div>
                  <h3 class="">深度挖掘課程昨日結業紀錄</h3>
                  <p class="d-none d-sm-block">
                    週五週六深度挖掘的課程，真的是讓學員挖好挖滿。
                  </p>
                  <div class="text-end d-none d-md-block mt-auto">...more</div>                
                </div>
              </div>
            </div>
          </RouterLink>
        </li>
        <li class="mb-4">
          <RouterLink to="blog_article" class="blog-border d-block">
            <div class="row align-items-stretch">
              <div class="col-lg-3 col-md-4">
                <div class="d-block blog-list-item-image bg-image" style="background-image:url(src/assets/images/blog-07.jpg)"></div>
              </div>
              <div class="col-lg-9 col-md-8">
                <div class="px-2 ps-md-0 py-2 d-flex flex-column">
                  <div class="mb-1 d-flex justify-content-between">
                    <span class="badge rounded-pill bg-secondary fw-thin">靈性生活分享</span>
                    <span class="fs-14">2022/7/25</span>
                  </div>
                  <h3 class="">礦礦展示檯</h3>
                  <p class="d-none d-sm-block">
                    這個展示檯太美，必須再發一張😂 <br>
                    因為我房間空間不夠，前陣子還在思考要怎麼整理和擺放大礦礦們
                  </p>
                  <div class="text-end d-none d-md-block mt-auto">...more</div>                
                </div>
              </div>
            </div>
          </RouterLink>
        </li> -->
      </ul>    
    <!-- <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <RouterLink to="blog_article" class="page-link" aria-label="Previous">
              <span class="material-symbols-outlined fs-6">
                navigate_before
              </span>
            </RouterLink>
          </li>
          <li class="page-item active"><RouterLink to="" class="page-link">1</RouterLink></li>
          <li class="page-item"><RouterLink to="" class="page-link">2</RouterLink></li>
          <li class="page-item"><RouterLink to="" class="page-link">3</RouterLink></li>
          <li class="page-item">
            <RouterLink to="" class="page-link" aria-label="Next">
              <span class="material-symbols-outlined fs-6">
                navigate_next
              </span>
            </RouterLink>
          </li>
        </ul>
      </nav> -->
      <pagination :pages="pagination"  @change-page="getArticles"></pagination>

    </div>

  </section>


</div>
</template>

<script>
import Pagination from '@/components/PaginationComponent.vue';

import { RouterLink } from 'vue-router'
const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      articles:[],
      pagination:{}
    }
  },
  components: {
    RouterLink,
    Pagination
  },
  methods:{
    getArticles(page=1) {
      this.$http.get(`${VITE_URL}/api/${VITE_PATH}/articles?page=${page}`)
        .then((res) => {
          // console.log(res.data)
          this.articles = res.data.articles
          this.pagination = res.data.pagination
          console.log(this.articles)
        })
        .catch((err) => {
          console.log(err)
        })
    }

  },
  mounted(){
    this.getArticles()
  }
}
</script>

<style lang="scss">

</style>

