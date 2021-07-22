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
						txt: 'VAG',
						img: require('../assets/img/par1.jpg')
					},
					{
						txt: 'AVR',
						img: require('../assets/img/par2.jpg')
					},
					{
						txt: 'CTC',
						img: require('../assets/img/par3.jpg')
					},
					{
						txt: 'Friatec',
						img: require('../assets/img/par4.jpg')
					},
					{
						txt: 'Nordpipe',
						img: require('../assets/img/par5.jpg')
					},
					{
						txt: 'Polymer',
						img: require('../assets/img/par6.jpg')
					},
					{
						txt: 'HAWLE',
						img: require('../assets/img/par7.jpg')
					},
					{
						txt: 'Viking Johnson',
						img: require('../assets/img/par8.jpg')
					},
					{
						txt: 'UralPlast',
						img: require('../assets/img/par9.jpg')
					},
					{
						txt: 'Agru',
						img: require('../assets/img/par10.jpg')
					},
					{
						txt: '+GF+',
						img: require('../assets/img/par11.jpg')
					},
				]
			}
		}
	}
</script>	