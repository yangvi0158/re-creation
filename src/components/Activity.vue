<template>
  <div class="activity">
    <div class="BackBtn">
        <button @click="closeActivity">Back</button>
    </div>
    <div class="activity-main">
        <div class="activity-mainTop">
            <div class="activity-mainTop-left">
                <h1>清香純純</h1>
                <h2>手繪1930年代台灣第一女歌手</h2>
                <div class="activity-detail_mobile"></div>
                <div class="activity-detail-desktop">
                    <div class="activity-detail-time">
                      <img src="@/assets/img/activities/dot.png">16:00-17:30
                    </div>
                    <div class="activity-detail-place">
                      <img src="@/assets/img/activities/dot.png">剝皮寮歷史街區 13號展間
                    </div>
                    <div class="activity-detail-speaker">
                      <img src="@/assets/img/activities/dot.png">老師_黃郁婷/手繪漫畫師
                    </div>
                </div>
            </div>
            <div class="activity-date_desktop">
              <img src="@/assets/img/activities/bigdate18.png">
            </div>
        </div>
        <div class="activity-mainBottom">
            <p>
                手繪明信片書籤，教大家如何運用身邊最簡單的水性色鉛筆，畫出最專業的漫畫風色彩，
                讓大家學習如何調色與配色，也讓大家可以動手DIY。
            </p>
            <div class="activity-mainBottom-picture">
                <div class="mainBottom-picture_desktop">
                  <div class="picture" @click="showPicture()">
                    <img src="@/assets/img/activities/activity/speaker1/speak1_s3.jpg">
                    介紹收藏
                  </div>
                  <div class="picture">
                    <img src="@/assets/img/activities/activity/speaker1/speak1_s3.jpg">
                    介紹收藏
                  </div>
                </div>
                <div class="mainBottom-picture_mobile"></div>
            </div>
        </div>
    </div>
    <div class="bigpicture_desktop" v-if="showbigPicture === true">
      <div class="bigpicture-background" @click="showbigPicture = false"></div>
      <img class="cross" src="@/assets/img/activities/activity/cross.png" @click="showbigPicture = false">
      <img src="@/assets/img/activities/activity/speaker1/speak1_l3.jpg">
    </div>
    <div class="activity-goBtn">
      <ball></ball>
    </div>
  </div>
</template>
<script>
import ball from '@/components/vfx/keyvision/keyvision.vue'
export default {
  name: 'activity',
  components: {
    ball
  },
  props: {
  },
  data () {
    return {
      showbigPicture: false
    }
  },
  methods: {
    closeActivity () {
      this.$emit('close-activity')
      console.log('close!')
    },
    showPicture () {
      this.showbigPicture = true
    }
  }
}
</script>
