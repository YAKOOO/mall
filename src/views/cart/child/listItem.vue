<template>
  <div class="list-item">
    <div class="item-selector">
      <choose :flag="product.checked"
              @click.native="toChoose"></choose>
    </div>
    <div class="item-image"><img :src="product.image" alt=""> </div>
    <div class="item-name">{{product.title}}</div>
    <div class="info-bottom">
      <div class="item-price left">￥{{product.price}}</div>
      <div class="item-count right">x{{product.count}}</div>
    </div>
  </div>
</template>

<script>
	import CheckButton from "./CheckButton";

	export default {
		name: "listItem",
    props:{
			product:{
				type:Object,
        default(){
					return {}
        }
      }
    },
    components:{
			'choose':CheckButton
    },
    methods:{
			toChoose(){
				this.product.checked = !this.product.checked
      }
    }
	}
</script>

<style scoped>
  .list-item{
    width: 100%;
    display: flex;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }
  .item-image img{
    width: 80px;
    height: 80px;
    display: block;
    border-radius: 5px;
  }
  .item-image {
    padding: 5px;
  }
  .item-selector{
    position: relative;
    top:35px;
  }
 /* .item-selector {
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }*/
  .item-name {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: inline;
  }

  .item-desc {
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }
  .{
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }
  .info-bottom {
    margin-top: 10px;
    position: relative;
    bottom: -40px;
    right: 10px;
  }
  .item-price {
    color: #d81e06;

  }
</style>