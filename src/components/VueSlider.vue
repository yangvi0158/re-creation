<template>
  <md-card>
    <!--md-card-actions>
      <div class="md-subhead">
        <span>Autoplay</span>
        <span>（</span>
        <span>自动切换</span>
        <span>）</span>
      </div>
      <md-button class="md-icon-button"
                 target="_blank"
                 href="https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/28-autoplay.vue">
        <md-icon>code</md-icon>
      </md-button>
    </md-card-actions-->
    <md-card-media>
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in data[0].photo" :key="item.imgUrl"><img :src="item.imgUrl"></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </md-card-media>
  </md-card>
</template>

<style>
.swiper-wrapper{
  width: 40vw;
  background-color: white;
}
.swiper-slide{
  background-color: white;
  height: 100vh;
}
.swiper-pagination-bullet{
  border: solid 1px white;
  background-color: transparent;
  opacity: 1;
}
.swiper-pagination-bullet-active{
  background-color: white;
}
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets{
  bottom: 50px;
}
.swiper-button-prev, .swiper-container-rtl .swiper-button-next{
  background-image: url('https://i.ibb.co/K0nCcHy/arrow-Left.png');
  width: 15px;
  background-size: contain;
  z-index: 10;
}
.swiper-button-next{
  background-image: url('https://i.ibb.co/5B04Bkn/arrow-Right.png');
  width: 15px;
  background-size: contain;
  z-index: 10;
}
</style>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  props: {
    workData: Object
  },
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      data: this.workData,
      swiperOption: {
        spaceBetween: 50,
        centeredSlides: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    console.log('this is current swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  }
}
</script>
