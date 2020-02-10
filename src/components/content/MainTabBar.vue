<template>
  <tab-bar class="bar">
    <bar-item path="/home" >
      <img src="~assets/img/tabbar/home0.svg" alt="" slot="item-image">
      <img src="~assets/img/tabbar/home1.svg" alt="" slot="item-image-active">

      <div slot="item-name">首页</div>
    </bar-item>
    <bar-item path="/cate">
      <img src="~assets/img/tabbar/cate0.svg" alt="" slot="item-image">
      <img src="~assets/img/tabbar/cate1.svg" alt="" slot="item-image-active">
      <div slot="item-name">分类</div>
    </bar-item>
    <bar-item path="/cart">
      <img src="~assets/img/tabbar/cart0.svg" alt="" slot="item-image">
      <img src="~assets/img/tabbar/cart1.svg" alt="" slot="item-image-active">
      <div slot="item-name">购物车</div>
    </bar-item>
    <bar-item path="/profile">
      <img src="~assets/img/tabbar/profile0.svg" alt="" slot="item-image">
      <img src="~assets/img/tabbar/profile1.svg" alt="" slot="item-image-active">
      <div slot="item-name">我的</div>
    </bar-item>
  </tab-bar>

</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import barItem from 'components/common/tabbar/barItem'
	export default {
		name: "MainTabBar",
    components:{
      'tab-bar':TabBar,
      'bar-item':barItem
    }
	}
</script>

<style scoped>
.bar{
  background: #eeeeee;
  position: sticky;
  z-index: 9;
  bottom: 0px;
}
</style>
