<template>
    <div class="pay">
        <div style="padding-top: 60px">
            <div class="pay-header">
                <div style="margin-left: 15px">您的购物车中总共有<span class="pay_boldWord" style="color: #42b983">{{total.num}}</span>件物品</div>
                <div>总价为<span class="pay_boldWord">￥{{total.price}}</span></div>
                <el-dropdown trigger="click">
                    <el-button type="plain" style="margin-left: 360px">详情</el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item v-for="item in detailList" :key="item.product_id">
                            <div style="display: flex;width: 600px;">
                                <div style="display: flex;align-items: center">
                                    {{item.product_name}}
                                    <img :src="item.picture_url" style="width: 40px;height: 40px;">
                                </div>
                                <div style="margin-left: 10px">单价:
                                    <span style="color:#c94c4c">￥{{item.product_price}}</span>
                                </div>
                                <div style="margin-left: 10px">数量：{{item.product_num}}</div>
                                <div style="margin-left: 10px">
                                    <span style="color:#c94c4c">总价：￥{{item.total}}</span>
                                </div>
                            </div>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-button type="primary" style="margin-left: 20px" @click="doPay">确认付款</el-button>
            </div>
            <div class="pay-img">
                <div v-if="name==='AliPay'" style="text-align: center">
                    <img src="../../../assets/AliPay.jpg"  style="height: 300px;width: 300px">
                    <h4>支付宝付款</h4>
                </div>
                <div v-else style="text-align: center">
                    <img src="../../../assets/WeixinPay.jpg" style="height: 300px;width: 300px">
                    <h4>微信付款</h4>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import {Pay} from "../../shoppingCart/service";
    import {getAllCommodity} from "../../shoppingCart/service";
    export default {
        name: "PayContainer",
        props:["id","name"],
        data(){
            return{
                total:{
                    num:0,
                    price:0
                },
                detailList:[]
            }
        },
        created() {
            this.datahandler()
        },
        methods:{
            async datahandler(){
                const data=await getAllCommodity(this.id)
                for(let item of data.data)
                {
                    this.detailList.push(item)
                    this.total.num+=item.product_num
                    this.total.price+=item.total
                }
            },
            async doPay(){
                try{
                    await Pay(this.id,{token:sessionStorage.getItem('usertoken')})
                    this.$message.success('支付成功')
                    this.$router.push({name:'主页'})
                }
                catch (e) {
                    this.$message.warning('支付错误')
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .pay{
        display: flex;
        flex-direction: column;
        align-items: center;
        .pay-header{
            background-color: #fff;
            display: flex;
            height: 80px;
            align-items: center;
            width: 940px;
            .pay_boldWord{
                color: #c94c4c;
                font-size: 20px;
                font-weight: bold
            }
            .pay-item{
                display: flex;
                width: 800px;
            }

        }
        .pay-img{
              display: flex;
              justify-content: center;
              margin-top: 40px;
          }
    }



</style>
