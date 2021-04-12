<template>
	<div>
		
		<breadcrumbs />

		<section id="catalog_section">
			<div class="container">
				<div class="row">
					<SideNavigation />

					<div class="col-lg-8">
						<div class="row">
							<GoodItem  v-for="goodItem in goods" :goodItem="goodItem" />
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

	export default{
		components: {breadcrumbs, SideNavigation, GoodItem},
		data(){
			return{
				goods: [
					{
						name: 'Фитинг типа A - Гнутый',
						descr: 'Производитель: DELUXEE',
						img: require('../assets/img/good1.jpg'),
						cat: 'gazosnabzhenie',
						id: 1
					},
					{
						name: 'Фитинг типа Б - Гнутый',
						descr: 'Производитель: DELUXEE',
						img: require('../assets/img/good1.jpg'),
						cat: 'gazosnabzhenie',
						id: 2
					},
					{
						name: 'Фитинг типа Б - Гнутый',
						descr: 'Производитель: DELUXEE',
						img: require('../assets/img/good1.jpg'),
						cat: 'gazosnabzhenie',
						id: 3
					},
					{
						name: 'Фитинг типа A - Гнутый',
						descr: 'Производитель: DELUXEE',
						img: require('../assets/img/good1.jpg'),
						cat: 'gazosnabzhenie',
						id: 4
					},
					{
						name: 'Фитинг типа Б - Гнутый',
						descr: 'Производитель: DELUXEE',
						img: require('../assets/img/good1.jpg'),
						cat: 'gazosnabzhenie',
						id: 5
					},
					{
						name: 'Фитинг типа Б - Гнутый',
						descr: 'Производитель: DELUXEE',
						img: require('../assets/img/good1.jpg'),
						cat: 'gazosnabzhenie',
						id: 6
					},
					{
						name: 'Фитинг типа A - Гнутый',
						descr: 'Производитель: DELUXEE',
						img: require('../assets/img/good1.jpg'),
						cat: 'gazosnabzhenie',
						id: 7
					},
					{
						name: 'Фитинг типа Б - Гнутый',
						descr: 'Производитель: DELUXEE',
						img: require('../assets/img/good1.jpg'),
						cat: 'gazosnabzhenie',
						id: 8
					},
					{
						name: 'Фитинг типа Б - Гнутый',
						descr: 'Производитель: DELUXEE',
						img: require('../assets/img/good1.jpg'),
						cat: 'gazosnabzhenie',
						id: 9
					},
				]
			}
		}
	}
</script>