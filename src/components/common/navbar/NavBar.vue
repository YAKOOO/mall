<template>
  <div class="nav-bar">
    <div class="left"><slot name="left-nav"></slot></div>
    <div class="center"><slot name="center-nav"></slot></div>
    <div class="right"><slot name="right-nav"></slot></div>
  </div>
</template>

<script>
	export default {
		name: "NavBar"
	}
</script>

<style scoped>
.nav-bar{
  display: flex;
  line-height: 44px;
  height: 44px;
  position: sticky;
  z-index: 9;
  top: 0;
}
.left,.right{
width: 60px;
}
.center{
  flex: 1;
  text-align: center;
  color: white;

}
</style>