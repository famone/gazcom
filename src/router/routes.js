import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import Catalog from '../pages/Catalog.vue'
import SingleGood from '../pages/SingleGood.vue'
import Cart from '../pages/Cart.vue'
import About from '../pages/About.vue'
import Docs from '../pages/Docs.vue'
import Contacts from '../pages/Contacts.vue'

const routes = [
		{
			path: '/',
			component: Home
		},
		{
			path: '/catalog/:cat/:sub',
			component: Catalog,
			props: true
		},
		{
			path: '/catalog/:cat/:sub/:id',
			component: SingleGood,
			props: true
		},
		{
			path: '/cart',
			component: Cart
		},
		{
			path: '/contacts',
			component: Contacts
		},
		{
			path: '/about',
			component: About
		},
		{
			path: '/docs',
			component: Docs
		},
	]

export default routes;