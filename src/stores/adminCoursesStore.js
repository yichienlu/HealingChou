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
        console.log(res.data)
        this.services = res.data.products

        this.service_pagination = res.data.pagination
        console.log(this.service_pagination)
      })
    },
    getAdminCourses(page = 1){
      axios.get(`${VITE_URL}/api/${VITE_PATH}/admin/products?page=${page}&category=course`)
      .then((res)=>{
        console.log(res.data)
        this.courses = res.data.products

        this.course_pagination = res.data.pagination
        console.log(this.course_pagination)

      })
    },
    addCourse(tempCourse, modal){
      axios.post(`${VITE_URL}/api/${VITE_PATH}/admin/product`, {"data": tempCourse})
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
        // console.log(err)
        alert(err.response.data.message)
      })
    },
    editCourse(tempCourse, modal){
      axios.put(`${VITE_URL}/api/${VITE_PATH}/admin/product/${tempCourse.id}`,{"data":tempCourse})
      .then((res)=>{
        console.log(res.data)
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
        // alert(err.data.message)
      })
    },
    deleteCourse(id, modal){
      // console.log(id)
      axios.delete(`${VITE_URL}/api/${VITE_PATH}/admin/product/${id}`)
      .then((res)=>{
        console.log(res.data)
        modal.hide()
        alert(res.data.message)
        this.getAdminCourses()
      })
      .catch((err)=>{
        console.dir(err)
      })
    },
    uploadImage(){
      const imageUrl = document.querySelector('#imageUrl')
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
      const imagesUrl = document.querySelectorAll('#imagesUrl')
      const file = imagesUrl[index].files[0]
      const formData = new FormData();
      formData.append('file-to-upload', file)

      axios.post(`${VITE_URL}/api/${VITE_PATH}/admin/upload`, formData)
      .then((res)=>{
        // console.log(res)
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
      // console.log(this.tempCourse)
    }
  }
})