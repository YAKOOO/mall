<template>
  <div>
    <detail-bar></detail-bar>
    <scroll class="content">
      <top-swiper :topswiper="topswiper"></top-swiper>
      <base-info :goods="goods"></base-info>
      <shop-info :shop="shopinfo"></shop-info>
      <ul>
        <li>
          <h2>hi</h2>
          <h2>hi</h2>
          <h2>hi</h2>
          <h2>hi</h2>
          <h2>hi</h2>
          <h2>hi</h2>
          <h2>hi</h2>

        </li>
      </ul></scroll>
  </div>
</template>

<script>
	import detailNavbar from "./childDetail/detailNavbar";
	import DetailSwiper from "./childDetail/DetailSwiper";
	import {getDetail,Goods} from "../../network/detail";
	import DetailBaseInfo from "./childDetail/DetailBaseInfo";
	import Scroll from "../../components/common/scroll/Scroll";
	import DetailShopInfo from "./childDetail/DetailShopInfo";

	export default {
		name: "detail",
    components:{
			'detail-bar':detailNavbar,
      'top-swiper':DetailSwiper,
      'base-info' :DetailBaseInfo,
      'scroll' : Scroll,
      'shop-info':DetailShopInfo
    },
    data(){
			return {
				iid:null,
        res:null,
        topswiper:[],
        goods:{},
        shopinfo:{},
        detalInfo:{}
      }
    },
    activated() {
			this.iid=this.$route.params.iid;
			getDetail(this.iid).then(res => {
				const data = res.result;
        this.topswiper=data.itemInfo.topImages;
        this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
			  this.shopinfo=data.shopInfo
        this.detalInfo=data.detailInfo
			})
		},

	}
</script>

<style scoped>
  .content{
    background: #ffffff;
    height: 623px;
  }
</style>