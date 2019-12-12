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
                <div class="activity-date_mobile"></div>
                <div class="activity-title-detail">
                    <div class="activity-detail-time"></div>
                </div>
            </div>
            <div class="activity-date_desktop">
            </div>
        </div>
        <div class="activity-mainBottom">
            <p>
                手繪明信片書籤，教大家如何運用身邊最簡單的水性色鉛筆，畫出最專業的漫畫風色彩，
                讓大家學習如何調色與配色，也讓大家可以動手DIY。
            </p>
            <div class="activity-mainBottom-picture">
                <div class="mainBottom-picture_desktop"></div>
                <div class="mainBottom-picture_mobile"></div>
            </div>
        </div>
    </div>
    <div class="activity-goBtn"></div>
  </div>
</template>
<script>
export default {
  name: 'activity',
  props: {
  },
  data () {
    return {
    }
  },
  methods: {
    closeActivity () {
      this.$emit('close-activity')
      console.log('close!')
    }
  }
}
</script>
