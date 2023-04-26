<template>
  <v-form  ref="form" class="row service-form"  v-slot="{ errors }">
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
            <div class="col-lg-8 mb-4">
              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="title" class="form-label">標題</label>
                  <v-field id="title" type="text" name="標題" class="form-control" :class="{ 'is-invalid': errors['標題'] }" placeholder="請輸入標題" v-model="tempCourse.title" rules="required"></v-field>
                  <error-message name="標題" class="invalid-feedback"></error-message>
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">圖示</label> (<a href="https://fonts.google.com/icons?icon.platform=android" target="_blank" class="text-decoration-underline">圖示庫</a>)
                  <v-field id="icon" type="text" name="圖示" class="form-control" :class="{ 'is-invalid': errors['圖示'] }" placeholder="請輸入圖示名稱" v-model="tempCourse.icon" rules="required"></v-field>
                  <span class="material-symbols-outlined ">{{ tempCourse.icon }}</span>
                  <error-message name="圖示" class="invalid-feedback"></error-message>
                </div>
              </div>
              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">價格</label>
                  <v-field id="price" type="number" min="0" name="價格" class="form-control" :class="{ 'is-invalid': errors['價格'] }" placeholder="請輸入價格" v-model="tempCourse.price" rules="required"></v-field>
                  <error-message name="價格" class="invalid-feedback"></error-message>
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">價格單位</label>
                  <v-field id="unit" type="text" name="價格單位" class="form-control" :class="{ 'is-invalid': errors['價格單位'] }" placeholder="請輸入價格單位" v-model="tempCourse.unit" rules="required"></v-field>
                  <error-message name="圖示" class="invalid-feedback"></error-message>
                </div>
              </div>
              <hr>
              <div class="mb-3">
                <label for="description" class="form-label">簡述</label>
                <editor name="簡述" v-model="tempCourse.description" :class="{ 'is-invalid': errors['簡述'] }" :init="init" rules="required"></editor>
                <error-message name="簡述" class="invalid-feedback"></error-message> 
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">說明內容</label>
                <editor v-model="tempCourse.content" :init="init"></editor>
              </div>
            </div>
            <div class="col-lg-4 mb-4">
              <div class="mb-2">
                <div class="mb-3">
                  <h6>列表圖片</h6>
                  <input id="imageUrl" v-model="tempCourse.imageUrl" type="text" class="form-control form-control-sm mb-2" placeholder="請輸入圖片連結">
                  <form enctype="multipart/form-data"  method="post">
                    <input type="file" name="file-to-upload" id="imageUpload" ref="file" placeholder="請選擇圖片" @change="uploadImage()" class="form-control">
                  </form>  
                </div>
                <img class="img-fluid" :src="tempCourse.imageUrl" alt="列表圖片">
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
                    <img class="img-fluid" :src="image" alt="內容圖片">
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
            <div class="col">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="needSession" 
                          :true-value="1" :false-value="0" v-model="tempCourse.origin_price">
                  <label class="form-check-label" for="needSession">須預約時段</label>
                </div>
                <div class="form-check">
                  <input id="is_enabled" class="form-check-input" type="checkbox"
                          :true-value="1" :false-value="0" v-model="tempCourse.is_enabled">
                  <label class="form-check-label" for="is_enabled">是否啟用</label>
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
          <button type="submit" class="btn btn-primary" v-else @click="addCourse(tempCourse, adminCourseModal)">
            確認新增
          </button>
        </div>
      </div>
    </div>
  </v-form>
</template>

<script>
import adminCoursesStore from '@/stores/adminCoursesStore.js'
import { mapState, mapActions } from "pinia";

import tinymce from 'tinymce/tinymce.js'
import 'tinymce/skins/ui/oxide/skin.css'
import 'tinymce/themes/silver'
import 'tinymce/icons/default'
import 'tinymce/plugins/emoticons';
import 'tinymce/plugins/emoticons/js/emojis.js';
import 'tinymce/plugins/table';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/quickbars';
import 'tinymce/plugins/image';
import 'tinymce-i18n/langs5/zh_TW.js'
import Editor from '@tinymce/tinymce-vue'

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