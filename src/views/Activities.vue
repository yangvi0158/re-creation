<template>
  <div class="activities">
    <div class="activity-Top" :class="{'hideActivities': showActivity}">
      <div class="activity-title">
        <div>
          <h1>創甡<br>日日講</h1>
          <h4>文創講座</h4>
        </div>
      </div>
      <div class="activity-card topcard" @click="openActivity(0)">
        <div class="activity-card-top">
          <div class="activity-card-top-left">
            <p>14:00-15:30</p>
            <h3 style="letterSpacing: .1em">Show Time</h3>
            <p>談新時代的文化推廣與包裝行銷</p>
            <div class="activity-card-address">
              <img src="@/assets/img/activities/dot.png">
              剝皮寮歷史街區13號展間
            </div>
          </div>
          <div class="activity-card-top-right">
            <img src="@/assets/img/activities/date17.png">
          </div>
        </div>
        <div class="activity-card-bottom">
          <img src="@/assets/img/activities/activity1.jpg">
          <img class="activity-red-img" src="@/assets/img/activities/activity1_red.jpg">
          <h3>Ushow<br>LEE</h3>
        </div>
      </div>
      <div class="activity-card topcard" @click="openActivity(1)">
        <div class="activity-card-top">
          <div class="activity-card-top-left">
            <p>14:00-15:30</p>
            <h3>耳朵的喇叭褲</h3>
            <p>重新詮釋舊時代的老物件</p>
            <div class="activity-card-address">
              <img src="@/assets/img/activities/dot.png">
              剝皮寮歷史街區13號展間
            </div>
          </div>
          <div class="activity-card-top-right">
            <img src="@/assets/img/activities/date18.png">
          </div>
        </div>
        <div class="activity-card-bottom">
          <img src="@/assets/img/activities/activity2.jpg">
          <img class="activity-red-img" src="@/assets/img/activities/activity2_red.jpg">
          <h3>林太崴</h3>
        </div>
      </div>
      <div class="activity-card topcard" @click="openActivity(2)">
        <div class="activity-card-top">
          <div class="activity-card-top-left">
            <p>14:00-15:30</p>
            <h3>文化銀行</h3>
            <p>寫下島嶼的文化篇章</p>
            <div class="activity-card-address">
              <img src="@/assets/img/activities/dot.png">
              剝皮寮歷史街區13號展間
            </div>
          </div>
          <div class="activity-card-top-right">
            <img src="@/assets/img/activities/date19.png">
          </div>
        </div>
        <div class="activity-card-bottom">
          <img src="@/assets/img/activities/activity3.jpg">
          <img class="activity-red-img" src="@/assets/img/activities/activity3_red.jpg">
          <h3>邵璦婷</h3>
        </div>
      </div>
    </div>
    <div class="activity-Bottom" :class="{'hideActivities': showActivity}">
      <div class="activity-title">
        <div>
          <h1>創甡<br>日日作</h1>
          <h4>手作工坊</h4>
        </div>
      </div>
      <div class="activity-card" @click="openActivity(3)">
        <div class="activity-card-top">
          <div class="activity-card-top-left">
            <p>16:00-17:30</p>
            <h3>清香純純</h3>
            <p>手繪1930年代臺灣第一女歌手</p>
            <div class="activity-card-address">
              <img src="@/assets/img/activities/dot.png">
              剝皮寮歷史街區13號展間
            </div>
          </div>
          <div class="activity-card-top-right">
            <img src="@/assets/img/activities/date18.png">
          </div>
        </div>
        <div class="activity-card-bottom">
          <img src="@/assets/img/activities/activity4.jpg">
          <img class="activity-red-img" src="@/assets/img/activities/activity4_red.jpg">
          <h3>黃郁婷</h3>
        </div>
      </div>

      <div class="activity-card" @click="openActivity(4)">
        <div class="activity-card-top">
          <div class="activity-card-top-left">
            <p>16:00-17:30</p>
            <h3>金迷</h3>
            <p>傳統廟宇彩繪技法-安金</p>
            <div class="activity-card-address">
              <img src="@/assets/img/activities/dot.png">
              剝皮寮歷史街區13號展間
            </div>
          </div>
          <div class="activity-card-top-right">
            <img src="@/assets/img/activities/date19.png">
          </div>
        </div>
        <div class="activity-card-bottom">
          <img src="@/assets/img/activities/activity5.jpg">
          <img class="activity-red-img" src="@/assets/img/activities/activity5_red.jpg">
          <h3>周孟勳</h3>
        </div>
      </div>

    </div>
    <div class="activity-Bottom"></div>
    <Activity :activity-number="activityNumber" v-show="showActivity" @close-activity="showActivity = false"/>
  </div>
</template>

<script>
import axios from 'axios'
import Activity from '@/components/Activity.vue'
export default {
  name: 'activities',
  components: {
    Activity
  },
  data () {
    return {
      showActivity: false,
      activityNumber: ''
    }
  },
  methods: {
    openActivity (num) {
      this.showActivity = true
      this.activityNumber = num
    }
  },
  mounted () {
    axios.get('js/activities.json').then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err, '失敗')
    })
  }
}
</script>
