<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banner"  >
        <img :src="item.image" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>

	import Swiper from "../common/swiper/Swiper";
	import SwiperItem from "../common/swiper/SwiperItem";
	import {getHomeMultidata} from "../../network/home";
	export default {
		name: "banner",
		components:{
        'swiper':Swiper,
        'swiper-item':SwiperItem
		},
    props:{
			banner:Array
    }
	}
</script>

<style scoped>

</style>