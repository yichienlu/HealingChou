<template>
  <div class="container my-5">
     <h1>優惠券管理</h1>
     <div class="text-end mt-3">
       <button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#couponModal" @click="this.tempCoupon = {is_enabled: 0}">
         建立新的優惠券
       </button>
     </div>
     <table class="table mt-4">
       <thead>
       <tr>
         <th>名稱</th>
         <th>折扣百分比</th>
         <th>到期日</th>
         <th>是否啟用</th>
         <th>編輯</th>
       </tr>
       </thead>
       <tbody>
       <tr v-for="(coupon, key) in coupons" :key="key">
         <td>
           {{ coupon.title }}
           {{ typeof(coupon.title) }}
         </td>
         <td>{{ coupon.percent }}%</td>
         <td>
           {{ $filters.date(coupon.due_date) }}
         </td>
         <td>
           <span v-if="coupon.is_enabled === 1" class="text-success">啟用</span>
           <span v-else class="text-muted">未啟用</span>
         </td>
         <td>
           <div class="btn-group">
             <button type="button" class="btn btn-outline-primary btn-sm" data-bs-toggle="modal" data-bs-target="#couponModal" 
                     @click="this.tempCoupon = JSON.parse(JSON.stringify(coupon))">
               編輯
             </button>
             <button type="button" class="btn btn-outline-danger btn-sm" @click="deleteCoupon(coupon.id)">
               刪除
             </button>
           </div>
         </td>
       </tr>
       </tbody>
     </table>
     <pagination :pages="pagination"  @change-page="getAdminCoupons"></pagination>
 
   </div>
   <div id="couponModal" ref="couponModal" class="modal fade" tabindex="-1" aria-labelledby="couponModalLabel" aria-hidden="true">
     <coupon-modal :coupon="tempCoupon" :coupon-modal="couponModal" @edit-coupon="editCoupon" @add-coupon="addCoupon"></coupon-modal>
   </div>
 </template>
 
 <script>
 import Pagination from '@/components/PaginationComponent.vue';
 import CouponModal from '@/components/CouponModal.vue'
 import { Modal } from 'bootstrap'
 
 const { VITE_URL, VITE_PATH } = import.meta.env
 
 export default {
   data(){
     return {
       tempCoupon: {},
       coupons: [],
       couponModal: null,
       pagination:{}
     }
   },
   components: {
     CouponModal, Pagination
   },
   methods: {
     getAdminCoupons(page=1){
       this.$http.get(`${VITE_URL}/api/${VITE_PATH}/admin/coupons/?page=${page}`)
         .then((res) => {
           // console.log(res)
           this.coupons = res.data.coupons
           this.pagination = res.data.pagination
         })
         .catch((err) => {
           console.log(err)
         })
     },
     addCoupon (coupon) {
       this.$http.post(`${VITE_URL}/api/${VITE_PATH}/admin/coupon`, { data: coupon })
         .then((res) => {
           alert(res.data.message)
           this.couponModal.hide()
           this.getAdminCoupons()
 
         })
         .catch((err) => {
           console.log(err)
         })
     },
     editCoupon (coupon) {
       this.$http.put(`${VITE_URL}/api/${VITE_PATH}/admin/coupon/${this.tempCoupon.id}`, { data: coupon })
         .then((res) => {
           alert(res.data.message)
           this.couponModal.hide()
           this.getAdminCoupons()
 
         })
         .catch((err) => {
           console.log(err)
         })
     },
     deleteCoupon (id) {
       this.$http.delete(`${VITE_URL}/api/${VITE_PATH}/admin/coupon/${id}`)
         .then((res) => {
           alert(res.data.message)
           this.getAdminCoupons()
 
         })
         .catch((err) => {
           console.log(err)
         })
     }
   },
   mounted(){
     this.getAdminCoupons()
     this.couponModal = new Modal('#couponModal');
   }
 }
 </script>