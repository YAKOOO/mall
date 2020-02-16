import Vue from 'vue'
import Router from 'vue-router'
import home from 'views/home/home'
import cate from 'views/category/category'
import cart from 'views/cart/cart'
import profile from 'views/profile/profile'
import detail from "./views/detail/detail";
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
	{
		path:'/detail/:iid',
		name:'Detail',
		component:detail,
		meta:{
			isShow:true
		}
	}
];
export default new Router({
	routes,
})
