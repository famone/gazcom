
import axios from 'axios'

const projects = {
	namespaced: true,
	state: {
		category: [],
		singleCat: [],
		singleGood: null,
		cart: []
  	},
	mutations: {
		LOAD_CATEGORY(state, category){
			state.category = category
		},
		SET_SINGLE_CAT(state, singleCat){
			state.singleCat = singleCat
		},
		SET_SINGLE_GOOD(state, singleGood){
			state.singleGood = singleGood
		},
		SET_CART(state, good){
			let goodInCart = state.cart.find(item => {
				return item.variation.sku === good.variation.sku
			})
			if(goodInCart){
				goodInCart.quantity += 1
			}else{
				state.cart.push(good)
			}
		},
		ADD_QUANT(state, index){
			let newCart = state.cart
			state.cart = []
			
			newCart[index].quantity += 1
			state.cart = newCart
		},
		MIN_QUANT(state, index){
			let newCart = state.cart
			state.cart = []
			
			newCart[index].quantity += -1
			state.cart = newCart
		},
		DELETE_GOOD(state, index){
			state.cart.splice(index, 1)
		}
	},
	actions: {
		loadCategory({commit}){
			axios
			.get('http://aquagaz.ru/wp-json/ag/v1/get/category')
			.then(res =>{
				console.log(res.data)
				commit("LOAD_CATEGORY", res.data)
			})
		},
		loadSingleCat({commit, state}, sub){
			state.singleCat = []

			axios
			.get('http://aquagaz.ru/wp-json/ag/v1/get/products/' + sub)
			.then(res =>{
				commit("SET_SINGLE_CAT", res.data)
			})
		},
		loadSingleGood({commit, state}, id){
			state.singleGood = {}

			axios
			.get(`http://aquagaz.ru/wp-json/ag/v1/get/product/${id}`)
			.then(res =>{
				commit("SET_SINGLE_GOOD", res.data)
			})
		},
		// cart
		addToCart({commit}, promise){
			let good = {}

			good = promise.good
			good.variation = promise.variation
			good.quantity = 1

			commit("SET_CART", good)
		},
		addQuant({commit}, index){
			commit("ADD_QUANT", index)
		},
		minQuant({commit}, index){
			commit("MIN_QUANT", index)
		},
		deleteGood({commit}, index){
			commit("DELETE_GOOD", index)
		}
	},
	getters: {
		getCategory(state){
			return state.category
		},
		getSingleCat(state){
			return state.singleCat
		},
		getSingleGood(state){
			return state.singleGood
		},
		getCart(state){
			return state.cart
		}
	}
}

export default projects


