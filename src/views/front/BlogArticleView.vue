<template>

<div class="position-relative">
  <h1
    class="text-white bg-image text-center fs-1 py-40 py-lg-80 lh-1 mb-0"
    style="background-image: url(src/assets/images/banner-tarot-06.jpg)"
  >
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
                <a href="./blog.html">舟舟小療</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                與童年、與原生、與過去的自己和解，多麼的美好
              </li>
            </ol>
          </nav>
          <h2 class="mt-4">與童年、與原生、與過去的自己和解，多麼的美好</h2>
          <div class="fs-14 mb-4">2022/9/6</div>

          <img src="@/assets/images/blog-01.jpg" alt="" />
          <p>
            以下是小水手針對金錢靈氣+希塔療癒的回饋，內容好動人，經過同意分享給大家🥰
          </p>
          <p>｡o♡o｡+｡o♡o｡+｡o♡o｡+｡o♡o｡+｡o♡o｡+</p>
          <p>
            我喜愛我的童年，我愛我的原生家庭，願我能有強大的力量回饋並且照顧這一切，紀錄下這些改變，支持自己再走下去，不要放棄。
          </p>
          <p>
            童年，一直是我非常不願敞開的一塊，小時候的自卑，讓生活比想像中辛苦並且充滿困難，長大之後，我找到另一個家庭，並且認為老天待我不薄，讓我在另一個家庭得到愛、支持、包容與豐盛，於是我選擇遺忘童年與原生，並且在需要支持的時候，選擇不再努力，甚至我開始憎恨。
          </p>
          <p>
            不知道這樣多久，我開始感到辛苦，即便我一直不斷努力，還是好累，試過無數次療癒，想解決卻解決不了，因為我始終無法承認自己身上原來藏著那麼多恨，於是這樣過了很多年。
          </p>
          <p>
            直到最近爺爺過世，剛好是我正在經歷各種考驗的此時此刻，回了原生家族一趟，發現在前陣子的一場療癒之中，無意中看見並面對了童年的一塊，在這次面對原生時才注意到，我已不再憎恨經歷的童年，也不再以為原生的愛離我遙遠，相反的，我感受到滿滿的愛，原來，我還有那麼多家人，甚至那些親戚之間過去以為的仇視相罵都成了可愛的溝通模式。
          </p>
          <p>
            在我以為自己在心靈成長的過程中退步的時候，才發現並不是退步，而是其他的方式正在推動此刻的我去經歷，我們都知道苦難是禮物的道路，但我們太把苦難當一回事，都忘了真正期待禮物的顯化。
          </p>
          <p>
            總而言之，與童年、與原生、與過去的自己和解，多麼的美好，感覺真像自然產可愛的經驗，真實的體驗痛與不痛，不是盲從面對，而是真實的面對體驗此時此刻的自己，生出來的時候，才發現沒那麼難，痛也忘了。
          </p>
          <p>謝謝宇宙送我這個禮物，讓我重新走回原生，愛上原生家族的一切。</p>
          <p>｡o♡o｡+｡o♡o｡+｡o♡o｡+｡o♡o｡+｡o♡o｡+</p>
          <p>
            最近舟舟我自己因為沒什麼動力，也以為自己是不是心靈成長的退步。結果自我療癒時，我的內在小孩跑出來，成為一個很穩定很強大的存在，提醒著我不需要鞭策自己，持續地去經驗，慢慢尋找什麼是自己喜歡的，我才恍然大悟，沒有動力不是不好的事情，他就是一種狀態、一種存在模式。
          </p>
          <p>非常高興水手們在過程中都會不斷地跟我分享心境的變化。</p>
          <p>我們都會不斷地一同成長的，開心路上有你們。</p>
          <p>💞💞💞💞💞</p>
          <div>
            <span class="badge rounded-pill bg-secondary fw-thin"
              >水手回饋</span
            >
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-beige py-40 py-lg-80">
    <h2 class="container mb-4">更多文章</h2>
    <div class="container">
      <div class="d-flex align-items-center">
        <swiper
        class="swiper blog-swiper"
        :modules="modules"
        :loop="true"
        navigation
        :breakpoints="swiperOptions.breakpoints"
        >
        <swiper-slide class="swiper-slide align-self-stretch">
          <RouterLink to="" class="blog-more-item d-block h-100">
            <div class="p-2">
              <div
                class="d-block blog-more-item-image bg-image mb-2"
                style="background-image: url(src/assets/images/blog-02.jpg)"
              ></div>
              <h3 class="fs-6">壓克力畫課程體驗</h3>
            </div>
          </RouterLink>
        </swiper-slide>
        <swiper-slide class="swiper-slide align-self-stretch">
          <RouterLink to="" class="blog-more-item d-block h-100">
            <div class="p-2">
              <div
                class="d-block blog-more-item-image bg-image mb-2"
                style="background-image: url(src/assets/images/blog-03.jpg)"
              ></div>
              <h3 class="fs-6">生命樹工作坊後記</h3>
            </div>
          </RouterLink>
        </swiper-slide>
        <swiper-slide class="swiper-slide align-self-stretch">
          <RouterLink to="" class="blog-more-item d-block h-100">
            <div class="p-2">
              <div
                class="d-block blog-more-item-image bg-image mb-2"
                style="background-image: url(src/assets/images/blog-04.jpg)"
              ></div>
              <h3 class="fs-6">壓克力畫課程體驗</h3>
            </div>
          </RouterLink>
        </swiper-slide>
        <swiper-slide class="swiper-slide align-self-stretch">
          <RouterLink to="" class="blog-more-item d-block h-100">
            <div class="p-2">
              <div
                class="d-block blog-more-item-image bg-image mb-2"
                style="background-image: url(src/assets/images/blog-05.jpg)"
              ></div>
              <h3 class="fs-6">舟舟小療</h3>
            </div>
          </RouterLink>
        </swiper-slide>
        <swiper-slide class="swiper-slide align-self-stretch">
          <RouterLink to="" class="blog-more-item d-block h-100">
            <div class="p-2">
              <div
                class="d-block blog-more-item-image bg-image mb-2"
                style="background-image: url(src/assets/images/blog-06.jpg)"
              ></div>
              <h3 class="fs-6">深度挖掘課程昨日結業紀錄</h3>
            </div>
          </RouterLink>
        </swiper-slide>
        <swiper-slide class="swiper-slide align-self-stretch">
          <RouterLink to="" class="blog-more-item d-block h-100">
            <div class="p-2">
              <div
                class="d-block blog-more-item-image bg-image mb-2"
                style="background-image: url(src/assets/images/blog-07.jpg)"
              ></div>
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

export default {
  components: {
    RouterLink,
    Swiper,
    SwiperSlide
  },
  data(){
    return {
      article:{},
      articles:[],
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
  setup () {
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
  mounted(){
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
*{
  outline:1px solid #AAA
}
swiper-slide {
  height: 200px;
}
</style>

