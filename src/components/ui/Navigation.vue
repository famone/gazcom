<template>
	<div class="nav">
		<div class="container">
			<ul class="level1" v-if="categories">
				<li v-for="cat in categories" 
					:class="{subLinked : cat.child}">
					{{cat.name}}
						<ul class="level2" v-if="cat.child">
							<router-link tag="li" :to="'/catalog/' + cat.slug + '/' + sub.slug" v-for="sub in cat.child">
								{{sub.name}} ({{sub.count}})
							</router-link>
						</ul>
				</li>
			</ul>
			<!-- <pre>{{categories}}</pre> -->
		</div>
	</div>
</template>


<script>
import {mapGetters} from 'vuex'

	export default{
		computed: {
			...mapGetters({
				categories: "catalog/getCategory"
			})
		},
		data(){
			return{
				navigation: [
					{
						link: '/catalog/gazosnabzhenie',
						txt: 'Газоснабжение',
						subLinks: [
							{
								link: '/catalog/gazosnabzhenie/1',
								txt: 'Подраздел 1',
							},
							{
								link: '/catalog/gazosnabzhenie/2',
								txt: 'Подраздел 2',
							},
							{
								link: '/catalog/gazosnabzhenie/3',
								txt: 'Подраздел 3',
							}
						] 
					},
					{
						link: '/catalog/vodosnabzhenie',
						txt: 'Водоснабжение'
					},
					{
						link: '/catalog/otoplenie',
						txt: 'Отопление'
					}
				]
			}
		}
	}
</script>	