<template>
    <div class="container">
        <div class="production_list" >

            <div class="production_list_title">
                <div class="production_title_main">{{this.$route.query.productName}}</div>
                <div class="production_title_vice">今日{{this.$route.query.productName}}</div>
            </div>

            <div class="production_list_main">
                <div class="production_brand">
                    <img :src="activityImg" style="height: 100%;width: 100%">
                </div>
                <div class="production_area" >
                    <div class="production_item" v-for="item in this.productsList" :key="item.id" @click="loadProduction(item)">
                        <div class="production_item_img">
                            <img :src="item.picture_url" style="width: 100%;height: 100%">
                        </div>
                        <div class="production_item_price">
                            <div>
                                <span style="color: #ee4747">￥</span>
                                {{item.price}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import {getProductInformation} from "./service";
import middleware from "../../utils/middleware";
export default {
        name: "index",
        data(){
            return{
                productsList:[],
                activityImg:""
            }
        },
        async created() {
            const data=await getProductInformation({product_type:this.$route.query.typeId})
            this.activityImg=data.data.type_picture_url
            for(let item of data.data.products)
            {
                this.productsList.push(item)
            }
        },
        methods:{
            loadProduction(item){
                middleware.productInfo=item
                this.$router.push({name:'商品详情',query:{productId:this.$route.query.typeId}})
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
                    margin-left: 20px;
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
