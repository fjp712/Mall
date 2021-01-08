<template>
    <div class="container">
        <div class="production_list" v-for="item in 3" :key="item">

            <div class="production_list_title">
                <div class="production_title_main">我是大标题</div>
                <div class="production_title_vice">我是小标题</div>
            </div>

            <div class="production_list_main">
                <div class="production_brand">

                </div>
                <div class="production_area" >
                    <div class="production_item" v-for="production in 10" :key="production" @click="loadProduction">
                        <div class="production_item_img"></div>
                        <div class="production_item_price">
                            <div>
                                <span style="color: #ee4747">￥</span>
                                999.9元
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        methods:{
            loadProduction(){
                this.$router.push({name:'商品详情',query:{productId:1}})
            }
        }
    }
</script>

<style scoped lang="scss">
.container{
    margin-top: 80px;
    .production_list{
        display: flex;
        width: 100vw;
        justify-content: center;
        flex-direction: column;
        margin-top: 40px;
        .production_list_title{
            text-align: center;
            margin-bottom: 20px;
            .production_title_main{
                font-size: 20px;
                font-weight: bold;
            }
            .production_title_vice{
                font-size: 14px;
                color: #9999b3;
            }
        }
        .production_list_main{
            margin: 0 40px 0 40px;
            width: 90vw;
            height: 600px;
            display: flex;
            .production_brand{
                height: 100%;
                width: 200px;
                background-color: #5d5d5d;
            }
            .production_area{
                height: 100%;
                width: calc(100% - 200px);
                display: flex;
                flex-wrap: wrap;
                .production_item{
                    width: 19%;
                    height: 300px;
                    &:hover{
                        cursor: pointer;
                    }
                    &::after{
                        content: "";
                        display: block;
                        width: 2px;
                        height: 100px;
                        background-color: #e3cdb6;
                        margin-top: -150px;
                        margin-left: 100%;
                    }
                    .production_item_img{
                        height: 80%;
                    }
                    .production_item_price{
                        height: 20%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background-color: #fff;
                    }
                }
            }
        }

    }
}
</style>
