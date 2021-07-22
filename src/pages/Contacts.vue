<template>
    <section id="about">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2>Контакты</h2>
                </div>
                <div class="col-lg-4">
                    <div class="cont-icon">
                        <img src="../assets/img/ci1.svg" alt="">
                        <h4>Телефон офиса:</h4>
                        <a href="tel:+79313436553" class="cont-link">+7 931 343-65-53</a>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="cont-icon">
                        <img src="../assets/img/ci1.svg" alt="">
                        <h4>Мобильный тел:</h4>
                        <a href="tel:+79045599370" class="cont-link"> +7 904 559-93-70</a>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="cont-icon">
                        <img src="../assets/img/ci2.svg" alt="">
                        <h4>Электронный адрес:</h4>
                        <a href="mailto:citygazline@mail.ru" class="cont-link">citygazline@mail.ru</a>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="cont-icon">
                        <img src="../assets/img/ci3.svg" alt="">
                        <h4>Фактический адрес:</h4>
                        <p class="black-txt">188300, Ленинградская область, Гатчинский район, город Гатчина, улица 7 Армии, дом 18, помещение 4</p>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="cont-icon">
                        <img src="../assets/img/ci3.svg" alt="">
                        <h4>Юридический адрес:</h4>
                        <p class="black-txt">188310, Ленинградская область, Гатчинский район, деревня Малые Колпаны, Речной микрорайон, дом 4, квартира 313</p>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="cont-icon">
                        <img src="../assets/img/ci4.svg" alt="">
                        <h4>Реквизиты:</h4>
                        <p class="black-txt">ООО "АКВАГАЗКОМ" <br>
                            ОГРН: 1204700016784<br>
                            ИНН: 4705088185
                        </p>

                    </div>
                </div>


                <div class="col-lg-12" id="mapa">
                    <yandex-map :coords="defaultCoordinates" :scroll-zoom="false" :controls="[]"  :zoom="14" >
                        <ymap-marker :coords="defaultCoordinates" :icon="markerIcon" marker-id="123"  />
                    </yandex-map>
                </div>
            </div>
        </div>
    </section>
</template>


<script>

    export default {
        data(){
            return{
                defaultCoordinates: [59.572421, 30.137508],
                markerIcon: {
					layout: 'default#imageWithContent',
				    imageHref: require('../assets/img/pin.svg'),
				    imageSize: [43, 43],
				    imageOffset: [0, 0],
				},
            }
        }
    }
</script>
