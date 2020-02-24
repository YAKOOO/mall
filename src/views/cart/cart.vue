<template>
  <div class="cart">
    <nav-bar class="bar">
      <p slot="center-nav">购物车 <span>({{cartLength}})</span></p>
    </nav-bar>
    <list> </list>
  </div>
</template>

<script>
	import NavBar from "../../components/common/navbar/NavBar";

  import {mapGetters} from 'vuex'
	import cartList from "./child/cartList";
	export default {
		name: "cart",
    components:{
			'nav-bar' : NavBar,
      'list' : cartList
    },
    computed:{
			//vuex里面的一种语法 将getters里面的对象传入计算属性
      //还可以传入 对象 {名称:'getters里面的对象'}
     ...mapGetters([
     	 'cartLength'

     ])
		}
	}
</script>

<style scoped>
  .bar{
    background: #d81e06;
    font-family: "Adobe Gurmukhi";
    vertical-align: middle ;
  }

</style>