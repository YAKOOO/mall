<template>
  <div class="recommend">
    <div class="item" v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
  import {getHomeMultidata} from "../../../network/home";

	export default {
		name: "RecommendView",
    data(){
			return{
			recommend:[]
      }
    },
    props:{
			recommends:Array
    },
	}

</script>

<style scoped>
.recommend{
  display: flex;
  padding-bottom: 15px;
  border-bottom: 8px solid #eeeeee;
  font-size: 13px;
}
.item{
  flex: 1;
  text-align: center;
}
.item img{
    max-width: 100%;
    padding: 10px;
  }
</style>