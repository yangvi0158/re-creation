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
  margin: auto;
  /* transform: translate(0, -50%) */
}

.vfx-keyvision_backupimg {
  /* opacity: 0; */
  max-width: 100%;
  max-height: 80vh;
  width: auto;
  height: auto;
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
  width: 68.72%;
  height: 101.5%;
  transform:translate(-8.75%,-6.25%);
  left: 0;
  top: 0;
}
</style>
