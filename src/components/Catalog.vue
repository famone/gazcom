<template>
	<section id="catalog">
		<div class="container">
			<div class="col-lg-12">
				<h2>Каталог продукции</h2>
			</div>
			<div class="col-lg-4" v-for="cat in categories">
				<div class="catalog-box text-center">
					<img :src="cat.img" alt="">
					<h3 class="text-left"><img :src="cat.icon" alt="">{{cat.txt}}</h3>
					<ul class="text-left">
						<router-link v-for="link in cat.links" tag="li" :to="link.link ">
							{{link.txt}}
						</router-link>
					</ul>
					<div class="text-left">
						<router-link tag="button" :to="cat.links[1].link" class="arrow-btn">
							Все товары <img src="../assets/img/blue-arr.svg" alt="">
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default{
		data(){
			return{
				categories: [
					{	
						txt: 'Газоснабжение',
						icon: require('../assets/img/fire.svg'),
						img: require('../assets/img/cat1.jpg'),
						links: [
							{
								txt: 'Frialen',
								link: '/catalog/gazosnobzhenie/frialen'
							},
							{
								txt: 'Фитинги  GF',
								link: '/catalog/gazosnobzhenie/fitingi-gf-gazosnobzhenie'
							}
						]
					},
					// {	
					// 	mainLink: '/vodoosnabjenie/',
					// 	txt: 'Водоснабжение',
					// 	icon: require('../assets/img/water.svg'),
					// 	img: require('../assets/img/cat2.jpg'),
					// 	links: [
					// 		{
					// 			txt: 'ГРПШ',
					// 			link: 'grpsh'
					// 		},
					// 		{
					// 			txt: 'Цокольные вводы и спецотводы',
					// 			link: 'grpsh'
					// 		},
					// 		{
					// 			txt: 'Счетчики газа промышленные',
					// 			link: 'grpsh'
					// 		},
					// 		{
					// 			txt: 'Счетчики газа бытовые',
					// 			link: 'grpsh'
					// 		},
					// 		{
					// 			txt: 'Электросварные фитинги для ПНД труб',
					// 			link: 'grpsh'
					// 		},
					// 	]
					// },
					// {	
					// 	mainLink: '/gazosnabjenie/',
					// 	txt: 'Отопление',
					// 	icon: require('../assets/img/heating.svg'),
					// 	img: require('../assets/img/cat3.jpg'),
					// 	links: [
					// 		{
					// 			txt: 'ГРПШ',
					// 			link: 'grpsh'
					// 		},
					// 		{
					// 			txt: 'Цокольные вводы и спецотводы',
					// 			link: 'grpsh'
					// 		},
					// 		{
					// 			txt: 'Счетчики газа промышленные',
					// 			link: 'grpsh'
					// 		},
					// 		{
					// 			txt: 'Счетчики газа бытовые',
					// 			link: 'grpsh'
					// 		},
					// 		{
					// 			txt: 'Электросварные фитинги для ПНД труб',
					// 			link: 'grpsh'
					// 		},
					// 	]
					// },
				]
			}
		}
	}
</script>