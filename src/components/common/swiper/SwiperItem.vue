<template>
  <div class="slide">
    <slot></slot>        <!--放轮播单个图片-->
  </div>
</template>

<script>
	export default {
		name: "SwiperItem"
	}
</script>

<style scoped>
  .slide {
    width: 100%;
    flex-shrink: 0;
  }
  .slide img {
    width: 100%;
  }
</style>