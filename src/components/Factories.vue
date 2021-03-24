<template>
	<section id="factories">
		<div class="container">
			<div class="col-lg-12">
				<h2>Производители</h2>
			</div>
			<div class="col-lg-3 text-center" v-for="brand in brands">
				<div class="factory">
					<img :src="brand.img" alt=""> <br>
					<router-link tag="a" to="" class="blue-link">Товары фирмы <br> {{brand.txt}}</router-link>
				</div>
			</div>
		</div>
	</section>

</template>


<script>
	export default{
		data(){
			return{
				brands:[
					{
						txt: 'Cигнал',
						img: require('../assets/img/f1.jpg')
					},
					{
						txt: 'Friatec',
						img: require('../assets/img/f2.jpg')
					},
					{
						txt: 'Temper',
						img: require('../assets/img/f3.jpg')
					},
					{
						txt: 'Elster',
						img: require('../assets/img/f4.jpg')
					},
					{
						txt: 'Cигнал',
						img: require('../assets/img/f1.jpg')
					},
					{
						txt: 'Friatec',
						img: require('../assets/img/f2.jpg')
					},
					{
						txt: 'Temper',
						img: require('../assets/img/f3.jpg')
					},
					{
						txt: 'Elster',
						img: require('../assets/img/f4.jpg')
					},
				]
			}
		}
	}
</script>	