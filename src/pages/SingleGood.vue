<template>
	<div>

		<breadcrumbs />

		<section id="catalog_section">
			<div class="container">
				<div class="row">
					<SideNavigation />
					{{loadSingGood}}
					<div class="col-lg-8">
						<div class="row">

							<!-- <pre>{{goodItem}}</pre> -->

							<div class="col-lg-12">
								<div class="good-page-box">
									<div class="row">
										<div class="col-lg-6">
											<img :src="goodItem.image" alt="">
										</div>
										<div class="col-lg-6">
											<h3>{{goodItem.title}}</h3>
											<p class="good-descr mb-0">Артикул: {{goodItem.sku}}</p>
											<p class="good-descr">
												<span v-if="goodItem.stock_status === 'instock' ">В наличии</span>
												<span v-else>Нет в наличии</span>
											</p>
											<div class="price-box">Цена: 
												<span v-if="goodItem.price === '999999999.00' ">По запросу</span>
												<span v-else>{{goodItem.price}} ₽</span>
												</div>
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

									<p class="black-txt" v-if="tabs[1].active">
										Lorem ipsum dolor sit amet consectetur adipisicing, elit. Repellendus, laudantium saepe quidem, cumque quaerat dolorem animi. Voluptates dolorum repellendus quam, maiores praesentium ad dolorem nesciunt, quaerat delectus sed magnam eveniet ducimus placeat obcaecati consectetur ex rerum autem totam ullam beatae natus fugiat? 
										<br>
										Repudiandae voluptatibus quam veritatis minima tempore voluptatem, dolore quae voluptate quasi consequuntur nobis velit mollitia in? Quis praesentium excepturi molestiae dolore, aut voluptatum sed perspiciatis id atque provident.
										<br>
										Lorem ipsum dolor sit amet consectetur adipisicing, elit. Repellendus, laudantium saepe quidem, cumque.
									</p>

									 <table style="width: 100%;" v-else>
										<tr>
									 		<th>Тип</th>
									 		<th>Размер</th>
											<th>Цена</th>
									 		<th>Выбрать</th>
									 	</tr>
									 	<tr v-for="variant in goodItem.variations">
									 		<td>{{variant.attributes.type}}</td>
									 		<td>{{variant.attributes.length}}</td>
											<td>
												<span v-if="variant.regular_price === '999999999.00' ">По запросу</span>
												<span v-else>{{variant.regular_price}} ₽</span>
											</td>
											<td><button class="check-btn">Выбрать</button></td>
									 	</tr>
									 	<!-- <tr>
									 		<td>Фитинг 50 мм</td>
									 		<td>1230 ₽</td>
									 	</tr>
									 	<tr>
									 		<td>Фитинг 50 мм</td>
									 		<td>1000 ₽</td>
									 	</tr> -->
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
import {mapGetters} from 'vuex'
import breadcrumbs from '../components/ui/breadcrumbs.vue'
import SideNavigation from '../components/ui/SideNavigation.vue'

	export default{
		components: {breadcrumbs, SideNavigation},
		props: ["id"],
		computed: {
			...mapGetters({
				goodItem: "catalog/getSingleGood"
			}),
			loadSingGood(){
				this.$store.dispatch('catalog/loadSingleGood', this.id)
			}
		},
		data(){
			return{
				tabs: [
					{
						name: 'Цены и вариации',
						active: true
					},
					{
						name: 'Описание',
						active: false
					}
				],
			}
		},
		methods: {
			changeTab(id){
				this.tabs.forEach(item =>{
					item.active = false
				})
				this.tabs[id].active = true
			}
		}
	}
</script>