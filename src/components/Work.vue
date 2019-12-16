<template>
  <div class="work">
    <div class="workLeft">
      <div class="BackBtn" @click="closeProject">
        <button>Back</button>
      </div>
      <div class="workMain">
        <h1>春風弦雨 - </h1>
        <h2>鄧雨賢非虛構圖文轉化</h2>
        <p>
        這是展覽簡介這是展覽簡介這是展覽簡介這是展覽簡介這是展覽簡介，
        這是展覽簡介這是展覽簡介這是展覽簡介這是展覽簡介這是展覽簡介，
        這是展覽簡介這是展覽簡介這是展覽簡介這是展覽簡介這是展覽簡介，
        這是展覽簡介這是展覽簡介這是展覽簡介這是展覽簡介這是展覽簡介，
        這是展覽簡介這是展覽簡介這是展覽簡介這是展覽簡介這是展覽簡介，
        這是展覽簡介這是展覽簡介這是展覽簡介這是展覽簡介這是展覽簡介，
        </p>
        <div class="workAuthor">
          <div class="author">黃郁婷</div>
          <div class="author">黃郁婷</div>
        </div>
      </div>
    </div>
    <div class="workRight">
      <img src="@/assets/img/test.jpg">
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'work',
  props: {
    msg: String
  },
  data () {
    return {
      workData: []
    }
  },
  methods: {
    closeProject () {
      this.$emit('close-project')
      console.log('close!')
    }
  },
  created () {
    let vm = this
    axios.get('js/projects.json').then(res => {
      vm.lworkData = res.data
      console.log(vm.workData)
      console.log('vm.workData')
    }).catch(err => {
      console.log(err, '失敗')
    })
  }
}
</script>
