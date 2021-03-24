<template>
	<div>
		<footer>
			<div class="container">
				<div class="col-lg-3">
					<h5>Контакты</h5>
					<p class="small-white">
						ООО Аквагазком - продажа 
						<br>оборудования для инженерных  <br>
						систем
					</p>
					<a href="tel:+78124444444" class="strong-link">8 (812) 444-44-44</a>
					<p class="strong-link">Гатчина, ул. 7-й армии, 8 Б</p>
				</div>
				<div class="col-lg-3" v-for="cat in categories">
					<h5>{{cat.txt}}</h5>
					<ul>
						<router-link tag=li :to="link.link" class="white-link" v-for="link in cat.links">
							{{link.txt}}
						</router-link>
					</ul>
				</div>
			</div>
		</footer>
		<div class="copyright text-center">
			<p class="webink">
				<a href="https://webink.site/">Разработано в Webink.</a>
			</p>
		</div>
	</div>
</template>



<script>
	export default{
		data(){
			return{
				categories: [
					{	
						mainLink: '/gazosnabjenie/',
						txt: 'Газоснабжение',
						links: [
							{
								txt: 'ГРПШ',
								link: 'grpsh'
							},
							{
								txt: 'Цокольные вводы и спецотводы',
								link: 'grpsh'
							},
							{
								txt: 'Счетчики газа промышленные',
								link: 'grpsh'
							},
							{
								txt: 'Счетчики газа бытовые',
								link: 'grpsh'
							},
							{
								txt: 'Электросварные фитинги для ПНД труб',
								link: 'grpsh'
							},
						]
					},
					{	
						mainLink: '/vodoosnabjenie/',
						txt: 'Водоснабжение',
						links: [
							{
								txt: 'ГРПШ',
								link: 'grpsh'
							},
							{
								txt: 'Цокольные вводы и спецотводы',
								link: 'grpsh'
							},
							{
								txt: 'Счетчики газа промышленные',
								link: 'grpsh'
							},
							{
								txt: 'Счетчики газа бытовые',
								link: 'grpsh'
							},
							{
								txt: 'Электросварные фитинги для ПНД труб',
								link: 'grpsh'
							},
						]
					},
					{	
						mainLink: '/gazosnabjenie/',
						txt: 'Отопление',
						links: [
							{
								txt: 'ГРПШ',
								link: 'grpsh'
							},
							{
								txt: 'Цокольные вводы и спецотводы',
								link: 'grpsh'
							},
							{
								txt: 'Счетчики газа промышленные',
								link: 'grpsh'
							},
							{
								txt: 'Счетчики газа бытовые',
								link: 'grpsh'
							},
							{
								txt: 'Электросварные фитинги для ПНД труб',
								link: 'grpsh'
							},
						]
					},
				]
			}
		} 
	}
</script>