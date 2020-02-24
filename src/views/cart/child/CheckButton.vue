<template>
  <div>
    <img v-if="!flag" src="~assets/img/common/choose.svg" alt="">
    <img v-else src="~assets/img/common/choosed.svg" alt="">
  </div>
</template>

<script>
	export default {
		name: "CheckButton",
    props:{
			flag:Boolean
    }
	}
</script>

<style scoped>
  img{
    width: 20px;
    height: 20px;
  }
</style>