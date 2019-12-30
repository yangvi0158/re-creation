<template>
  <div class="vfx-keyvision-ball">
    <div class="vfx-keyvision-ball_content">
      <canvas ref="vfx-keyvision-ball_canvas" class="vfx-keyvision-ball_canvas"></canvas>
    </div>
  </div>
</template>

<script>
import ball from './ball.js'
export default {
  props: {
    complete: {
      default: 1,
      type: Number
    },
    targetComplete: {
      default: 1,
      type: Number
    },
    animate: {
      default: 1,
      type: Number
    }
  },
  data () {
    return {
      handler: null,
      lag: false
    }
  },
  mounted () {
    var me = this
    this.handler = ball.setup(
      this.$refs['vfx-keyvision-ball_canvas'],
      this,
      function () {
        me.$emit('ready')
      }
    )
  },
  destroyed () {
    this.handler.destroy()
  },
  watch: {
    lag () {
      console.log('its lag')
      this.$emit('lag')
    }
  }
}
</script>

<style scoped>
.vfx-keyvision-ball {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

.vfx-keyvision-ball_content {
  width: 100%;
  height: 100%;
}

.vfx-keyvision-ball_canvas {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
</style>
