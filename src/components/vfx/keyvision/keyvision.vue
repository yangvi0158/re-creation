<template>
  <div class="vfx-keyvision_main">
    <img class="vfx-keyvision_backupimg" src="@/assets/img/home.png" />
    <div class="vfx-keyvision_content">
      <div class="vfx-keyvision_ball">
        <ball></ball>
      </div>
    </div>
  </div>
</template>

<script>
import ball from './ball.vue'

export default {
  components: {
    ball
  }
}
</script>

<style scoped>
.vfx-keyvision_main {
  position: relative;
}

.vfx-keyvision_backupimg {
  /* opacity: 0; */
}

.vfx-keyvision_content {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

.vfx-keyvision_ball {
  position: relative;
  width: 800px;
  height: 800px;
  left: -70px;
  top: -50px;
}
</style>
