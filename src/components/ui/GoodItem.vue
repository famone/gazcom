<template>
	<div class="col-lg-4">
		<router-link tag="div" :to="'/catalog/' + goodItem.cat + '/' + goodItem.id" class="good-item-box">
			<div class="good-img"></div>
			<div class="good-body">
				<p class="good-title">{{goodItem.name}}</p>
				<p class="good-descr">{{goodItem.descr}}</p>
				<router-link tag="button" :to="'/catalog/' + goodItem.cat + '/' + goodItem.id" class="blue-btn">Подробнее</router-link>
				<!-- :style="{'background-image': 'url(' + item.img + ')'}" -->
			</div>
		</router-link>
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