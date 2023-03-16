<template>
  <div class="container">
    <div class="text-end mt-4">
      <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#adminCourseModal" @click="selectTempCourse({imagesUrl:[''], category:'service', description:'', content:'', origin_price: 0, })">
        建立新的服務
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>服務名稱</th>
          <th>服務簡述</th>
          <th width="120">
            價格
          </th>
          <th width="100">
            是否啟用
          </th>
          <th width="120">
            編輯
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="service in services" :key="service.id">
          <td>{{ service.title }}</td>
          <td>{{ service.description }}</td>
          <td class="text-end">{{ service.price }}</td>
          <td>
            <span class="text-success" v-if="service.is_enabled == 1">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button type="button" class="btn btn-outline-primary btn-sm" data-bs-toggle="modal" data-bs-target="#adminCourseModal" @click="selectTempCourse(JSON.parse(JSON.stringify(service)))">
                編輯
              </button>
              <button type="button" class="btn btn-outline-danger btn-sm" @click="selectTempCourse(service)">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <pagination :pages="service_pagination"  @change-page="getAdminServices"></pagination>
  </div>

  <div class="container">
    <div class="text-end mt-4">
      <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#adminCourseModal" @click="selectTempCourse({imagesUrl:[''], category:'course', description:'', content:'', origin_price: 0})">
        建立新的課程
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>課程名稱</th>
          <th>課程簡述</th>
          <th width="120">
            價格
          </th>
          <th width="100">
            是否啟用
          </th>
          <th width="120">
            編輯
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="course in courses" :key="course.id">
          <td>{{ course.title }}</td>
          <td>{{ course.description }}</td>
          <td class="text-end">{{ course.price }}</td>
          <td>
            <span class="text-success" v-if="course.is_enabled == 1">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button type="button" class="btn btn-outline-primary btn-sm" data-bs-toggle="modal" data-bs-target="#adminCourseModal" @click="selectTempCourse(JSON.parse(JSON.stringify(course)))">
                編輯
              </button>
              <button type="button" class="btn btn-outline-danger btn-sm" @click="deleteCourse(course.id)">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <pagination :pages="course_pagination"  @change-page="getAdminCourses"></pagination>
  </div>


  <div id="adminCourseModal" ref="adminCourseModal" class="modal fade" tabindex="-1" aria-labelledby="courseModalLabel" aria-hidden="true">
    <admin-course-modal :admin-course-modal="adminCourseModal" ></admin-course-modal>
  </div>

</template>

<script>
import Pagination from '@/components/PaginationComponent.vue';
import AdminCourseModal from '@/components/AdminCourseModal.vue';
import adminCoursesStore from '@/stores/adminCoursesStore.js'
import { mapState, mapActions } from "pinia";
import { Modal } from 'bootstrap'

export default {
  data () {
    return {
      adminCourseModal: null,
    }
  },
  computed:{
    ...mapState(adminCoursesStore, ['tempCourse','courses', 'services', 'service_pagination', 'course_pagination'])
  },
  components: {
    Pagination, 
    AdminCourseModal
  },
  methods:{
    ...mapActions(adminCoursesStore, ['getAdminCourses', 'getAdminServices', 'selectTempCourse', 'deleteCourse'])
  },
  mounted(){
    this.getAdminServices();
    this.getAdminCourses();
    this.adminCourseModal = new Modal('#adminCourseModal')
  }
}
</script>


