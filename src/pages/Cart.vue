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


        <section id="catalog_section" v-if="cart.length">
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
                       <button class="main-btn mb-2" style="width:100%;">Перейти к оформлению</button>
                   </div>
                   
                   
                </div>
            </div>
        </section>


    </div>
</template>

<script>
import {mapGetters} from 'vuex'

    export default{
        computed: {
			...mapGetters({
				cart: "catalog/getCart"
			}),
            getCartTotal(){
                let total = 0
                this.cart.forEach(item => {
                    total += item.quantity * parseInt(item.variation.regular_price)
                })
                return total.toLocaleString()
            }
		},
        methods: {
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
