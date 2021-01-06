<template>
    <div style="margin-top: 80px" class="detail_main">
        <div class="detail_container">
            <div class="detail_tab">
                <div v-for="(item,index) in 4" :key="item">
                    <span :class="index===3?'detail_tab_endWord':''">{{item}}</span>
                    <span v-if="index!==3">
                        >
                    </span>
                </div>
            </div>
            <div class="detail_container_main">
                <div class="detail_img">

                </div>
                <div class="detail_shop">
                    <div class="detail_shop_title">我是大标题</div>
                    <div class="detail_shop_introduce">我是描述哦</div>
                    <div class="detail_shop_money">
                        <span class="money">￥450</span>
                        <span>(库存20000)</span>
                    </div>
                    <div style="margin-top: 20px">
                        <counter @countChange="setMoneySum"></counter>
                    </div>
                    <div style="margin-top: 20px">总价￥{{moneySum}}</div>
                    <button class="detail_shop_button">加入购物车</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from "../../components/counter";
    export default {
        data(){
            return{
                moneySum:0
            }
        },
        name: "index",
        components: {Counter},
        methods:{
            setMoneySum(count){
                this.moneySum=450*count
            }
        }
    }
</script>

<style scoped lang="scss">
    .detail_main{
        background-color: #f2f2f2;
        height: 900px;
        .detail_container{
            display: flex;
            flex-direction: column;
            background-color: #fff;
            margin: 0 200px 0  200px;
            width: calc(100%-400px);
            .detail_tab{
                margin-left: 40px;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                width: 100%;
                height: 40px;
                border-bottom: 2px solid #F2F2F2;
                .detail_tab_endWord{
                    color:#e3cdb6;
                }
            }
            .detail_container_main{
                margin-top: 20px;
                height: 600px;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                border-bottom: 2px solid #534646;
                .detail_img{
                    height: 400px;
                    width: 30%;
                    background-color: #9999b3;
                }
                .detail_shop{
                    display: flex;
                    flex-direction: column;
                    margin-left: 80px;
                    justify-content: flex-start;
                    align-items: flex-start;
                    width: 50%;
                    height: 400px;
                    padding-left: 40px;
                    .detail_shop_title{
                        margin-top: 40px;
                        font-size: 20px;
                        font-weight: bold;
                    }
                    .detail_shop_introduce{
                        color: #7f7d7d;
                        font-size: 14px;
                        margin-top: 20px;
                    }
                    .detail_shop_money{
                        margin-top: 20px;
                        .money{
                            font-weight: bold;
                            font-size: 18px;
                            color: #db4444;
                        }
                    }
                    .detail_shop_button{
                        margin-top: 20px;
                        background-color: #e3cdb6;
                        height: 80px;
                        text-align: center;
                        border: transparent;
                        width: 300px;
                        font-size: 24px;
                    }

                }
            }
        }
    }


</style>
