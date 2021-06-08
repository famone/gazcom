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
							<div class="col-lg-12">
								<div class="good-page-box">
									<div class="row">
										<div class="col-lg-6">
											<img v-if="!goodItem.image" src="https://kknd26.ru/images/no_photo.png" alt="">
											<img v-else :src="goodItem.image" alt="">
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
											<button class="blue-btn" @click="addToCart()" :disabled="!goodForCart">Добавить в корзину</button>
											<p class="small-black text-center" style="margin-top:10px;">
												Чтобы добавить товар в корзину, необходимо выбрать параметры товара ниже
											</p>
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
										{{goodItem.description}}
									</p>

									 <table style="width: 100%;" v-else>
										<tr>
									 		<th v-for="atr in goodItem.attributes">{{atr}}</th>
											<th>Выбрать</th>
									 	</tr>
									 	<tr v-for="variant in goodItem.variations">
									 		<td v-for="atr in variant.attributes">{{atr}}</td>
											<td>
												<span v-if="variant.regular_price === '999999999.00' ">По запросу</span>
												<span v-else>{{variant.regular_price}} ₽</span>
											</td>
											<td>
												<div class="checked-btn" v-if="variant === goodForCart">
													<img src="../assets/img/tick.svg" alt="">
												</div>
												<button class="check-btn" @click="addVariant(variant)" v-else>Выбрать</button>
												
											</td>
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
				goodForCart: null,
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
			addVariant(variant){
				this.goodForCart = variant
			},
			addToCart(){
				let promise = {
					good: this.goodItem ,
					variation: this.goodForCart
				}

				this.$store.dispatch("catalog/addToCart", promise)

			},
			changeTab(id){
				this.tabs.forEach(item =>{
					item.active = false
				})
				this.tabs[id].active = true
			}
		}
	}
</script>


<style scoped>
.blue-btn:disabled, .blue-btn[disabled]{
	opacity: .5;
	cursor:not-allowed;
}
</style>