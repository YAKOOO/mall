<template>
  <div>
    <nav-bar class="whole">
      <div slot="left-nav" class="back" @click="back">
        <img src="@/assets/img/home/back1.svg" alt="">
      </div>
      <div slot="center-nav" class="nav">
       <div v-for="(item,index) in list"
            class="nav-item"
            :class="{active:index===currentIndex}"
            @click="changeIndex(index)">
         {{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
	import NavBar from "../../../components/common/navbar/NavBar";

	export default {
		name: "detailNavbar",
    components:{
			'nav-bar':NavBar,
    },
    data(){
			return{
				list:['商品','参数','评论','推荐'],
        currentIndex:0
      }
    },
    methods:{
			changeIndex(index){
				this.currentIndex=index
        this.$emit('detail-click',index)

			},
      back(){
				this.$router.back()
      }
    }
	}
</script>

<style scoped>
  .whole{
    background: #fff;
  }
  .nav{
    display: flex;
    color:#999999;
    position: relative;
    z-index: 9;
  }
  .nav-item{
    flex: 1;
    text-align: center;
  }
  .active{
    color: #d81e06;
  }
  .back img{
    width: 30px;
    height: 30px;
    vertical-align: middle;
    padding-left: 10px;
  }
</style>