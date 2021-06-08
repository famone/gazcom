<template>
	<div class="col-lg-6">
		<!-- <pre>{{goodItem}}</pre> -->
		<router-link tag="div" :to="'/catalog/'" class="good-item-box">
		
			<div class="good-img" :style="{'background-image': 'url(' + 'https://kknd26.ru/images/no_photo.png' + ')'}" v-if="!goodItem.image"></div>
			<div class="good-img" :style="{'background-image': 'url(' + goodItem.image + ')'}" v-else></div>
			
			<div class="good-body">
				<p class="good-title">{{goodItem.title}}</p>
				<p class="good-descr">{{goodItem.description.slice(0,75)}}...</p>
				<router-link tag="button" :to=" `/catalog/${this.$route.params.cat}/${this.$route.params.sub}/${goodItem.name}` " class="blue-btn">Подробнее</router-link>
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
			},
			sub: {
				required: true,
				type: String
			},
			cat: {
				required: true,
				type: String
			}
		}
	}
</script>

