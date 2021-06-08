<template>
	<header>
		<div class="header1">
			<div class="container">
				<div class="shapka">
					<router-link tag="div" to="/" class="logo">
						<img src="../../assets/img/logo.png" alt="">
						<p class="small-black">ООО Аквагазком - продажа оборудования <br>
						для инженерных систем</p>
					</router-link>
					<div class="side-inf">
						<a href="#" class="simple-link"><img src="../../assets/img/tel.svg" alt="">8 (812) 444-44-44</a>
						<a href="#" class="simple-link"><img src="../../assets/img/time.svg" alt="">Пн-пт с 9:00 до 18:00</a>
						<router-link tag="button" to="/cart" class="cart-btn">
							<img src="../../assets/img/cart.svg" alt="">
							Корзина: <span>{{cart.length}}</span>
						</router-link>
					</div>
				</div>
				<div class="shapka" style="border-bottom: none;">
					<ul>
						<router-link v-for="nav in navs" tag="li" :to="nav.link">
							{{nav.txt}}
						</router-link>
					</ul>
					<div class="search">
						<input type="search" placeholder="Поиск по каталогу">
						<button>
							<img src="../../assets/img/search.svg" alt="">
						</button>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>


<script>
import {mapGetters} from 'vuex'

	export default{
		computed: {
			...mapGetters({
				cart: "catalog/getCart"
			})
		},
		data(){
			return{
				navs: [
					{
						link: '/projects',
						txt: 'О нас'
					},
					{
						link: '/team',
						txt: 'Документы'
					},
					{
						link: '/team',
						txt: 'Новости'
					},
					{
						link: '/contacts',
						txt: 'Контакты'
					}
				]
			}
		}
	}
</script>	