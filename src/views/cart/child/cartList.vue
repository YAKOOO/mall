<template>
  <div class="cart-list">
    <div class="content" ref="scroll">
      <item v-for="(item,index) in cartList"
            :key="index"
            :product="item">
      </item>
    </div>
  </div>
</template>

<script>
	import {mapGetters} from 'vuex'
	import listItem from "./listItem";
	import Scroll from "../../../components/common/scroll/Scroll";
	export default {
		name: "cartList",
    computed:{
			...mapGetters([
				'cartList'
      ])
    },
    /*activated(){
			this.$refs.scroll.refresh()
    },*/
    components:{
			'item':listItem,
      'scroll':Scroll
    }
	}
</script>

<style scoped>
  .cart-list{
    height: calc(100%- 44px - 49px);
  }
</style>