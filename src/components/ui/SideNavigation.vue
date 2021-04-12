<template>
	<div class="col-lg-4 sticky-nav">
		<div class="side-navigation">
			<div class="side-category" v-for="(cat, index) in categories" :class="{activeCategory : cat.active}">
				<div class="side-category-btn" @click="openNav(index)">{{cat.name}} 
					<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clip-path="url(#clip0)">
						<path d="M13.3453 8.5C13.3453 8.80468 13.2289 9.10931 12.9968 9.3416L5.68707 16.6512C5.22208 17.1162 4.46818 17.1162 4.00338 16.6512C3.53859 16.1864 3.53859 15.4327 4.00338 14.9676L10.4714 8.5L4.00361 2.03232C3.53881 1.56733 3.53881 0.813663 4.00361 0.348902C4.46841 -0.11631 5.22231 -0.11631 5.68729 0.348902L12.997 7.6584C13.2292 7.8908 13.3453 8.19544 13.3453 8.5Z"/>
						</g>
						<defs>
						<clipPath id="clip0">
						<rect width="17" height="17" transform="translate(0 17) rotate(-90)"/>
						</clipPath>
						</defs>
					</svg>
				</div>
				<ul>
					<router-link tag="li" :to="sub.link" v-for="sub in cat.subCategories">
						{{sub.txt}}
					</router-link>
				</ul>
			</div>
		</div>
	</div>
</template>



<script>
	export default{
		methods: {
			openNav(id){
				this.categories[id].active = !this.categories[id].active
			}
		},
		data(){
			return{
				categories: [
					{
						name: 'Фитинги водопроводные',
						cat: 'gazosnabzhenie',
						active: true,
						subCategories: [
							{
								txt: 'Фитинг изогнутый',
								link: 'fiting-izognuty'
							},
							{
								txt: 'Фитинг изогнутый',
								link: 'fiting-izognuty'
							},
							{
								txt: 'Фитинг изогнутый',
								link: 'fiting-izognuty'
							},
						]
					},
					{
						name: 'Фитинги водопроводные',
						cat: 'gazosnabzhenie',
						active: false,
						subCategories: [
							{
								txt: 'Фитинг изогнутый',
								link: 'fiting-izognuty'
							},
							{
								txt: 'Фитинг изогнутый',
								link: 'fiting-izognuty'
							},
							{
								txt: 'Фитинг изогнутый',
								link: 'fiting-izognuty'
							},
						]
					},
					{
						name: 'Фитинги водопроводные',
						cat: 'gazosnabzhenie',
						active: false,
						subCategories: [
							{
								txt: 'Фитинг изогнутый',
								link: 'fiting-izognuty'
							},
							{
								txt: 'Фитинг изогнутый',
								link: 'fiting-izognuty'
							},
							{
								txt: 'Фитинг изогнутый',
								link: 'fiting-izognuty'
							},
						]
					},
					{
						name: 'Фитинги водопроводные',
						cat: 'gazosnabzhenie',
						active: false,
						subCategories: [
							{
								txt: 'Фитинг изогнутый',
								link: 'fiting-izognuty'
							},
							{
								txt: 'Фитинг изогнутый',
								link: 'fiting-izognuty'
							},
							{
								txt: 'Фитинг изогнутый',
								link: 'fiting-izognuty'
							},
						]
					},
					{
						name: 'Фитинги водопроводные',
						cat: 'gazosnabzhenie',
						active: false,
						subCategories: [
							{
								txt: 'Фитинг изогнутый',
								link: 'fiting-izognuty'
							},
							{
								txt: 'Фитинг изогнутый',
								link: 'fiting-izognuty'
							},
							{
								txt: 'Фитинг изогнутый',
								link: 'fiting-izognuty'
							},
						]
					},
				]
			}
		}
	}
</script>	