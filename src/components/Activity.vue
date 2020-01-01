<template>
  <div class="activity">
    <div class="BackBtn">
        <img src="@/assets/img/logo.png" @click="closeActivity"><div></div><p>Back</p>
    </div>
    <div class="activity-main">
        <div class="activity-mainTop">
            <div class="activity-mainTop-left">
                <h1>{{ lectureData[activityNumber].lecture }}</h1>
                <h2>{{ lectureData[activityNumber].subtitle }}</h2>
                <div class="activity-detail-desktop">
                    <div class="activity-detail-time">
                      <img src="@/assets/img/activities/dot.png">{{ lectureData[activityNumber].detail.time }}
                    </div>
                    <div class="activity-detail-place">
                      <img src="@/assets/img/activities/dot.png">剝皮寮歷史街區 13號展間
                    </div>
                    <div class="activity-detail-speaker">
                      <img src="@/assets/img/activities/dot.png">{{ lectureData[activityNumber].detail.speaker_info }}
                    </div>
                </div>
            </div>
            <div class="activity-date_desktop">
              <img :src="lectureData[activityNumber].dateUrl">
            </div>
        </div>
        <div class="activity-detail_mobile">
            <h2>{{ lectureData[activityNumber].detail.date }}</h2>
            <h3>{{ lectureData[activityNumber].detail.time }} {{ lectureData[activityNumber].detail.day }}</h3>
            <div class="activity-detail-place">
              <img src="@/assets/img/activities/dot.png">剝皮寮歷史街區 13號展間
            </div>
            <p>講師：{{ lectureData[activityNumber].detail.speaker_info }}</p>
        </div>
        <div class="activity-mainBottom">
            <p>
                {{ lectureData[activityNumber].description }}
            </p>
            <div class="activity-mainBottom-picture">
                <div class="mainBottom-picture_desktop">
                  <div class="picture" @click="showPicture(item.bigPhoto_url)" v-for="(item) in lectureData[activityNumber].photo" :key="item.photo_description">
                    <img :src="item.smallPhoto_url">
                    {{item.photo_description}}
                  </div>
                </div>
            </div>
        </div>
        <div class="picture_mobile">
            <slider :activity-data="activityData"></slider>
        </div>
    </div>
    <div class="bigpicture_desktop" v-if="showbigPicture === true">
      <div class="bigpicture-background" @click="showbigPicture = false"></div>
      <img class="cross" src="@/assets/img/activities/cross.png" @click="showbigPicture = false">
      <img :src="bigUrl">
    </div>
    <a class="activity-goBtn" :href="lectureData[activityNumber].activityUrl" target="_blank">
      <ball></ball>
      <p><span>GO</span><br>報名去</p>
    </a>
  </div>
</template>
<script>
import axios from 'axios'
import ball from '@/components/vfx/keyvision/ball.vue'
import slider from '@/components/VueSlider_activity.vue'
export default {
  name: 'activity',
  components: {
    ball,
    slider
  },
  props: {
    activityNumber: Number
  },
  data () {
    return {
      activitynumber: this.activityNumber,
      showbigPicture: false,
      lectureData: [],
      bigUrl: '',
      activityData: []
    }
  },
  methods: {
    closeActivity () {
      this.$emit('close-activity')
      // console.log('close!')
    },
    showPicture (url) {
      this.showbigPicture = true
      this.bigUrl = url
    }
  },
  created () {
    let vm = this
    axios.get('js/activities.json').then(res => {
      vm.lectureData = res.data
      console.log('this.lectureData', this.lectureData)
    }).catch(err => {
      console.log(err, '失敗')
    })
  },
  watch: {
    activityNumber () {
      let vm = this
      this.activitynumber = this.activityNumber
      this.activityData = vm.lectureData[vm.activitynumber]
    }
  }
}
</script>
