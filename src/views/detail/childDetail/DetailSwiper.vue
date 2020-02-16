<template>
  <div>
    <swiper class="detail">
      <swiper-item v-for="item in topswiper">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
	import Swiper from "../../../components/common/swiper/Swiper";
	import SwiperItem from "../../../components/common/swiper/SwiperItem";

	export default {
		name: "DetailSwiper",
    components:{
			'swiper':Swiper,
      'swiper-item':SwiperItem
    },
    props:{
     topswiper:Array
    }

	}
</script>

<style scoped>
  .detail{
    height: 300px;
    overflow: hidden;
  }
</style>