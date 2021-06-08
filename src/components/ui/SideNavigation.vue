<template>
	<div class="col-lg-4 sticky-nav">
		<div class="side-navigation" v-if="ctgries.length">

			 <div class="side-category activeCategory" v-for="(cat, index) in getCategories" v-if="cat.child">
				<div class="side-category-btn">{{cat.name}} 
					
				</div>
				<ul>
					<router-link tag="li" :to="'/catalog/' + cat.slug + '/' + sub.slug" v-for="sub in cat.child"
					>
						{{sub.name}} ({{sub.count}})
					</router-link>
				</ul>
			</div>
		</div>
	</div>
</template>



<script>
import {mapGetters} from 'vuex'

	export default{
		methods: {
			openNav(id){
				this.categories[id].active = true
			}
		},
		computed: {
			...mapGetters({
				ctgries: "catalog/getCategory"
			}),
			getCategories(){
				if(this.ctgries.length){
					this.categories = this.ctgries
					return this.categories
				}
			}
		},
		data(){
			return{
				categories: []
			}
		}
	}
</script>	