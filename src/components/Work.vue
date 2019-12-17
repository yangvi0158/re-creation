<template>
  <div class="work">
    <div class="workLeft">
      <div class="BackBtn" @click="closeProject">
        <button>Back</button>
      </div>
      <div class="workMain">
        <h1>{{ workData[0].title }}</h1>
        <h2>{{ workData[0].subtitle }}</h2>
        <p>{{ workData[0].projectInfo }}</p>
        <div class="workAuthor">
          <div class="author" v-for="item in workData[0].author" :key="item.name">
            <img :src="item.img">
            {{item.name}}
          </div>
        </div>
      </div>
    </div>
    <div class="workRight">
      <img :src="workData[0].photo[0].imgUrl">
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'work',
  props: {
    workId: String,
    workNum: Number
  },
  data () {
    return {
      workid: this.workId,
      worknum: this.workNum,
      projectsData: [],
      workData: {}
    }
  },
  methods: {
    closeProject () {
      this.$emit('close-project')
    },
    getWorkData () {
      let vm = this
      this.workData = vm.projectsData.filter((item) => item.id === vm.workid)
      console.log(this.workData)
    }
  },
  created () {
    let vm = this
    axios.get('js/projects.json').then(res => {
      vm.projectsData = res.data[vm.worknum]
      vm.getWorkData()
    }).catch(err => {
      console.log(err, '失敗')
    })
  },
  watch: {
    workId () {
      this.workid = this.workId
    },
    workNum () {
      this.worknum = this.workNum
    }
  }
}
</script>
