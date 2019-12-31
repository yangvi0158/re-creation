<template>
  <div>
    <div class="vfx-keyvision_main">
      <img class="vfx-keyvision_backupimg" src="@/assets/img/home-min.png" />
      <div class="vfx-keyvision_content">
        <img ref="mesh" src="./images/mesh@2x-min.png" class="vfx-keyvision_mesh" alt />
        <img ref="c1" src="./images/c1@2x-min.png" class="vfx-keyvision_c1" alt />
        <img ref="c2" src="./images/c2@2x-min.png" class="vfx-keyvision_c2" alt />
        <img ref="c3" src="./images/c3@2x-min.png" class="vfx-keyvision_c3" alt />
        <img ref="c4" src="./images/c4@2x-min.png" class="vfx-keyvision_c4" alt />
        <img ref="c5" src="./images/c5@2x-min.png" class="vfx-keyvision_c5" alt />
        <img
          ref="c6"
          src="./images/c6@2x-min.png"
          :class="{
          'vfx-keyvision_c6': true,
          'vfx-keyvisual_show': show && (lag||mobile)
        }"
          alt
        />
        <div
          ref="c6_c"
          :class="{
          'vfx-keyvision_ball': true,
          'vfx-keyvisual_show': show && !(lag||mobile)
        }"
        >
          <ball
            ref="c6_cc"
            :complete="0"
            v-on:lag="lagreport"
            :animate="0.03"
            :targetComplete="targetComplete"
          ></ball>
        </div>
        <img ref="c7" src="./images/keytext.png" class="vfx-keyvision_c7" :hidden="mobile" alt />
        <div ref="c8" class="vfx-keyvision_c8" :hidden="mobile">
          <slot></slot>
        </div>
      </div>
    </div>
    <img ref="c7_m" src="./images/keytext.png" class="vfx-keyvision_c7_m" :hidden="!mobile" alt />
  </div>
</template>

<script>
import ball from './ball.vue'

function preloadImage (url) {
  return new Promise(resolve => {
    const img = new Image()
    img.onload = function () {
      resolve()
    }
    img.src = url
  })
}

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
      targetComplete: 0,
      lag: false,
      show: false,
      mobile: false,
      imagesPromises: []
    }
  },

  methods: {
    lagreport () {
      this.lag = this.$refs['c6_cc'].lag
      console.log('yes lag', this.lag)
    },
    updateMobile () {
      this.mobile = window.innerWidth <= 600
    }
  },

  mounted () {
    var me = this
    Array.from(this.$el.querySelectorAll('img')).map(x => {
      console.log(x)
      me.imagesPromises.push(preloadImage(x.src))
    })

    this.updateMobile()
    this.$refs['c6_cc'].$on('ready', function () {
      Promise.all(me.imagesPromises).then(function () {
        console.log('ready')
        me.$emit('ready')
        for (let i = 1; i <= 8; i++) {
          setTimeout(() => {
            if (i === 6) {
              me.show = true
              me.targetComplete = 1
              if (me.mobile) {
                me.lag = true
                me.$refs['c6_cc'].lag = true
              }
              me.$refs['mesh'].style.opacity = 1
            } else {
              me.$refs['c' + i].classList.add('vfx-keyvisual_show')
            }
          }, me.speed * Math.pow(i, 1.3))
        }
      })
    })

    addEventListener('resize', this.updateMobile)
  },

  destroyed () {
    clearInterval(this.run)
    removeEventListener('resize', this.updateMobile)
  }
}
</script>

<style scoped lang="scss">
.vfx-keyvision_main {
  position: relative;
  margin: auto;

  transform: translate(50px, -20px);
  @media screen and (max-width: 600px) {
    transform: scale(1, -1) rotate(-90deg) translate(-50px, 0px);
  }

  // transition: transform 1s;

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

  &.vfx-keyvisual_show {
    opacity: 1;
  }

  @media screen and (max-width: 600px) {
    transform: translate(-8.75%, -6.25%) rotate(90deg) scale(1, -1);
  }
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

  // opacity: 0;
}

.vfx-keyvision_c7 {
  position: absolute;
  top: 31%;
  left: 6%;
  width: 22%;
  // opacity: 0;
}

.vfx-keyvision_c8 {
  position: absolute;
  top: 39%;
  left: 31%;

  // opacity: 0;
}

.vfx-keyvision_c7_m {
  position: absolute;
  left: 30px;
  bottom: 120px;
  width: 40%;
}

@for $i from 1 through 8 {
  .vfx-keyvision_c#{$i} {
    opacity: 0;
    transition: opacity 1s, transform 1s;
    transform: scale(0.9) translate(0, 30px);
    &.vfx-keyvisual_show {
      opacity: 1;
      transform: scale(1);
    }
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
