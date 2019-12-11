<template>
  <div id="app">
    <div class="nav">
      <div class="navLeft">
        <router-link to="/">首頁</router-link>
      </div>
      <ul class="navRight">
        <router-link to="/about"><li class="navBtn">展覽簡介</li></router-link>
        <router-link to="/projects"><li class="navBtn">作品介紹</li></router-link>
        <router-link to="/activities"><li class="navBtn">展覽活動</li></router-link>
        <a href="#" class="navFBbtn"><li class="navBtn">FB</li></a>
      </ul>
      <div class="navRight-mobile">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <router-view/>
    <div class="fullPage-Nav"></div>
  </div>
</template>

<style lang="sass">
@import "./assets/css/all";
</style>
