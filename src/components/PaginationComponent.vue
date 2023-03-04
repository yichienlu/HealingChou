<template>
  <nav aria-label="Page navigation">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span class="material-symbols-outlined fs-6">
              navigate_before
            </span>
          </a>
        </li>
        <li class="page-item active"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span class="material-symbols-outlined fs-6">
              navigate_next
            </span>
          </a>
        </li>
      </ul>
    </nav>

    <!-- 
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item"  :class="{ disabled: !pages.has_pre }">
          <a class="page-link" href="#" aria-label="Previous" @click.prevent="$emit('change-page', pages.current_page - 1)">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item" :class="{ active: page === pages.current_page }" v-for="page in pages.total_pages" :key="page + 'page'">
          <a class="page-link" href="#" 
          @click.prevent="$emit('change-page', page)"
          >{{ page }}</a>
        </li>
        <li class="page-item"  :class="{ disabled: !pages.has_next }">
          <a class="page-link" href="#" aria-label="Next" @click.prevent="$emit('change-page', pages.current_page + 1)">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
     -->
</template>

<script>
  export default {
    data(){
      return {
        
      }
    },
    props:['pages'],
    methods: {
      changePage (page) {
        this.$emit('emitPages', page);
      }
    }
  }
</script>
<!-- https://github.com/yichienlu/Vue2023_Week7/blob/main/src/components/PaginationComponent.vue -->
