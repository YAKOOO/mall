<template>
  <div>
    <detail-bar @detail-click="todetail"></detail-bar>
    <scroll class="content">
      <top-swiper :topswiper="topswiper"></top-swiper>
      <base-info :goods="goods"></base-info>
      <shop-info :shop="shopinfo"></shop-info>
      <img-info  ref="detail" :image="imageDetail"></img-info>
      <comment-info ref="comments" :commentInfo="comments"></comment-info>
    </scroll>
    <bottom @addToCart="addItem"></bottom>
   </div>
</template>

<script>
	import detailNavbar from "./childDetail/detailNavbar";
	import DetailSwiper from "./childDetail/DetailSwiper";
	import DetailBaseInfo from "./childDetail/DetailBaseInfo";
	import Scroll from "../../components/common/scroll/Scroll";
	import DetailShopInfo from "./childDetail/DetailShopInfo";
	import DetailGoodsinfo from "./childDetail/DetailGoodsinfo";
	import DetailComment from "./childDetail/DetailComment";
	import {getDetail,Goods} from "../../network/detail";
	import {debouce} from "../../common/utils";
	import DetailBottom from "./childDetail/DetailBottom";

	export default {
		name: "detail",
    components:{
			'detail-bar':detailNavbar,
      'top-swiper':DetailSwiper,
      'base-info' :DetailBaseInfo,
      'scroll' : Scroll,
      'shop-info':DetailShopInfo,
      'img-info':DetailGoodsinfo,
      'comment-info':DetailComment,
      'bottom':DetailBottom
    },
    data(){
			return {
				iid:null,
        res:null,
        topswiper:[],
        goods:{},
        shopinfo:{},
        imageDetail:{},
        comments:{},
        navIndex:[],
        getThemeTopY:[],
        funcTopY:null
      }
    },
    activated() {
			this.iid=this.$route.params.iid;
			getDetail(this.iid).then(res => {
				const data = res.result;
        this.topswiper=data.itemInfo.topImages;
        this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
			  this.shopinfo=data.shopInfo
        this.imageDetail=data.detailInfo
        if(data.rate!==0){
        	this.comments=data.rate.list[0]
        }
			})
    },
    methods:{
			todetail(index){
				console.log(index);
			},
			/*loadComplite(){
				this.funcTopY=debouce(()=>{
					this.getThemeTopY=[]
					this.getThemeTopY.push(0)
					this.getThemeTopY.push(this.$refs.detail.$el.offsetTop)
					this.getThemeTopY.push(this.$refs.comments.$el.offsetTop)
				},100)
				console.log(this.getThemeTopY);
			}*/
			addItem(){
				//获取购物车 需要展示的信息
        const product ={};
				product.image = this.topswiper[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.price = this.goods.realPrice;
        product.iid = this.iid;
			  //将商品添加到购物车 Vuex
        // this.$store.commit('addCart',product)
        //action 分发
        this.$store.dispatch('addCart',product)
			}
    }
	}
</script>

<style scoped>
  .content{
    background: #ffffff;
    height: 623px;
  }
</style>