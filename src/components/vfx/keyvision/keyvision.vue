<template>
  <div class="vfx-keyvision_main">
    <img class="vfx-keyvision_backupimg" src="@/assets/img/home.png" />
    <div class="vfx-keyvision_content">
      <img ref="mesh" src="./images/mesh@2x-min.png" class="vfx-keyvision_mesh" alt />
      <img ref="c1" src="./images/c1@2x-min.png" class="vfx-keyvision_c1" alt />
      <img ref="c2" src="./images/c2@2x-min.png" class="vfx-keyvision_c2" alt />
      <img ref="c3" src="./images/c3@2x-min.png" class="vfx-keyvision_c3" alt />
      <img ref="c4" src="./images/c4@2x-min.png" class="vfx-keyvision_c4" alt />
      <img ref="c5" src="./images/c5@2x-min.png" class="vfx-keyvision_c5" alt />
      <img ref="c6_c" src="./images/c6@2x-min.png" class="vfx-keyvision_c6" alt />
      <div ref="c6" class="vfx-keyvision_ball">
        <ball :complete="0" :targetComplete="targetComplete"></ball>
      </div>
    </div>
  </div>
</template>

<script>
import ball from './ball.vue'

export default {
  props: {
    speed: {
      type: Number,
      default: 100
    }
  },
  components: {
    ball
  },
  data () {
    return {
      run: null,
      targetComplete: 0
    }
  },

  mounted () {
    var me = this
    for (let i = 1; i <= 6; i++) {
      setTimeout(() => {
        me.$refs['c' + i].style.opacity = 1
        if (i === 6) {
          me.targetComplete = 1
          me.$refs['mesh'].style.opacity = 1
        } else me.$refs['c' + i].style.transform = 'scale(1) translate(0,0)'
      }, me.speed * Math.pow(i, 1.4))
    }
  },
  destroyed () {
    clearInterval(this.run)
  }
}
</script>

<style scoped lang="scss">
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
  opacity: 0;
}

.vfx-keyvision_content {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

.vfx-keyvision_ball {
  position: absolute;
  width: 68.72%;
  height: 101.5%;
  transform: translate(-8.75%, -6.25%);
  left: 0;
  top: 0;

  opacity: 0;
  transition: opacity 2s;
}

.vfx-keyvision_c1 {
  position: absolute;
  width: 18.7%;
  top: 71%;
  left: 81.6%;
}

.vfx-keyvision_c2 {
  position: absolute;
  width: 23.8%;
  top: 62.5%;
  left: 72.8%;
}

.vfx-keyvision_c3 {
  position: absolute;
  width: 31%;
  top: 46%;
  left: 58.2%;
}

.vfx-keyvision_c4 {
  position: absolute;
  width: 38%;
  top: 34%;
  left: 43.7%;
}

.vfx-keyvision_c5 {
  position: absolute;
  width: 43%;
  top: 20%;
  left: 27.5%;
}

.vfx-keyvision_c6 {
  position: absolute;
  top: -2%;
  left: -3%;
  width: 62.5%;

  opacity: 0;
}

@for $i from 1 through 6 {
  .vfx-keyvision_c#{$i} {
    opacity: 0;
    transition: opacity 1s;
    transform: scale(0);
  }
}

.vfx-keyvision_mesh {
  position: absolute;
  width: 101.3%;
  top: 0.8%;
  left: -1.2%;
  opacity: 0;
  transition: opacity 1s;
}
</style>
