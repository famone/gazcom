
import axios from 'axios'

const projects = {
	namespaced: true,
	state: {
		category: [],
		singleCat: [],
		singleGood: {}
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
		}
	},
	actions: {
		loadCategory({commit}){
			axios
			.get('http://aquagaz.ru/wp-json/ag/v1/get/category')
			.then(res =>{
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
				console.log(res.data)
			})
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
		}
	}
}

export default projects


