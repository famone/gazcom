<template>
    <div class="col-lg-8">
        <div class="row">
            <div class="col-lg-6" v-for="item in 6">
                <div class="good-item-box skeleton">
                    <div class="good-img"></div>
                    <div class="good-body">
                        <p class="good-title"></p>
                        <p class="good-title" style="width:30%"></p>
                        <p class="good-descr"></p>
                        <button class="blue-btn">0</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>