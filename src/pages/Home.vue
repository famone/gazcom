<template>
	<div>
		<Slider />
		<Catalog />
		<About />
		<Docs />
		<!-- <News /> -->
		<Contactus />
		<Factories />
	</div>
</template>

<script>
import Slider from '../components/Slider.vue'
import Catalog from '../components/Catalog.vue'
import About from '../components/About.vue'
import Docs from '../components/Docs.vue'
import News from '../components/News.vue'
import Contactus from '../components/Contactus.vue'
import Factories from '../components/Factories.vue'

	export default{
		components: {Slider, Catalog, About, Docs, News, Contactus, Factories}
	}
</script>