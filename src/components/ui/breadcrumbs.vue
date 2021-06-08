<template>
	<section id="breadcrumbs" v-if="categories.length">
		<div class="container">
			<div class="breadcrumbs" v-if="this.$route.params.id">
				<router-link tag="span" :to=" '/catalog/' + setBreadcrumbs.category.link ">{{setBreadcrumbs.category.txt}}</router-link>/
				<router-link tag="span" :to=" '/catalog/' + setBreadcrumbs.subCategory.link ">{{setBreadcrumbs.subCategory.txt}}</router-link>/
				<span class="active-page">{{goodItem.title}}</span>
			</div>
			<div class="breadcrumbs" v-else>
				<router-link tag="span" :to=" '/catalog/' + setBreadcrumbs.category.link ">{{setBreadcrumbs.category.txt}}</router-link>/
				<span class="active-page">{{setBreadcrumbs.subCategory.txt}}</span>
			</div>
		</div>
	</section>
</template>


<script>
import {mapGetters} from 'vuex'

	export default{
		
		computed: {
			...mapGetters({
				categories: "catalog/getCategory",
				goodItem: "catalog/getSingleGood"
			}),
			setBreadcrumbs(){
				if(this.categories.length){
					let cat = this.categories.find(item =>{
						return item.slug === this.$route.params.cat
					})
					let subcat = cat.child.find(item => {
						return item.slug === this.$route.params.sub
					})


					let result = {
						category: {
							txt: cat.name,
							link: cat.slug
						},
						subCategory: {
							txt: subcat.name,
							link: subcat.slug
						},
					}

					return result

				}
			}
		}
	}
</script>


<style>
#breadcrumbs{
	padding: 30px 0;
}
.breadcrumbs span{
	font-weight: 500;
	font-size: 18px;
	color: #878A93;
}
.breadcrumbs span.active-page{
	color: #235EA0;
}
</style>