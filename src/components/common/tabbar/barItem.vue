<template>
  <div class="item" @click="clickItem">
  <slot v-if="!isActive" name="item-image" ></slot>
  <slot v-else name="item-image-active"></slot>
  <div :class="{'active':isActive}"><slot name="item-name"></slot></div>
  </div>
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
        this.$router.replace(this.path);
      },
    },
    props:{
		    path:String
		  },
    computed:{
		  isActive:function () {
        return this.$route.path.indexOf(this.path)!==-1
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
