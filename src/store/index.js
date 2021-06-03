import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import catalog from '../store/catalog'

export default new Vuex.Store({
	modules: {
		catalog,

	}
}) 