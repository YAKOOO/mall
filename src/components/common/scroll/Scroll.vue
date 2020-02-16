<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
	export default {
		name: "Scroll",
    data(){
			return {
				scroll:{}
      }
    },
    mounted(){
			setTimeout(this.initScroll,20)
    },
    methods: {
			initScroll()
			{
				/*创建BScroll对象*/
				this.scroll = new BScroll(this.$refs.wrapper, {
					click: true,
					probeType: 3,
					pullUpLoad: true,
					cancelable: true
				})
				/*监听滚动的位置*/
				this.scroll.on('scroll', (position) => {
					this.$emit('scroll', position)
				})
				/*监听滚到*/
				this.scroll.on('pullingUp', () => {
					this.$emit('pullingUp')
				})
			},
			scrollTo(x,y,time=300) {
				this.scroll.scrollTo(x,y,time);
			}
		}

	}
</script>

<style scoped>
/*.wrapper{
  position: absolute;
  left: 0;
  top: 0;
!*
  overflow: hidden;
*!
}*/
</style>