<template>
	<div>
		<footer>
			<div class="container">
				<div class="col-lg-6">
					<h5>Контакты</h5>
					<p class="small-white">
						ООО Аквагазком - продажа 
						<br>оборудования для инженерных  <br>
						систем
					</p>
					<a href="tel:+79313436553" class="strong-link">+7 931 343-65-53</a>
					<br>
					<a href="mailto:citygazline@mail.ru" class="strong-link">citygazline@mail.ru</a>
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
								txt: 'Frialen',
								link: '/catalog/gazosnobzhenie/frialen'
							},
							{
								txt: 'Фитинги GF',
								link: '/catalog/gazosnobzhenie/fitingi-gf-gazosnobzhenie'
							},
						]
					},
					{	
						mainLink: '/gazosnabjenie/',
						txt: 'Меню',
						links: [
							{
								txt: 'О нас',
								link: 'grpsh'
							},
							{
								txt: 'Документы',
								link: 'grpsh'
							},
							{
								txt: 'Контакты',
								link: 'grpsh'
							},
						]
					},
				]
			}
		} 
	}
</script>