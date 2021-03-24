import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import projects from '../store/projects'

export default new Vuex.Store({
	modules: {
		projects,

	}
}) 