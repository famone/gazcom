<template>
	<section id="breadcrumbs">
		<div class="container">
			<div class="breadcrumbs">
				<router-link tag="span" to="/">Главная</router-link>/
				<router-link tag="span" to="/">Водоснабжение</router-link>/
				<span class="active-page">Фитинги</span>
			</div>
		</div>
	</section>
</template>


<style>
#breadcrumbs{
	padding: 30px 0;
}
.breadcrumbs span{
	font-weight: 500;
	font-size: 18px;
	color: #878A93;
}
.breadcrumbs span.active-page{
	color: #235EA0;
}
</style>