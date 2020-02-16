<template>
  <div class="item" @click="clickItem">
  <slot v-if="!isActive" name="item-image" ></slot>
  <slot v-else name="item-image-active"></slot>
  <div :class="{'active':isActive}"><slot name="item-name"></slot></div>           <!--定义了每个item里面的确切东西-->
  </div>                                                                  <!--两个slot图片 用于放点击前后的图片-->
</template>

<script>
	export default {
		name: "barItem",
    data(){
		  return{
      }
    },
    methods:{
		  clickItem: function () {
        this.$router.replace(this.path);                 /*父组件传入的path 点击事件后更改router path*/
      },
    },
    props:{
		    path:String
		  },
    computed:{
		  isActive:function () {
        return this.$route.path.indexOf(this.path)!==-1    /*  判断 如果当前的path等与该路由path就是活跃状态*/
      }
    }
	}
</script>

<style scoped>

.item img{
    width: 24px;
    height: 24px;
    margin-top: 4px;
  }
.item {
  flex: 1;
  text-align: center;
  font-size:12px;
}
.active{
  color: #d81e06;
}

</style>
