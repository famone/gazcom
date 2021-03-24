<template>
	<section id="contactus">
		<div class="container">
			<div class="col-lg-12 text-center">
				<h2>Будем сотрудничать </h2>
			</div>
			<div class="row">
				<form action="">
					<div class="col-lg-4 col-lg-offset-2">
						<label for="">Ваше имя</label>
						<input type="text" placeholder="Ваше имя">
					</div>
					<div class="col-lg-4">
						<label for="">Ваш телефон</label>
						<input type="text" placeholder="+7 (" v-mask="'+7 (###) ###-##-##'"> 
					</div>	
					<div class="col-lg-12 text-center">
						<button class="submit-btn">Отправить</button>
						<p class="small-white">Отправляя данную форму, вы подтверждаете <br>
						свое согласие на обработку персональных данных</p>
					</div>
				</form>
			</div>
		</div>
	</section>
</template>