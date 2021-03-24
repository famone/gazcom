<template>
	<section id="news">
		<div class="container">
			<div class="col-lg-6">
				<h2>Новости</h2>
			</div>
			<div class="col-lg-6">
				<div class="news-navs">
					<div class="arrows">
						<div class="prevBtn"></div>
						<div class="nextBtn"></div>
					</div>
					<div class="swiper-pagination2"></div>
				</div>
			</div>

			<div class="row">
				<div class="col-lg-12">
					<swiper ref="mySwiper" :options="swiperOptions">
						<swiper-slide v-for="item in news">
		    				<div class="news-box">
		    					<div class="news-img" :style="{'background-image': 'url(' + item.img + ')'}"></div>
		    					<div class="news-body">
		    						<h4>{{item.title}}</h4>
		    						<p class="black-txt">
		    							{{item.descr}}
		    						</p>
		    						<router-link tag="button" :to=" '/news/' + item.link" class="arrow-btn">
										Читать далее <img src="../assets/img/blue-arr.svg" alt="">
									</router-link>
		    					</div>
		    				</div>
		    			</swiper-slide>
		    		</swiper>
				</div>
			</div>
		</div>
	</section>
</template>


<script>
	export default{
		computed: {
			swiper(){
	       		return this.$refs.mySwiper.$swiper
	    	},
		},
		data(){
			return{
				news: [
					{
						img: require('../assets/img/news1.jpg'),
						link: 'news1',
						title: 'Название публикации или новостной статьи',
						descr: 'Краткое описание, сокращенное до н-го кол-ва символов, с возможгостью перехода далее...'
					},
					{
						img: require('../assets/img/news1.jpg'),
						link: 'news1',
						title: 'Название публикации или новостной статьи',
						descr: 'Краткое описание, сокращенное до н-го кол-ва символов, с возможгостью перехода далее...'
					},
					{
						img: require('../assets/img/news1.jpg'),
						link: 'news1',
						title: 'Название публикации или новостной статьи',
						descr: 'Краткое описание, сокращенное до н-го кол-ва символов, с возможгостью перехода далее...'
					}
				],
				swiperOptions: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                  draggable: true,
                  touchRatio: 1,
                  loop: true,    
                  infinite: true,
                  speed: 300,
                   parallax: true,
                  centeredSlides: true,
                  navigation: {
		            nextEl: '.nextBtn',
		            prevEl: '.prevBtn',
		          },
		          pagination: {
			        el: '.swiper-pagination2',
			        clickable: true,
			       },
		           breakpoints: {
			            320: {
			              slidesPerView: 1,
			              touchRatio: 1
			            },
			            768: {
				          slidesPerView: 2,
				          touchRatio: 1
				        },
				        1150: {
				          slidesPerView: 3,
				           touchRatio: 1
				        }
			        }
            	}
			}
		}
	}
</script>

<style scoped>
	.swiper-container{
		padding-bottom: 40px;
	}
</style>