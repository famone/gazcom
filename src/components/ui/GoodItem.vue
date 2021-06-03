<template>
	<div class="col-lg-6">
		<!-- <pre>{{goodItem}}</pre> -->
		<router-link tag="div" :to="'/catalog/'" class="good-item-box">
		
			<div class="good-img" :style="{'background-image': 'url(' + 'https://lh3.googleusercontent.com/proxy/O8YkQsvoEVEZYcLrEvVSu8miSo6i5s9Gtrfl5MP6OH9jB8MijGWZtmug-vEjCXIG_UpWHlGOx91qg8T-JgkeUbuwIMxVZ6DSXi7Tm2Zs4ztIpoPW' + ')'}" v-if="!goodItem.image"></div>
			<div class="good-img" :style="{'background-image': 'url(' + goodItem.image + ')'}" v-else></div>
			
			<div class="good-body">
				<p class="good-title">{{goodItem.title}}</p>
				<p class="good-descr">{{goodItem.description.slice(0,75)}}...</p>
				<router-link tag="button" :to="'/catalog/'" class="blue-btn">Подробнее</router-link>
			</div>
		</router-link>

		<!-- :style="{'background-image': 'url(' + item.img + ')'}" -->
	</div>
</template>


<script>
	export default{
		props: {
			goodItem:{
				type: Object,
				required: true
			}
		}
	}
</script>

