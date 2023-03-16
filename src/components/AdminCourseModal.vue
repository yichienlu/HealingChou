<template>
  <div class="modal-dialog modal-xl">
    <div class="modal-content border-0">
      <div class="modal-header bg-dark text-white">
        <h5 id="courseModalLabel" class="modal-title">
          <span v-if="tempCourse.id&&tempCourse.category=='service'">編輯服務</span>
          <span v-else-if="tempCourse.id&&tempCourse.category=='course'">編輯課程</span>
          <span v-else-if="!tempCourse.id&&tempCourse.category=='service'">新增服務</span>
          <span v-else>新增課程</span>
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="clearInputs()"></button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-sm-4 mb-4">
              <div class="mb-2">
                <div class="mb-3">
                  <h6>列表圖片</h6>
                  <input id="imageUrl" v-model="tempCourse.imageUrl" type="text" class="form-control form-control-sm mb-2" placeholder="請輸入圖片連結">
                  <form enctype="multipart/form-data"  method="post">
                    <input type="file" name="file-to-upload" id="imageUpload" ref="file" placeholder="請選擇圖片" @change="uploadImage()" class="form-control">
                    <!-- <input type="submit" value="上傳"> -->
                  </form>  
                </div>
                <img class="img-fluid" :src="tempCourse.imageUrl" alt="">
              </div>
              <div class="mb-2">
                <h6>內容圖片</h6>
                  <div v-for="(image, index) in tempCourse.imagesUrl" :key="index" class="mb-3">
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="請輸入圖片連結" v-model="tempCourse.imagesUrl[index]" :id="`imageUrl-${index}`">
                        <form enctype="multipart/form-data"  method="post">
                          <input type="file" name="file-to-upload" :id="`imagesUpload-${index}`" class="form-control imagesUpload" ref="file" placeholder="請選擇圖片" @change="uploadImages(index)">
                        </form>  
                    </div>
                    <img class="img-fluid" :src="image" alt="">
                  </div>
              </div>
              <div>
                <button class="btn btn-outline-danger btn-sm d-block w-100" @click="tempCourse.imagesUrl.length > 1 ? tempCourse.imagesUrl.pop() : tempCourse.imagesUrl[0]=''">
                  刪除圖片
                </button>
                <button class="btn btn-outline-primary btn-sm d-block w-100" @click="tempCourse.imagesUrl.push('')">
                  新增次要圖片
                </button>
              </div>
          </div>
          <div class="col-sm-8">
            <div class="row">
              <div class="mb-3 col-md-6">
                <label for="title" class="form-label">標題</label>
                <input id="title" type="text" class="form-control" placeholder="請輸入標題" v-model="tempCourse.title">
              </div>

              <div class="mb-3 col-md-6">
                <label for="price" class="form-label">小圖示</label> (<a href="https://fonts.google.com/icons?icon.platform=android" target="_blank" class="text-decoration-underline">圖示庫</a>)
                <input id="unit" type="text" class="form-control" placeholder="請輸入圖示名稱" v-model="tempCourse.unit">
                <span class="material-symbols-outlined ">{{ tempCourse.unit }}</span>
              </div>
            </div>

            <div class="row">

              <div class="mb-3 col-md-6">
                <label for="price" class="form-label">價格</label>
                <input id="price" type="number" min="0" class="form-control"
                        placeholder="請輸入價格" v-model="tempCourse.price">
              </div>
              <!-- <div class="mb-3 col-md-6">
                <label for="price" class="form-label">origin價格</label>
                <input id="price" type="number" min="0" class="form-control"
                        placeholder="請輸入價格" v-model="tempCourse.origin_price">
              </div> -->
            </div>
            <hr>

            <div class="mb-3">
              <label for="description" class="form-label">簡述</label>
              <editor v-model="tempCourse.description" :init="init"></editor>
            </div>
            <div class="mb-3">
              <label for="content" class="form-label">說明內容</label>
              <editor v-model="tempCourse.content" :init="init"></editor>
            </div>
            <div class="mb-3">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="needSession" 
                        :true-value="1" :false-value="0" v-model="tempCourse.origin_price">
                <label class="form-check-label" for="needSession">
                  須預約時段
                </label>
              </div>
              <div class="form-check">
                <input id="is_enabled" class="form-check-input" type="checkbox"
                        :true-value="1" :false-value="0" v-model="tempCourse.is_enabled">
                <label class="form-check-label" for="is_enabled">是否啟用</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal" @click="clearInputs(); selectTempCourse({imagesUrl:['']})">
          取消
        </button>
        <button type="button" class="btn btn-primary" v-if="tempCourse.id" @click="editCourse(tempCourse, adminCourseModal)">
          確認編輯
        </button>
        <button type="button" class="btn btn-primary" v-else @click="addCourse(tempCourse, adminCourseModal)">
          確認新增
        </button>
      </div>
    </div>
  </div>
</template>

<script>

import adminCoursesStore from '@/stores/adminCoursesStore.js'
import { mapState, mapActions } from "pinia";

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
import 'tinymce/plugins/lists';
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/quickbars';
import 'tinymce/plugins/image';
// import 'tinymce/plugins/editimage';
// 語言包
import 'tinymce-i18n/langs5/zh_TW.js'
// TinyMCE-Vue
import Editor from '@tinymce/tinymce-vue'

// https://www.tiny.cloud/docs/tinymce/6/image/

export default {
  data(){
    return {
      init: {
        language: 'zh_TW',
        height: 150,
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
    'adminCourseModal':{},
    value: {
      type: String,
      default: '',
    },
    plugins: {
      type: [String, Array],
      default: 'quickbars lists advlist image emoticons table',
    },
    toolbar: {
      type: [String, Array],
      default:
        'bold italic underline | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify| bullist numlist |outdent indent | undo redo | axupimgs | removeformat | emoticons |table |image rotateleft rotateright | imageoptions',
    },
  },
  methods:{
    ...mapActions(adminCoursesStore, ['addCourse', 'editCourse','uploadImage','uploadImages','clearInputs', 'selectTempCourse'])
  },
  computed:{
    ...mapState(adminCoursesStore, ['tempCourse'])
  },
  mounted(){
    tinymce.init({})
  }
}

</script>