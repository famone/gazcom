<template>
    <div>
        <section id="breadcrumbs" >
            <div class="container">
                <div class="breadcrumbs">
                    <router-link tag="span" to="/">Главная</router-link>/
                    <span class="active-page">Корзина</span>
                </div>
            </div>
        </section>

        <section id="catalog_section" v-if="!cart.length" style="padding: 100px 0;">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h2 style="margin-bottom:20px ;">Ваша корзина пуста</h2>
                    </div>
                </div>
            </div>
        </section>  
        <section id="catalog_section" v-else>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h2 style="margin-bottom:20px ;">Моя корзина</h2>
                        <hr>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="cart-item" v-for="(item, cartIndex) in cart" :key="cartIndex">
                            <div class="row">
                                <div class="col-lg-2">
                                    <img v-if="!item.image" src="https://kknd26.ru/images/no_photo.png" alt="">
                                    <img v-else :src="item.image" alt="">
                                </div>
                                <div class="col-lg-3">
                                    <p class="good-descr mb-0">Артикул: {{item.sku}}</p>
                                    <p class="cart-item-title">{{item.title}}</p>
                                </div>
                                <div class="col-lg-2">
                                    <p class="good-descr mb-0" v-for="(atr, index) in item.attributes">{{atr}}: 
                                        <strong style="color:#000;">{{item.variation.attributes[index]}}</strong>
                                    </p>
                                </div>
                                <div class="col-lg-2">
                                    <p class="good-descr mb-0">Кол-во шт:</p>
                                    <div class="quantity">
                                        <button class="minus" @click="minQuant(cartIndex)"><span>-</span></button>
                                        <span class="quant">{{item.quantity}}</span>
                                        <button class="plus" @click="addQuant(cartIndex)"><span>+</span></button>
                                    </div>

                                </div>
                                <div class="col-lg-2">
                                    <p class="good-descr mb-0">Стоимость:</p>
                                    <p class="cart-item-price" v-if="item.variation.regular_price === '999999999.00' ">По запросу</p>
                                    <p v-else class="cart-item-price">
                                        {{(parseInt(item.variation.regular_price) * item.quantity).toLocaleString()}} 
                                    ₽</p>
                                </div>
                                <div class="col-lg-1">
                                    <button class="delete" @click="deleteGood(cartIndex)">✕</button>
                                </div>
                            </div>
                        </div>
                    </div>
                   <div class="col-lg-3">
                      <div class="total-cart mb-2">
                          <h4>Итого:</h4>
                          <p class="total-price"><span>{{cart.length}}</span> тов. на сумму <span>{{getCartTotal}} ₽</span></p>
                      </div>
                   </div>
                   <div class="col-lg-3">
                       <button class="blue-btn mb-2" style="font-size:16px;">Назад в магазин</button>
                   </div>
                   <div class="col-lg-3">
                       <button class="main-btn mb-2" style="width:100%;" @click="zakaz = true">Перейти к оформлению</button>
                   </div>
                   
                   
                </div>
            </div>
        </section>


        <section id="zakaz" v-if="zakaz">
            <div class="conntainer">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2">
                        <div class="grey-box">
                            <div class="row">
                                <div class="col-lg-12">
                                    <h3>Оформление</h3>
                                </div>
                                <div class="col-lg-6">
                                    <label for="">Имя <span>*</span></label>
                                    <input type="text" v-model="name" 
                                    :class="{errorInp : $v.name.$dirty && !$v.name.required}">
                                </div>
                                <div class="col-lg-6">
                                    <label for="">Фамилия <span>*</span></label>
                                    <input type="text" v-model="surname" 
                                    :class="{errorInp : $v.surname.$dirty && !$v.surname.required}">
                                </div>
                                <div class="col-lg-4">
                                    <label for="">Город/регион</label>
                                    <input type="text" v-model="city">
                                </div>
                                <div class="col-lg-4">
                                    <label for="">Улица, дом</label>
                                    <input type="text" v-model="street">
                                </div>
                                <div class="col-lg-4">
                                    <label for="">Квартира, апартаменты</label>
                                    <input type="text" v-model="flat">
                                </div>
                                <div class="col-lg-6">
                                    <label for="">Телефон <span>*</span></label>
                                    <input type="text" v-model="tel" placeholder="+7 ( )" 
                                    v-mask="'+7 (###) ###-##-##'"
                                    :class="{errorInp : ($v.tel.$dirty && !$v.tel.required) || ($v.tel.$dirty && !$v.tel.minLength)}">
                                </div>
                                <div class="col-lg-6">
                                    <label for="">E-mail <span>*</span></label>
                                    <input type="text" v-model="email" :class="{errorInp : ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}">
                                </div>
                                <div class="col-lg-12 text-center">
                                    <button class="blue-btn mb-2" style="font-size:16px;" @click="sendCart">
                                        Офомрить заказ
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


<!-- 

        <div class="mail-cart">
            <div class="mail-cart-item">
                <img  src="https://kknd26.ru/images/no_photo.png" alt=""> 
                <img src="" alt="">
            </div>
            <div class="mail-cart-item"> 
                <p class="good-descr mb-0">Артикул: 123123123123</p>
                <p class="cart-item-title">НАЗВАНИЕ</p>
            </div>
            <div class="mail-cart-item">
                <p class="good-descr mb-0">
                    тип: <strong style="color:#000;">sdr11</strong>
                </p>
                <p class="good-descr mb-0">
                    вес: <strong style="color:#000;">12 г</strong>
                </p>
                <p class="good-descr mb-0">
                    длина: <strong style="color:#000;">60-мм</strong>
                </p>
            </div>
            <div class="mail-cart-item">
                <p class="good-descr mb-0">Кол-во шт:</p>
                <div class="quantity">
                    <span class="quant">1 шт</span>
                </div>

            </div>
            <div class="mail-cart-item">
                <p class="good-descr mb-0">Стоимость:</p>
                
                <p  class="cart-item-price">1 200 ₽</p>
            </div>
        </div>
        <div class="total-cart mb-2">
            <h4>Итого:</h4>
            <p class="total-price"><span>{{cart.length}}</span> тов. на сумму <span>{{getCartTotal}} ₽</span></p>
        </div> -->

        


    </div>
</template>

<style>
/* .total-cart h4{
	margin-top: 0;
	margin-bottom: 5px;
	font-size: 20px;
}
.total-price{
	color: #000;
    font-size: 20px;
	margin: 0;
	font-weight: 600;
}
.mb-2{
	margin-bottom: 20px;
}
.cart-item-title{
	font-size: 14px;
	font-weight: 700;
}
.quantity{
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-top: 10px;
}
.quant{
	font-size: 16px;
	font-weight: 500;
	color:#000;
	padding: 0 15px;
}
.good-descr{
	color: #878A93;
	font-size: 14px;
	font-weight: 400;
	min-height: 40px;
	margin-bottom: 12px;
}
.cart-item-price{
	font-size: 16px;
	font-weight: 700;
	margin-top: 10px;
}
.mb-0{
    margin-bottom: 0!important;
	min-height: inherit;
}
.mail-cart{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:10px 20px;
    border-bottom: 1px #E5E9F0 solid;
    margin-bottom: 10px;
}
.mail-cart-item{
    width: 20%;
}
.mail-cart-item img{
    width: 100%;
}
@media (max-width: 512px) {
    .mail-cart{
        display:block;
    }
	.mail-cart-item{
        width: 100%;
    }
} */
</style>

<script>
import {mapGetters} from 'vuex'
import axios from 'axios'
import { required, email, minLength } from "vuelidate/lib/validators";

    export default{
        data(){
            return{
                zakaz: false,
                name: '',
                surname: '',
                city: '',
                street: '',
                flat: '',
                tel: '',
                email: ''
            }
        },
        validations: {
			name: {
				required
			},
			email:{
				required,
				email
			},
			surname: {
				required
			},
			tel: {
				required,
				minLength: minLength(18)
			}
		},
        computed: {
			...mapGetters({
				cart: "catalog/getCart"
			}),
            getCartTotal(){
                let total = 0
                this.cart.forEach(item => {
                    if(item.variation.regular_price !== '999999999.00'){
                        total += item.quantity * parseInt(item.variation.regular_price)
                    }
                })
                return total.toLocaleString()
            }
		},
        methods: {
            sendCart(){
                if(this.$v.$invalid) {
					this.$v.$touch();
					return;
				}

                let products = []

                this.cart.forEach(item =>{
                    products.push({good_id: item.id, variation_id: item.variation.id, quantity: item.quantity })
                })

                let zakazObj = {
                    cart: products,
                    cartTotal: this.getCartTotal,
                    name: this.name,
                    surname: this.surname,
                    city: this.city,
                    street: this.street,
                    flat: this.flat,
                    tel: this.tel,
                    email: this.email
                }

                axios
                .post('http://aquagaz.ru/wp-json/ag/v1/send/order', zakazObj)
                .then(res =>{
                    console.log(res.data)
                })
            },
            addQuant(cartIndex){
                this.$store.dispatch("catalog/addQuant", cartIndex)
            },
            minQuant(cartIndex){
                this.$store.dispatch("catalog/minQuant", cartIndex)
            },
            deleteGood(cartIndex){
                this.$store.dispatch("catalog/deleteGood", cartIndex)
            }
        }
    }
</script>
