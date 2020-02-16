<template>
  <div id="app">
    <tabbar v-if="!$route.meta.isShow"></tabbar>
    <keep-alive><router-view/></keep-alive>
  </div>
</template>

<script>
  import MainTabBar from "components/content/MainTabBar";
  export default {
  name: 'App',
  components:{
    'tabbar':MainTabBar
  }
}
</script>
<style>
</style>
