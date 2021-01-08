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
                    <img :src="productInfo.picture_url" style="width: 100%;height: 100%">
                </div>
                <div class="detail_shop">
                    <div class="detail_shop_title">{{productInfo.name}}</div>
                    <div class="detail_shop_introduce">{{productInfo.describe}}</div>
                    <div class="detail_shop_money">
                        <span class="money">￥{{productInfo.price}}</span>
                        <span>(库存{{productInfo.stock_number}})</span>
                    </div>
                    <div style="margin-top: 20px">
                        <counter @countChange="setMoneySum"></counter>
                    </div>
                    <div style="margin-top: 20px">总价￥{{moneySum}}</div>
                    <button class="detail_shop_button" @click="shoppingCartAdd">加入购物车</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
import Counter from "../../components/counter";
import {addCommodity} from "./service";
import middleware from "../../utils/middleware";

export default {
   data(){
        return{
                moneySum:0,
                num:0,
                productInfo:''
            }
        },
    computed: {
       userdata(){
           return JSON.parse(sessionStorage.getItem('userInfo'))
        }
    },
        name: "index",
        components: {Counter},
        created() {
            this.productInfo=middleware.productInfo
        },
        methods:{
            ...mapMutations('shoppingCart',['add']),
            setMoneySum(count){
                this.num=count
                this.moneySum=450*count
            },
            async shoppingCartAdd(){
                const user=sessionStorage.getItem('usertoken')||[]
                if(this.num===0)
                {
                    this.$message.warning('购买数量为0，无法添加购物车')
                    return ;
                }
                if(user.length===0)
                {
                    await this.$message.warning('操作失败，请先登录')
                    this.$router.push({name:'登录'})
                }
                else {
                    try {
                        const data=await addCommodity({user_id:this.userdata.id,product_id:this.productInfo.id,num:this.num})
                        if(data.code===300)
                        {
                            this.$message.warning('请不要添加重复的商品')
                            return;
                        }
                        await this.$message.success('添加成功')
                    }
                    catch (e) {
                        this.$message.error('购物车添加失败')
                    }
                    // await this.add({title:'我是商品的名称',price:'￥450',number:'10',sum:'4500'})
                }
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
            width: calc(100% - 400px);
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
