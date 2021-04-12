import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import Catalog from '../pages/Catalog.vue'
import SingleGood from '../pages/SingleGood.vue'

const routes = [
		{
			path: '/',
			component: Home
		},
		{
			path: '/catalog/:cat',
			component: Catalog,
			props: true
		},
		{
			path: '/catalog/:cat/:id',
			component: SingleGood,
			props: true
		},
	]

export default routes;