<template>
  <div>
    <nav-bar class="ss">
      <div slot="center-nav" @click="toSearch">
        <img class="scope" src="~assets/img/navbar/search.svg" alt="">
        <input type="text" class="search">
      </div>
    </nav-bar>
  </div>
</template>

<script>
	import NavBar from "../../components/common/navbar/NavBar";

	export default {
		name: "search",
    components:{
			'nav-bar':NavBar
    }
	}
</script>

<style scoped>
.ss{
  background: #000;
}
  .search{
    border-radius: 10px;
    border:0;
    outline: none;
    height: 25px;
    width: 270px;
    padding-left: 28px;
  }
  .scope{
    width: 20px;
    height: 20px;
    position: relative;
    left: 24px;
    top: 5px;
  }
</style>