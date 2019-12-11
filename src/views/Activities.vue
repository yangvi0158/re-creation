<template>
  <div class="activities">
    <div class="activity-Top">
      <div class="activity-title">
        <div>
          <h1>創甡<br>演講廳</h1>
          <h4>文創講座</h4>
        </div>
      </div>
      <div class="activity-card" @click="openActivity">
        <div class="activity-card-top">
          <div class="activity-card-top-left">
            <p>16:00~17:30</p>
            <h3>Show Time</h3>
            <p>談新時代的文化推廣與包裝行銷</p>
            <div class="activity-card-address">
              <p>剝皮寮歷史街區13號展間</p>
            </div>
          </div>
          <div class="activity-card-top-right">
          </div>
        </div>
        <div class="activity-card-bottom">
          <img src="@/assets/img/activities.png">
          <h3>Ushow<br>Lee</h3>
        </div>
      </div>

      <div class="activity-card">
        <div class="activity-card-top">
          <div class="activity-card-top-left">
            <p>16:00~17:30</p>
            <h3>Show Time</h3>
            <p>談新時代的文化推廣與包裝行銷</p>
            <div class="activity-card-address">
              <p>剝皮寮歷史街區13號展間</p>
            </div>
          </div>
          <div class="activity-card-top-right">
            <img>
          </div>
        </div>
        <div class="activity-card-bottom">
          <img>
          <h3>Ushow<br>Lee</h3>
        </div>
      </div>

      <div class="activity-card">
        <div class="activity-card-top">
          <div class="activity-card-top-left">
            <p>16:00~17:30</p>
            <h3>Show Time</h3>
            <p>談新時代的文化推廣與包裝行銷</p>
            <div class="activity-card-address">
              <p>剝皮寮歷史街區13號展間</p>
            </div>
          </div>
          <div class="activity-card-top-right">
            <img>
          </div>
        </div>
        <div class="activity-card-bottom">
          <img>
          <h3>Ushow<br>Lee</h3>
        </div>
      </div>
    </div>
    <div class="activity-Bottom"></div>
    <Activity v-show="showActivity" @close-activity="showActivity = false"/>
  </div>
</template>

<script>
import Activity from '@/components/Activity.vue'
export default {
  name: 'activities',
  components: {
    Activity
  },
  data () {
    return {
      showActivity: false
    }
  },
  methods: {
    openActivity () {
      this.showActivity = true
    }
  }
}
</script>
