<template>
  <div class="modal-dialog modal-xl" role="document">
    <div class="modal-content border-0">
      <div class="modal-header bg-dark text-white">
        <h5 class="modal-title" id="exampleModalLabel">
          <span v-if="tempArticle.id">編輯貼文</span>
          <span v-else>新增貼文</span>
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-sm-8">
            <div class="mb-3">
              <label for="title" class="form-label">標題</label>
              <input
                type="text"
                class="form-control"
                id="title"
                v-model="tempArticle.title"
                placeholder="請輸入標題"
              />
            </div>            
            <div class="row">
              <div class="col">
                <div class="mb-3">
                  <label for="author" class="form-label">分類</label>
                  <input
                    type="text"
                    class="form-control"
                    id="author"
                    v-model="tempArticle.author"
                    placeholder="請輸入標題"
                  />
                </div>
              </div>
              <div class="col">
                <div class="mb-3">
                  <label for="create_at" class="form-label">文章建立日期</label>
                  <input type="date" class="form-control" id="create_at" v-model="this.create_at"/>
                </div>
              </div>
            </div>            
            <div class="mb-3">
              <label for="description" class="form-label">文章描述</label>
              <textarea
                type="text"
                class="form-control"
                id="description"
                v-model="tempArticle.description"
                placeholder="請輸入文章描述"
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="content" class="form-label">文章內容</label>
              <editor v-model="tempArticle.content" :init="init"></editor>
            </div>
            <div class="mb-3">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="tempArticle.isPublic"
                  id="isPublic"
                />
                <label class="form-check-label" for="isPublic">
                  是否公開
                </label>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="mb-3">
              <label for="image" class="form-label">輸入圖片網址</label>
              <input
                type="text"
                class="form-control"
                id="imageUrl"
                v-model="tempArticle.imageUrl"
                placeholder="請輸入圖片連結"
              />
              <form enctype="multipart/form-data"  method="post">
                <input type="file" name="file-to-upload" id="imageUpload" ref="file" placeholder="請選擇圖片" @change="uploadImage()" class="form-control">
              </form>  
              <img class="img-fluid" :src="tempArticle.imageUrl" alt="文章圖片">
            </div>
            <label for="tag" class="form-label">標籤</label>
            <div class="row gx-1 mb-3">
              <div class="col-md-2 mb-1"
                v-for="(label, key) in tempArticle.tag" :key="key">
                <div class="input-group input-group-sm">
                  <input type="text" class="form-control form-control"
                    id="tag" v-model="tempArticle.tag[key]" placeholder="請輸入標籤"/>
                  <button
                    type="button"
                    class="btn btn-danger"
                    @click="tempArticle.tag.splice(key, 1)"
                  >
                    X
                  </button>
                </div>
              </div>
              <div class="col-md-2 mb-1">
                <button
                  v-if="tempArticle.tag"
                  class="btn btn-outline-primary btn-sm d-block w-100"
                  type="button"
                  @click="tempArticle.tag.push('')"
                  :disabled="tempArticle.tag[tempArticle.tag?.length-1]==''"
                >
                  新增標籤
                </button>
                <button
                  v-else
                  class="btn btn-outline-primary btn-sm d-block w-100"
                  type="button"
                  @click="tempArticle.tag = ['']"
                >
                  新增標籤
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-outline-secondary"
          data-bs-dismiss="modal"
          @click="tempArticle = {content:''}"
        >
          取消
        </button>
        <button type="button" class="btn btn-primary" v-if="tempArticle.id" @click="this.$emit('editArticle', article)">
              確認編輯
            </button>
            <button type="button" class="btn btn-primary" v-else  @click="this.$emit('addArticle', article)">
              確認新增
            </button>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  import tinymce from 'tinymce/tinymce.js'
  // 外觀
  import 'tinymce/skins/ui/oxide/skin.css'
  import 'tinymce/themes/silver'
  // Icon
  import 'tinymce/icons/default'
  // 用到的外掛
  import 'tinymce/plugins/emoticons';
  import 'tinymce/plugins/emoticons/js/emojis.js';
  import 'tinymce/plugins/table';
  import 'tinymce/plugins/quickbars';
  // 語言包
  import 'tinymce-i18n/langs5/zh_TW.js'
  // TinyMCE-Vue
  import Editor from '@tinymce/tinymce-vue'
  
  const { VITE_URL, VITE_PATH } = import.meta.env

  export default {
    data(){
      return {
        tempArticle: {},
        create_at: 0,
        init: {
          language: 'zh_TW',
          height: 500,
          menubar: false,
          content_css: false,
          skin: false,
          plugins: this.plugins,
          toolbar: this.toolbar,
          quickbars_insert_toolbar: false,
          branding: false,
        },
      }
    },
    components: {
      Editor,
    },
    props: {
      'articleModal':{}, 
      'article':{},
      value: {
        type: String,
        default: '',
      },
      plugins: {
        type: [String, Array],
        default: 'quickbars emoticons table',
      },
      toolbar: {
        type: [String, Array],
        default:
          ' bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify|bullist numlist |outdent indent blockquote | undo redo | axupimgs | removeformat | emoticons |table',
      },
    },
  
    watch: {
      article(){
        this.tempArticle = this.article;
        var date = new Date(this.tempArticle.create_at*1000)
        this.create_at = `${date.getFullYear()}-${ date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1}-${date.getDate() < 10 ? '0'+(date.getDate()) : date.getDate()}` ;
        // this.create_at  = date.toISOString().split('T')[0]
        // console.log(this.create_at)
      },
      create_at() {
        this.tempArticle.create_at = Math.floor(new Date(this.create_at) / 1000);
      },
  
    },
    methods:{
      uploadImage(){
        const imageUrl = document.querySelector('#imageUpload')
        const file = imageUrl.files[0]
        const formData = new FormData();
        formData.append('file-to-upload', file)
        this.$http.post(`${VITE_URL}/api/${VITE_PATH}/admin/upload`, formData)
        .then((res)=>{
          this.tempArticle.imageUrl = res.data.imageUrl
        })
        .catch((err)=>{
          console.log(err.response)
        })
      },
    },
    mounted(){
      tinymce.init({})
    }
  }
  </script>