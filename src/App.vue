<template>
  <div id="app">
    <tabbar v-if="!$route.meta.isShow"></tabbar>
    <router-view/>
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
