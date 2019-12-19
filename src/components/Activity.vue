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
                <div class="activity-detail_mobile"></div>
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
                <div class="mainBottom-picture_mobile"></div>
            </div>
        </div>
    </div>
    <div class="bigpicture_desktop" v-if="showbigPicture === true">
      <div class="bigpicture-background" @click="showbigPicture = false"></div>
      <img class="cross" src="@/assets/img/activities/cross.png" @click="showbigPicture = false">
      <img :src="bigUrl">
    </div>
    <div class="activity-goBtn">
      <ball></ball>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import ball from '@/components/vfx/keyvision/keyvision.vue'
export default {
  name: 'activity',
  components: {
    ball
  },
  props: {
    activityNumber: Number
  },
  data () {
    return {
      showbigPicture: false,
      lectureData: [],
      bigUrl: ''
    }
  },
  methods: {
    closeActivity () {
      this.$emit('close-activity')
      console.log('close!')
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
      console.log(this.lectureData)
    }).catch(err => {
      console.log(err, '失敗')
    })
  }
}
</script>
