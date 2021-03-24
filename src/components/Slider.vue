<template>
	<section id="slider">
		<div class="nav-btns">
			<div class="container">
				<div class="arrows">
					<div class="prevBtn"></div>
					<div class="nextBtn"></div>
				</div>
				<div class="swiper-pagination"></div>
			</div>
		</div>
		<swiper ref="mySwiper" :options="swiperOptions">
					<swiper-slide v-for="item in slides">
		    			<div class="slide" :style="{'background-image': 'url(' + item.img + ')'}">
		    				<div class="container">
		    					<h1 data-swiper-parallax="-500">{{item.title}}</h1>
		    					<p class="big-white" v-html="item.txt" data-swiper-parallax="-250"></p>
		    					 <button class="main-btn" data-swiper-parallax="-100">Посмотреть в каталоге</button>
		    				</div>
		    			</div>
		    		</swiper-slide>
		    	</swiper>
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
				slides: [
					{
						title: 'Оборудование DUNGS',
						txt: 'для обслуживания газораспределительных систем, <br> котельного оборудования и автоматики',
						link: '/fff',
						img: require('../assets/img/slide1.jpg')
					},
					{
						title: 'Оборудование DUNGS',
						txt: 'для обслуживания газораспределительных систем, <br> котельного оборудования и автоматики',
						link: '/fff',
						img: require('../assets/img/slide1.jpg')
					},
				],
				swiperOptions: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                  draggable: true,
                  touchRatio: 1,
                  loop: true,    
                  infinite: true,
                  speed: 800,
                   parallax: true,
                  centeredSlides: true,
                  navigation: {
		            nextEl: '.nextBtn',
		            prevEl: '.prevBtn',
		          },
		          pagination: {
			        el: '.swiper-pagination',
			        clickable: true,
			        },
		           breakpoints: {
			            320: {
			              slidesPerView: 1,
			              touchRatio: 1
			            },
			            768: {
				          slidesPerView: 1,
				          touchRatio: 1
				        },
				        1150: {
				          slidesPerView: 1,
				           touchRatio: 1
				        }
			        }
            	}
			}
		}
	}
</script>