<template>
	<div class="nav">
		<div class="container">
			<ul class="level1">
				<router-link tag="li" :to="nav.link" v-for="nav in navigation" 
					:class="{subLinked : nav.subLinks}">
					{{nav.txt}}
						<ul class="level2" v-if="nav.subLinks">
							<router-link tag="li" :to="sub.link" v-for="sub in nav.subLinks">
								{{sub.txt}}
							</router-link>
						</ul>
				</router-link>
			</ul>
		</div>
	</div>
</template>


<script>
	export default{
		data(){
			return{
				navigation: [
					{
						link: '/catalog/gazosnabzhenie',
						txt: 'Газоснабжение',
						subLinks: [
							{
								link: '/catalog/gazosnabzhenie/1',
								txt: 'Подраздел 1',
							},
							{
								link: '/catalog/gazosnabzhenie/2',
								txt: 'Подраздел 2',
							},
							{
								link: '/catalog/gazosnabzhenie/3',
								txt: 'Подраздел 3',
							}
						] 
					},
					{
						link: '/catalog/vodosnabzhenie',
						txt: 'Водоснабжение'
					},
					{
						link: '/catalog/otoplenie',
						txt: 'Отопление'
					}
				]
			}
		}
	}
</script>	