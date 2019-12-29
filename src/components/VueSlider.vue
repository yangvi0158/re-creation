<template>
  <md-card>
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
.swiper-container ,.swiper-container-initialized ,.swiper-container-horizontal{
  background-color: white;
}
.swiper-wrapper{
  width: 40vw;
  background-color: transparent;
}
.swiper-slide{
  background-color: transparent;
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

@media screen and (max-width: 900px){
  .swiper-slide{
    height: auto;
    background-color: transparent;
  }
  .swiper-wrapper{
    width: 100vw;
    background-color: transparent;
  }
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
        spaceBetween: 0,
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
    this.swiper.slideTo(3, 1000, false)
  }
}
</script>
