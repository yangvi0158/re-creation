<template>
  <div class="work">
    <div class="workLeft" style="backgroundImage: url('@/assets/img/work/人人之間.svg')">
      <div class="BackBtn">
        <img src="@/assets/img/logo.png" @click="closeProject"><div></div><p>Back</p>
      </div>
      <div class="workMain">
        <h1>{{ workData[0].title }}</h1>
        <h2>{{ workData[0].subtitle }}</h2>
        <p>{{ workData[0].projectInfo }}</p>
        <div class="workAuthor">
          <div class="author" v-for="item in workData[0].author" :key="item.name">
            <div class="authorImg" :style="{backgroundImage: `url(${item.img})`}"></div>
            <!--img :src="item.img"-->
            <p>{{item.name}}</p>
            <a :href=" `mailto:${item.email}` " v-if="item.email">
              <img src="@/assets/img/work/icon_email.svg">
            </a>
            <a :href="item.website" target="_blank" v-if="item.website">
              <img src="@/assets/img/work/icon_web.svg">
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="workRight" :style="{width: this.workWidth+'px'}">
      <slider :work-data="workData"></slider>
      <!--img :src="workData[0].photo[0].imgUrl"-->
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import slider from '@/components/VueSlider.vue'
export default {
  name: 'work',
  components: {
    slider
  },
  props: {
    workId: String,
    workNum: Number
  },
  data () {
    return {
      workWidth: 'auto',
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
      // console.log(this.workData)
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
  mounted () {
    let vm = this
    if (document.body.clientHeight <= 900) {
      vm.workWidth = (document.body.clientHeight / 1.238).toFixed(2)
    }
    window.onresize = () => {
      vm.workWidth = (document.body.clientHeight / 1.238).toFixed(2)
      // console.log('resize!')
    }
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
