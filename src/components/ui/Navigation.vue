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
						link: '/gazosnabzhenie',
						txt: 'Газоснабжение',
						subLinks: [
							{
								link: '/fff',
								txt: 'Подраздел 1',
							},
							{
								link: '/fff',
								txt: 'Подраздел 2',
							},
							{
								link: '/fff',
								txt: 'Подраздел 3',
							}
						] 
					},
					{
						link: '/vodosnabzhenie',
						txt: 'Водоснабжение'
					},
					{
						link: '/otoplenie',
						txt: 'Отопление'
					}
				]
			}
		}
	}
</script>	