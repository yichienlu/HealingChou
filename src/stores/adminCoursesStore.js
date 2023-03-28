import { defineStore } from 'pinia'
import axios from "axios";
const { VITE_URL, VITE_PATH } = import.meta.env;

export default defineStore('adminCoursesStore', {
  state: () => ({
    tempCourse:{imagesUrl:['']},
    courses:[],
    services:[],
    service_pagination: {},
    course_pagination: {},
    
  }),
  actions: {
    getAdminServices(page = 1){
      axios.get(`${VITE_URL}/api/${VITE_PATH}/admin/products?page=${page}&category=service`)
      .then((res)=>{
        this.services = res.data.products
        this.service_pagination = res.data.pagination
      })
    },
    getAdminCourses(page = 1){
      axios.get(`${VITE_URL}/api/${VITE_PATH}/admin/products?page=${page}&category=course`)
      .then((res)=>{
        this.courses = res.data.products
        this.course_pagination = res.data.pagination
      })
    },
    addCourse(tempCourse, modal){
      axios.post(`${VITE_URL}/api/${VITE_PATH}/admin/product`, {"data": tempCourse})
      .then((res)=>{
        this.clearInputs()
        modal.hide();
        alert(res.data.message);
        this.tempCourse = {imagesUrl:['']}
        if(tempCourse.category=='service'){
          this.getAdminServices()
        }else{
          this.getAdminCourses()
        }
      })
      .catch((err)=>{
        alert(err.response.data.message)
      })
    },
    editCourse(tempCourse, modal){
      axios.put(`${VITE_URL}/api/${VITE_PATH}/admin/product/${tempCourse.id}`,{"data":tempCourse})
      .then((res)=>{
        // console.log(res.data)
        this.clearInputs()
        modal.hide();
        alert(res.data.message);
        this.tempCourse = {imagesUrl:['']}
        if(tempCourse.category=='service'){
          this.getAdminServices()
        }else{
          this.getAdminCourses()
        }
      })
      .catch((err)=>{
        console.dir(err)
      })
    },
    deleteCourse(category, id){
      if(window.confirm("確定要刪除?")){
        axios.delete(`${VITE_URL}/api/${VITE_PATH}/admin/product/${id}`)
        .then(()=>{
          if(category=='service'){
            this.getAdminServices()
          } else if(category=='course') {
            this.getAdminCourses()
          }
        })
        .catch((err)=>{
          console.dir(err)
        })
      }
    },
    uploadImage(){
      const imageUrl = document.querySelector('#imageUpload')
      const file = imageUrl.files[0]
      const formData = new FormData();
      formData.append('file-to-upload', file)
      axios.post(`${VITE_URL}/api/${VITE_PATH}/admin/upload`, formData)
      .then((res)=>{
        this.tempCourse.imageUrl = res.data.imageUrl
      })
      .catch((err)=>{
        console.log(err.response)
      })
    },
    uploadImages(index){
      const imagesUrl = document.querySelectorAll('.imagesUpload')
      const file = imagesUrl[index].files[0]
      const formData = new FormData();
      formData.append('file-to-upload', file)

      axios.post(`${VITE_URL}/api/${VITE_PATH}/admin/upload`, formData)
      .then((res)=>{
        this.tempCourse.imagesUrl[index] = res.data.imageUrl
      })
      .catch((err)=>{
        console.log(err.response)
      })
    },
    clearInputs() {
      document.querySelector('#imageUrl').value = null
      if (Array.isArray(this.tempCourse.imagesUrl)) {
        this.images = [...document.querySelectorAll('#imagesUrl')]
        this.images.forEach(function (item) {
          item.value = null
        })
      }
    },
    selectTempCourse(course){
      this.tempCourse = course
    }
  }
})