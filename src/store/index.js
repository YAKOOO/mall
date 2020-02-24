import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		//用于放购物车商品数组
		cartList:[]
	}
	,
	mutations,
	actions,
	getters

})
export default store