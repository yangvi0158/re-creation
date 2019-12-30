<template>
  <div class="home">
    <div class="keyvision">
      <keyvision>
        <p>國立臺北科技大學 文化事業發展系</p>
        <p>105級學生畢業展</p>
        <h6>
          Taipei Tech Cultural Vacation Development
          <br>
          2020 Graduation Exhibition
        </h6>
      </keyvision>
    </div>
    <div class="exhibition_info-desktop">
      <div class="info info-left">
        <p>
          <span>2020.01.03-01.08</span>
          <br />北科大藝文中心 校內展
        </p>
      </div>
      <div class="info">
        <p>
          <span>2020.01.12-01.19</span>
          <br />剝皮寮歷史街區 校外展
        </p>
      </div>
    </div>
    <div class="exhibition_info-mobile">
      <p>國立臺北科技大學文化事業發展系</p>
      <p>105級學生畢業展</p>
      <p class="info_eng">Taipei Tech Cultural Vacation Development</p>
      <p class="info_eng">2020 Graduation Exhibition</p>
    </div>
  </div>
</template>

<script>
import keyvision from '@/components/vfx/keyvision/keyvision.vue'

// @ is an alias to /src
export default {
  name: 'home',
  components: {
    keyvision
  }
}
</script>
