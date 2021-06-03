<template>
	<div>

		<breadcrumbs />

		<section id="catalog_section">
			<div class="container">
				<div class="row">
					<SideNavigation />

					<div class="col-lg-8">
						<div class="row">

							<div class="col-lg-12">
								<div class="good-page-box">
									<div class="row">
										<div class="col-lg-6">
											<img :src="goodItem.img" alt="">
										</div>
										<div class="col-lg-6">
											<h3>{{goodItem.name}}</h3>
											<p class="good-descr">{{goodItem.descr}}</p>
											<div class="price-box">Цена: <span>{{goodItem.price}} ₽</span></div>
											<button class="main-btn">Связаться с консультантом</button>
											<button class="blue-btn">Добавить в корзину</button>
										</div>
									</div>
								</div>
							</div>

							<div class="col-lg-12">
								<div class="tab-btns">
									<button v-for="(tab, index) in tabs" :class="{activeTab : tab.active}" @click="changeTab(index)">
										{{tab.name}}
									</button>
								</div>

									<p class="black-txt" v-if="tabs[0].active">
										Lorem ipsum dolor sit amet consectetur adipisicing, elit. Repellendus, laudantium saepe quidem, cumque quaerat dolorem animi. Voluptates dolorum repellendus quam, maiores praesentium ad dolorem nesciunt, quaerat delectus sed magnam eveniet ducimus placeat obcaecati consectetur ex rerum autem totam ullam beatae natus fugiat? 
										<br>
										Repudiandae voluptatibus quam veritatis minima tempore voluptatem, dolore quae voluptate quasi consequuntur nobis velit mollitia in? Quis praesentium excepturi molestiae dolore, aut voluptatum sed perspiciatis id atque provident.
										<br>
										Lorem ipsum dolor sit amet consectetur adipisicing, elit. Repellendus, laudantium saepe quidem, cumque.
									</p>

									 <table style="width: 100%;" v-else>
									 	<tr>
									 		<td>Название</td>
									 		<td>Цена</td>
									 	</tr>
									 	<tr>
									 		<td>Фитинг 50 мм</td>
									 		<td>1230 ₽</td>
									 	</tr>
									 	<tr>
									 		<td>Фитинг 50 мм</td>
									 		<td>1000 ₽</td>
									 	</tr>
									 </table>
								
							</div>	

						</div>
					</div>

				</div>
			</div>
		</section>
		
	</div>
</template>

<script>
import axios from 'axios'
import breadcrumbs from '../components/ui/breadcrumbs.vue'
import SideNavigation from '../components/ui/SideNavigation.vue'

	export default{
		components: {breadcrumbs, SideNavigation},
		data(){
			return{
				tabs: [
					{
						name: 'Описание',
						active: true
					},
					{
						name: 'Цены и вариации',
						active: false
					}
				],
				goodItem: {
					name: 'Фитинг типа A - Гнутый',
					descr: 'Производитель: DELUXEE',
					price: 150,
					img: require('../assets/img/good1.jpg'),
				}
			}
		},
		methods: {
			changeTab(id){
				this.tabs.forEach(item =>{
					item.active = false
				})
				this.tabs[id].active = true
			}
		},
		created(){
			
		}
	}
</script>