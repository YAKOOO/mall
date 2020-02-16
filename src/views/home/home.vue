<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center-nav" >
        <img class="scope" src="~assets/img/navbar/search.svg" alt="">
        <input type="text" class="search">
      </div>
    </nav-bar>
    <scroll
      class="content"
      ref="scroll"
      @scroll="contentScroll"
      @pullingUp="loadMore">
       <banner :banner="banner"></banner>
       <recommend-view :recommends="recommends"></recommend-view>
       <feature></feature>
       <tab-control :title="['流行','新款','推荐']"
                    class="tab-control"
                    @tabClick="tabClick">

       </tab-control>
       <good :good="good[this.itemName].list"></good>     <!--将拿到的数据 good里面定义的传给了good-->
    </scroll>
    <back-top @click.native="backTop" v-show="isShow"></back-top>

  </div>
</template>

<script>
	import NavBar from "../../components/common/navbar/NavBar";
	import banner from "../../components/content/banner";
	import RecommendView from "./children/RecommendView";
	import FeatureView from "./children/FeatureView";
	import TabControl from "../../components/content/tabControl/TabControl";
	import good from "../../components/content/goods/good"
	import {getHomeMultidata,getHomeGoods} from "../../network/home";
	import Scroll from "../../components/common/scroll/Scroll";
	import backTop from "../../components/content/backTop/backTop";

	export default {
		name: "home",
    components:{
			'nav-bar':NavBar,
      'banner':banner,
      'recommend-view':RecommendView,
      'feature':FeatureView,
      'tab-control':TabControl,
      'good':good,
      'scroll':Scroll,
      'back-top':backTop
    },
    data(){
			return{
				banner:[],
        recommends:[],
        good:{
					'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        itemName:'pop',
        isShow:false,   //回到顶部
        yPosition:0
      }
    },
    created() {
     this.getHomeMultidata();
     this.getHomeGoods('pop');
     this.getHomeGoods('new');
     this.getHomeGoods('sell');
             //获取到数据 并且把数据直接复制到data里面 因为函数结束会销毁

		},
    mounted(){
			//监听item图片加载完成
     /* const refresh= this.debounce(this.$refs.scroll.scroll.refresh,200)
			this.$bus.$on('itemImageLoad',()=>{
			  refresh()
			})*/
    },
    methods:{
			//防抖函数,传入等待执行函数
/*
      debounce(func,delay){
      	let timer = null
        return function (...args) {
      		if(timer) clearTimeout(timer)
          timer = setTimeout(()=>{
          	func.apply(this,args)
          },delay)

				}
      },
*/

			// tabControl循环获取到的index 来判断起数据的键值
			tabClick(index){
				switch (index) {
          case 0:this.itemName='pop'
            break
          case 1:this.itemName='new'
            break
          case 2:this.itemName='sell'
            break
          
				}
			},
      // 回到顶部 有问题!
      backTop(){
			this.$refs.scroll.scrollTo(0,0)
      },
      //获取滚动坐标
      contentScroll(position){
				this.isShow= (-position.y)>600;
			},
      loadMore(){
				this.getHomeGoods(this.itemName)
      },
/*
			网络请求
*/
			getHomeMultidata() {
				getHomeMultidata().then(res=>{
					this.banner=res.data.banner.list;
					this.recommends=res.data.recommend.list
				})

			},  //获取banner图信息和recommend
			getHomeGoods(type){
				const page=this.good[type].page + 1;
				getHomeGoods(type,page).then(res=>{
					this.good[type].list.push(...res.data.list);
					this.good[type].page+=1;
					//完成上拉加载更多
          this.$refs.scroll.scroll.finishPullUp()
				})},  // 获取具体商品
		},
/*    activated() {
			this.$refs.scroll.scrollTo(0,this.yPosition,0)
		},
    deactivated() {
			this.yPosition = this.$refs.scroll.scroll.y
			console.log(this.yPosition);
		}*/
	}
</script>

<style scoped>
  #home{
    height: 100vm;
    position: relative;
  }
.nav-bar{
  background:#d81e06;
}
.search{
  border-radius: 10px;
  border:0;
  outline: none;
  height: 25px;
  width: 90%;
  padding-left: 28px;
}
.scope{
  width: 20px;
  height: 20px;
  position: relative;
  left: 24px;
  top: 5px;
}
  .tab-control{
   /* position: sticky;
    top:44px;
    bottom: 44px;
    z-index:8;*/
    background: white;
  }
  .content{
    position:absolute ;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>