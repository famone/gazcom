<template>
	<div>
		
		<breadcrumbs  />

		<pre style="display:none;">{{loadSingCat}}</pre>

		<section id="catalog_section">
			<div class="container">
				<div class="row">
					<SideNavigation />
					
					<Skeletons v-if="!singleCategory.length" />
					<div class="col-lg-8" v-else>
						<div class="row">
							<GoodItem  v-if="goods" v-for="goodItem in singleCategory" 
							:goodItem="goodItem"
							:sub="sub"
							:cat="cat"
							 />
						</div>
					</div>

				</div>
			</div>
		</section>


	</div>
</template>

<script>
import breadcrumbs from '../components/ui/breadcrumbs.vue'
import SideNavigation from '../components/ui/SideNavigation.vue'
import GoodItem from '../components/ui/GoodItem.vue'
import Skeletons from '../components/ui/Skeletons.vue'
import axios from 'axios'
import { mapGetters } from 'vuex'

	export default{
		components: {breadcrumbs, SideNavigation, GoodItem, Skeletons},
		props: ["sub", "cat"],
		computed: {
			...mapGetters({
				singleCategory: "catalog/getSingleCat",
				categories: "catalog/getCategory"
			}),
			loadSingCat(){
				this.$store.dispatch('catalog/loadSingleCat', this.sub)
			}
		},
		data(){
			return{
				goods: [],
				loader: true
			}
		}
	}
</script>