<template>
  <div id="app">
    <background></background>

    <div class="nav">
      <div class="navLeft">
        <router-link to="/"><img src="@/assets/img/logo.png"></router-link>
      </div>
      <ul class="navRight-desktop">
        <router-link to="/about"><li class="navBtn" :class="{'nowPage':this.$route.name == 'about'}">展覽資訊</li></router-link>
        <router-link to="/projects"><li class="navBtn" :class="{'nowPage':this.$route.name == 'projects'}">作品介紹</li></router-link>
        <router-link to="/activities"><li class="navBtn" :class="{'nowPage':this.$route.name == 'activities'}">展覽活動</li></router-link>
        <li class="navBtn"><a href="https://www.facebook.com/105NTUTCVD/?eid=ARAc82iapLa3rWM9uFje3dLl2bBQFDtZq8h8c_4nqTLKJMg_5PBpFHfwcvTuH1lKCeatvp-N8WYpZlj6"
        target="_blank"><img src="@/assets/img/fblogo.svg"></a></li>
      </ul>
      <div class="navRight-mobile" :class="{'open': clickNav}" @click="clickNav = !clickNav">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <!--div class="navItem-mobile" v-if="clickNav === true"-->
      <div class="navItem-mobile" :class="{'hideNav': clickNav === false}">
        <div class="navItem-bgc"></div>
        <ul class="navItem-mobile-ul">
          <router-link to="/"><li class="navItem-mobile-li" @click="clickNav = !clickNav">首頁</li></router-link>
          <router-link to="/about"><li class="navItem-mobile-li" :class="{'nowPage-mobile':this.$route.name == 'about'}" @click="clickNav = !clickNav">展覽資訊</li></router-link>
          <router-link to="/projects"><li class="navItem-mobile-li" :class="{'nowPage-mobile':this.$route.name == 'projects'}" @click="clickNav = !clickNav">作品介紹</li></router-link>
          <router-link to="/activities"><li class="navItem-mobile-li" :class="{'nowPage-mobile':this.$route.name == 'activities'}" @click="clickNav = !clickNav">展覽活動</li></router-link>
          <li class="navItem-mobile-li" @click="clickNav = !clickNav"><a href="https://www.facebook.com/105NTUTCVD/?eid=ARAc82iapLa3rWM9uFje3dLl2bBQFDtZq8h8c_4nqTLKJMg_5PBpFHfwcvTuH1lKCeatvp-N8WYpZlj6"
          target="_blank"><img src="@/assets/img/fblogo-white.svg"></a></li>
        </ul>
      </div>
    </div>
    <transition name="slide" mode="out-in">
      <router-view/>
    </transition>
    <div class="fullPage-Nav"></div>
  </div>
</template>

<style lang="sass">
@import "./assets/css/all";
</style>

<script>
import background from './components/vfx/background/background.vue'
export default {
  components: {
    background
  },
  data () {
    return {
      clickNav: false
    }
  }
}
</script>
