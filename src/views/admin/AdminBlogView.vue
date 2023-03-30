<template>
  <div class="container">
     <div class="text-end mt-4">
       <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#articleModal" 
              @click="selectTempArticle({tag:[], content:''})">
         建立新的頁面
       </button>
     </div>
     <table class="table mt-4">
       <thead>
         <tr>
           <th style="width: 200px">標題</th>
           <th style="width: 200px">分類</th>
           <th>描述</th>
           <th style="width: 100px">建立時間</th>
           <th style="width: 100px">是否公開</th>
           <th style="width: 120px">編輯</th>
         </tr>
       </thead>
       <tbody>
         <tr v-for="article in articles" :key="article.id">
           <td>{{ article.title }}</td>
           <td>{{ article.author }}</td>
           <td>{{ article.description }}</td>
           <td>{{ $filters.date(article.create_at) }}</td>
           <td>
             <span v-if="article.isPublic">已上架</span>
             <span v-else>未上架</span>
           </td>
           <td>
             <div class="btn-group">
               <button
                 class="btn btn-outline-primary btn-sm" type="button"
                 data-bs-toggle="modal" data-bs-target="#articleModal" 
                 @click="selectTempArticle(article)">
                 編輯
               </button>
               <button
                 class="btn btn-outline-danger btn-sm"
                 type="button"
                 @click="deleteArticle(article.id)"
               >
                 刪除
               </button>
             </div>
           </td>
         </tr>
       </tbody>
     </table>
     <pagination :pages="pagination" @change-page="getAdminArticles"></pagination>
   </div>
   <div id="articleModal" ref="articleModal" class="modal fade" tabindex="-1" aria-labelledby="articleModalLabel" aria-hidden="true">
     <AdminBlogModal :article="tempArticle" :article-modal="articleModal" @edit-article="editArticle" @add-article="addArticle" />
   </div>
 </template>

<script>
import AdminBlogModal from '@/components/AdminBlogModal.vue'
import Pagination from '@/components/PaginationComponent.vue'
import { Modal } from 'bootstrap'
const { VITE_URL, VITE_PATH } = import.meta.env


export default {
  data(){
    return {
      tempArticle: {},
      articles:[],
      pagination: {},
      articleModal: null
    }
  },
  components: {
    Pagination, AdminBlogModal
  },
  methods: {
    getAdminArticles(page=1){
      this.$http.get(`${VITE_URL}/api/${VITE_PATH}/admin/articles?page=${page}`)
        .then((res) => {
          // console.log(res.data)
          this.articles = res.data.articles
          this.pagination = res.data.pagination
        })
        .catch((err) => {
          console.log(err)
        })
    },
    addArticle (article) {
      this.$http.post(`${VITE_URL}/api/${VITE_PATH}/admin/article`, { data: article })
        .then((res) => {
          alert(res.data.message)
          this.articleModal.hide()
          this.tempArticle = {content:''}
          this.getAdminArticles()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    editArticle (article) {
      this.$http.put(`${VITE_URL}/api/${VITE_PATH}/admin/article/${this.tempArticle.id}`, { data: article })
        .then((res) => {
          alert(res.data.message)
          this.articleModal.hide()
          this.tempArticle = {content:''}
          this.getAdminArticles()

        })
        .catch((err) => {
          console.log(err)
        })
    },
    deleteArticle (id) {
      if(window.confirm("確定要刪除?")){
        this.$http.delete(`${VITE_URL}/api/${VITE_PATH}/admin/article/${id}`)
          .then((res) => {
            alert(res.data.message)
            this.getAdminArticles()
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },
    selectTempArticle(article){
      if(article.id){
        this.$http.get(`${VITE_URL}/api/${VITE_PATH}/admin/article/${article.id}`)
        .then((res) => {
          this.tempArticle = res.data.article
        })
        .catch((err) => {
          console.log(err)
        })
      } else {
      this.tempArticle = article
      }
    }
  },
  mounted(){
    this.getAdminArticles()
    this.articleModal = new Modal('#articleModal');
  }
}
</script>

<style lang="scss">

</style>

