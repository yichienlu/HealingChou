<template>
<LoaderComponent :class="{'d-none': !isLoading}" class="loader"></LoaderComponent>
<div class="position-relative">
  <h1 class="text-center fs-1 py-40 py-lg-80 lh-1 mb-0 bg-image text-white" :style="{ backgroundImage: `url(${banner_bg})` }">
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
      </ul>    
      <pagination :pages="pagination"  @change-page="getArticles"></pagination>
    </div>
  </section>
</div>
</template>

<script>
import Pagination from '@/components/PaginationComponent.vue';
import { RouterLink } from 'vue-router'
import banner_bg from '@/assets/images/banner-tarot-06.jpg'
import LoaderComponent from '@/components/LoaderComponent.vue'

const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      isLoading: false,
      banner_bg,
      articles:[],
      pagination:{}
    }
  },
  components: {
    RouterLink,
    Pagination,
    LoaderComponent
  },
  methods:{
    getArticles(page=1) {
      this.$http.get(`${VITE_URL}/api/${VITE_PATH}/articles?page=${page}`)
        .then((res) => {
          console.log(res.data)
          this.articles = res.data.articles.sort((a,b)=>b.create_at - a.create_at)
          this.pagination = res.data.pagination
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
  mounted(){
    this.isLoading = true
    this.getArticles()
  }
}
</script>

<style lang="scss">

</style>

