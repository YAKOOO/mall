export default
{
//定义一个添加物品到购物车的方法 state是传入的vuex 上面保存的数据
	// payload是 点击购物车后传来的数据 把 payload push 到cartList里面
	addCart(context,payload){
	//查找之前数组是否有 该商品 用iid来判断
	let product = context.state.cartList.find(item => item.iid ===payload.iid)
	if(product){
		context.commit('addCounter',product)
	}
	else {
		payload.count = 1
		context.commit('addToCart',payload)
	}
}
}