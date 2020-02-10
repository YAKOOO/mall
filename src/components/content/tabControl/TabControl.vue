<template>
  <div class="tab-control">
    <div class="control-item"
         @click="controlClick(index)"
         :class="{active:index===currentIndex}"
         v-for="(item,index) in title">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
	export default {
		name: "TabControl",
    props:{
			title:Array
    },
    data(){
			return {
				currentIndex:0
      }
    },
    methods:{
			controlClick: function (index) {
        this.currentIndex=index;
        this.$emit('tabClick',index)
			}
    }
	}
</script>

<style scoped>
  .tab-control{
    display: flex;
    width: 100%;
    text-align: center;
    height: 40px;
    padding-top: 10px;
  }
  .control-item{
    flex: 1;
  }
  .active{
    color: #d81e06;
  }
  .active span{
    padding-bottom: 3px;
    border-bottom: 3px solid #d81e06;
    border-radius: 1px;
  }
</style>