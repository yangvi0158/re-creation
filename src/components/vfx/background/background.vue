<template>
  <div class="vfx-background" ref="vfx-background"></div>
</template>

<script>
import background from './background'

export default {
  name: 'vfx-background',
  data () {
    return {
      handler: null
    }
  },
  mounted () {
    this.handler = background.setup(this.$refs['vfx-background'])
  },
  destroyed () {
    this.handler.destroy()
  }
}
</script>

<style scoped>
.vfx-background {
  position: fixed;
  display: block;
  width: 100vw;
  height: 100vh;
  left: 0px;
  top: 0px;
  z-index: -1;
  background: linear-gradient(to left bottom, #ffc6c6, #fff);
}
</style>
