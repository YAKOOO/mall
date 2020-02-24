<template>
  <div v-if="Object.keys(image).length !== 0" class="goods-info">
    <h1>----------详情参数-----------</h1>
    <div class="desc">{{image.desc}}</div>
    <div v-for="list in image.detailImage">
      <div class="info-key">{{list.key}}</div>
      <div class="info-list">
        <img v-for="(item,index) in list.list" :key="index" :src="item" src="" alt="">
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: "DetailGoodsinfo",
    props:{
			image:Object
    }
	}
</script>

<style scoped>
  .goods-info {
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-desc {
    padding: 0 15px;
  }
  .info-desc .start, .info-desc .end {
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }
  .info-desc .start {
    float: left;
  }
  .info-desc .end {
    float: right;
  }
  .info-desc .start::before, .info-desc .end::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
  }
  .info-desc .end::after {
    right: 0;
  }
  .info-desc .desc {
    padding: 15px 0;
    font-size: 14px;
  }
  .info-key {
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
  }
  .info-list img {
    width: 100%;
  }
</style>