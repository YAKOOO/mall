import Vue from 'vue'
import Router from 'vue-router'
import home from 'views/home/home'
import cate from 'views/category/category'
import cart from 'views/cart/cart'
import profile from 'views/profile/profile'
import search from 'views/home/search'
Vue.use(Router);
const routes=[
	{
		path:'/',
		redirect:'/home'
	},
	{
	path:'/home',
	name:'Home',
	component:home
},
	{
		path:'/cate',
		name:'Cate',
		component:cate
	},
	{
		path:'/cart',
		name:'Cart',
		component:cart
	},
	{
		path:'/profile',
		name:'Profile',
		component:profile
	},
];
export default new Router({
	routes,
})
