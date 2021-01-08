<template>
    <div class="pay-container">
        <el-tabs v-model="activeName">
            <el-tab-pane label="支付宝付款" name="AliPay">
                <div class="pay-area">
                    <pay-container :id="$route.query.userId" name="AliPay"></pay-container>
                </div>
            </el-tab-pane>
            <el-tab-pane label="微信付款" name="weixin">
                <div class="pay-area">
                    <pay-container :id="$route.query.userId" name="weixin"></pay-container>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import PayContainer from "./component/PayContainer";
    export default {
        name: "index",
        data(){
            return{
                activeName:''
            }
        },
        components:{PayContainer},
        created() {
            this.activeName='AliPay';
        }
    }
</script>

<style scoped lang="scss">
.pay-container::v-deep{
    margin-top: 80px;
    .el-tabs__header
    {
        margin: 0;
    }
    .el-tabs__nav{
        margin-left: 100px;
    }
    .pay-area{
        height: 80vh;
        background-color: #F2F2F2;
    }
}
</style>
