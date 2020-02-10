<template>
  <div>
    <div class="good" v-for="item in good">
     <good-item :list="item"></good-item>
   </div>
  </div>
</template>

<script>
	import goodItem from "./goodItem";
	export default {
		name: "good",
    props:{
			good:{
          type:Array,
        default:{}
      },
    },
    components:{
			'good-item':goodItem
    }
	}
</script>

<style scoped>
.good {
  width: 48%;
  float: left;
}
</style>