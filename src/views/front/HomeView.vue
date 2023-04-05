<template>
  <LoaderComponent :class="{'d-none': !isLoading}" class="loader" />
  <main>
    <section class="position-relative">
      <div class="index-banner d-flex justify-content-center align-items-center">
        <div class="text-center text-white">
          <img src="@/assets/images/logo-white.svg" alt="logo" width="108" style="filter: drop-shadow(1px 1px 2px #0008);">
          <h3 class="fs-4 lh-base fw-500 m-0" style="text-shadow: 1px 1px 2px #0008;">舟舟療心室</h3>
          <p class="fw-bolder mt-3 mb-0" style="text-shadow: 1px 1px 2px #0008;">希塔．塔羅．金錢靈氣</p>
        </div>
      </div>
      <button type="button" class="home-btn position-absolute mb-80 start-50 translate-middle bottom-0 rounded-pill bg-transparent border border-4 border-white"  @click="scrollTo()">
        <span class="material-symbols-outlined fs-1 text-white">keyboard_double_arrow_down</span>
      </button>
    </section>
    <section class="index-theta py-80 bg-image bg-fixed">
      <div class="container px-3">
        <div class="text-md-center text-primary">
          <h2>希塔療癒</h2>
          <p class="fw-bold">ThetaHealingⓇ</p>
          <p>
            希塔療癒是在冥想的過程中，透過對造物主專注地祈求，來啟發身、心、靈的療癒。
          </p>
          <p>當我們連結萬有的造物主，我們的腦波會自動轉換成希塔波的狀態，在這個狀態下，您可以立即創造和改變事實。</p>
          <p>您將會接受到造物主毫無保留傳遞下來令人大開眼界的訊息。</p>
        </div>
        <div class="row text-center">
          <div class="col-md-6 mb-4 mb-md-0">
            <div class="index-healing">
              <RouterLink to="/services" class="d-block index-theta-image bg-image rounded-4 mb-2 position-relative">
                <div class="position-absolute top-0 bottom-0 start-0 end-0 index-theta-screen"></div>
              </RouterLink>
              <RouterLink to="/services"><h3>療癒服務</h3></RouterLink>
              <RouterLink to="/services" class="btn">
                more 
                <svg width="127" height="9" viewBox="0 0 127 9" fill="none" xmlns="http://www.w3.org/2000/svg" class="ms-2">
                  <path d="M126.354 4.85355C126.549 4.65829 126.549 4.34171 126.354 4.14645L123.172 0.964466C122.976 0.769204 122.66 0.769204 122.464 0.964466C122.269 1.15973 122.269 1.47631 122.464 1.67157L125.293 4.5L122.464 7.32843C122.269 7.52369 122.269 7.84027 122.464 8.03553C122.66 8.2308 122.976 8.2308 123.172 8.03553L126.354 4.85355ZM0 5H126V4H0V5Z" fill="currentColor"/>
                  </svg>
            </RouterLink>
            </div>
          </div>
          <div class="col-md-6 ">
            <RouterLink to="/courses" class="index-courses">
              <div class="d-block index-theta-image bg-image rounded-4 mb-2 position-relative">
                <div class="position-absolute top-0 bottom-0 start-0 end-0 index-theta-screen"></div>
              </div>
              <h3>療癒課程</h3>
              <button type="button" class="btn">
                more 
                <svg width="127" height="9" viewBox="0 0 127 9" fill="none" xmlns="http://www.w3.org/2000/svg" class="ms-2">
                  <path d="M126.354 4.85355C126.549 4.65829 126.549 4.34171 126.354 4.14645L123.172 0.964466C122.976 0.769204 122.66 0.769204 122.464 0.964466C122.269 1.15973 122.269 1.47631 122.464 1.67157L125.293 4.5L122.464 7.32843C122.269 7.52369 122.269 7.84027 122.464 8.03553C122.66 8.2308 122.976 8.2308 123.172 8.03553L126.354 4.85355ZM0 5H126V4H0V5Z" fill="currentColor"/>
                </svg>
              </button>
            </RouterLink>
          </div>   
        </div>
      </div>
    </section>
    <section class="index-about bg-secondary text-white">
      <div class="container px-3">
        <div class="row justify-content-between">
          <div class="col-md-5">
            <h2 class="fw-bold fs-3 mb-2">我是舟舟</h2>
            <p class="fw-bold fs-6">是光之傳遞者、希塔、塔羅療癒師</p>
            <ul class="list-unstyled border-start border-2 border-white ps-4">
              <li>文字塔羅療癒占卜 </li>
              <li>線上塔羅療癒占卜</li>
              <li>希塔療癒 - 首次諮詢免費</li>
              <li>能量場解讀</li>
              <li>靈魂伴侶</li>
              <li>豐盛顯化</li>
              <li>心理諮詢</li>
            </ul>
            <router-link to="/about" class="btn w-100">
              more 
              <svg width="127" height="9" viewBox="0 0 127 9" fill="none" xmlns="http://www.w3.org/2000/svg" class="ms-2">
                <path d="M126.354 4.85355C126.549 4.65829 126.549 4.34171 126.354 4.14645L123.172 0.964466C122.976 0.769204 122.66 0.769204 122.464 0.964466C122.269 1.15973 122.269 1.47631 122.464 1.67157L125.293 4.5L122.464 7.32843C122.269 7.52369 122.269 7.84027 122.464 8.03553C122.66 8.2308 122.976 8.2308 123.172 8.03553L126.354 4.85355ZM0 5H126V4H0V5Z" fill="currentColor"/>
                </svg>
            </router-link>
          </div>
          <div class="col-md-6  position-relative">
            <div class="index-about-shadow d-none d-md-block bg-primary rounded-4"></div>
            <div class="index-about-image border border-primary rounded-4 mt-4 "></div>
            <p class="index-about-title position-absolute end-0 bottom-0 pe-3 text-white text-end"  style="text-shadow: 1px 1px 2px #0008;">Theta<br>Healing</p>
          </div>
        </div>
      </div>
    </section>
    <section class="py-40">
      <h3 class="container mb-3">最新文章</h3>
      <div class="container px-3">
        <div class="row justify-content-center">
          <div class="col-sm-10 col-lg-8 px-3">
            <ul class="list-unstyled mb-3">
              <li v-for="article in articles" :key="article.id" class="border-bottom home-article p-3">
                <RouterLink :to="`/blog/${article.id}`" class="row align-items-center">
                  <div class="col-2 d-none d-lg-block mb-1 fs-14 fw-thin text-center">
                    {{ $filters.date(article.create_at) }}
                  </div>
                  <div class="col-2 p-0">
                    <img :src="article.imageUrl" alt="">
                  </div>
                  <div class="col-10 col-lg-8">
                    <div class="mb-1 fs-14 fw-thin d-lg-none">{{ $filters.date(article.create_at) }}</div>                
                    <div class="fs-4 fs-sm-3 text-primary">{{ article.title }}</div>
                    <div class="text-primary">
                      {{ article.description }}
                    </div>                    
                  </div>
                </RouterLink>                
              </li>
            </ul>
            <p class="text-end">
              <RouterLink to="/blog">...more</RouterLink>
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import LoaderComponent from '@/components/LoaderComponent.vue'
import { RouterLink } from 'vue-router'
const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data(){
    return {
      isLoading: false,
      articles:[]
    }
  },
  components: {
    RouterLink,
    LoaderComponent
  },
  methods:{
    scrollTo() {
      document.body.scrollTop = window.innerHeight;
      document.documentElement.scrollTop = window.innerHeight;
    },
    getArticles(){
      this.$http.get(`${VITE_URL}/api/${VITE_PATH}/articles`)
      .then((res) => {
          this.articles = res.data.articles.sort((a,b)=> b.create_at - a.create_at).splice(0,3)
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
.home-btn {
  transition: .3s;
  padding-top: 0;
  padding-bottom: 40px;

  &:hover {
    padding-bottom: 0;
    padding-top: 40px;
    span {
      animation: none;
    }
  }
  & span{
    transform: translate(0, 5px);
    animation: home-btn .8s linear infinite;
  }
}

@keyframes home-btn {
  0% {
    transform: translateY(5px);
  }
  50% {
    transform: translateY(10px);
  }
}

.home-article{
  &:hover {
    background-color: var(--bs-light);
  }
}
// *{outline: 1px solid #AAA}
</style>