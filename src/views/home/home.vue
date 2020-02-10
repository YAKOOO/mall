<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center-nav" >
        <img class="scope" src="~assets/img/navbar/search.svg" alt="">
        <input type="text" class="search">
      </div>
    </nav-bar>
    <banner :banner="banner"></banner>
     <recommend-view :recommends="recommends"></recommend-view>
    <feature></feature>
    <tab-control :title="['流行','新款','推荐']"
                 class="tab-control"
                 @tabClick="tabClick">

    </tab-control>
    <good :good="good[this.itemName].list"></good>
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

	export default {
		name: "home",
    components:{
			'nav-bar':NavBar,
      'banner':banner,
      'recommend-view':RecommendView,
      'feature':FeatureView,
      'tab-control':TabControl,
      'good':good,
    },
    data(){
			return{
				banner:[],
        recommends:[],
        good:{
					'pop':{page:1,list:[]},
          'new':{page:1,list:[]},
          'sell':{page:1,list:[]}
        },
        itemName:'pop'
      }
    },
    created() {
     this.getHomeMultidata();
     this.getHomeGoods('pop');
     this.getHomeGoods('new');
     this.getHomeGoods('sell');


		},
    methods:{
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
/*
			网络请求
*/
			getHomeMultidata() {
				getHomeMultidata().then(res=>{
					this.banner=res.data.banner.list;
					this.recommends=res.data.recommend.list
				})

			},
			getHomeGoods(type){
				const page=this.good[type].page;
				getHomeGoods(type,page).then(res=>{
					this.good[type].list.push(...res.data.list);
					this.good[type].page+=1;
				})},
		},
	}
</script>

<style scoped>

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
    position: sticky;
    top:44px;
    bottom: 44px;
    z-index:8;
    background: white;
  }
</style>