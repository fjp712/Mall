<template>
    <div style="margin-top: 80px" class="shoppingcart_container">
        <div class="shoppingList">
            <h2>购物车</h2>
            <div class="shoppingCart_Main">
                <el-checkbox v-model="checkAll">全选</el-checkbox>
                <div style="margin-right: 300px">商品名称</div>
                <div>单价</div>
                <div>数量</div>
                <div>小计</div>
                <div>操作</div>
            </div>
            <div class="shoppingCart_Main" v-for="(item,index) in shoppingCartData" :key="index">
                <el-checkbox v-model="checkBoxList[index]"></el-checkbox>
                <div style="margin-right: 300px;display: flex;align-items: center">
                    {{item.product_name}}
                    <img :src="item.picture_url" style="width: 50px;height: 50px;margin-top: -10px">
                </div>
                <div>￥{{item.product_price}}</div>
                <div>{{item.product_num}}</div>
                <div>{{item.total}}</div>
                <div class="shoppingCart_delete" @click="deleteItem(index)">删除</div>
            </div>
        </div>
        <div class="shoppingcart-payButton">
            <el-button type="primary" @click="loadPay">前往支付</el-button>
        </div>
    </div>
</template>

<script>
    import {mapState,mapMutations} from 'vuex';
    import {getAllCommodity,DeleteCommodity} from "./service";

    export default {
        name: "index",
        data(){
          return{
              checkAll:false,
              checkList:[],
              shoppingCartData:[],
              checkBoxList:[]
          }
        },
        computed:{
            ...mapState('shoppingCart',['shoppingCart']),
            userdata(){
                return JSON.parse(sessionStorage.getItem('userInfo'))
            }
        },
        watch:{
          checkAll:{
              immediate:true,
              handler(val){
                      for(let index=0;index<this.checkBoxList.length;index++)
                      {
                          this.checkBoxList[index]=val
                      }
              }
          }
        },
        async created() {
            try {
                const data=await getAllCommodity(this.userdata.id)
                this.datahandler(data)
            }
            catch (e) {
                this.$message.error(e.message)
            }

        },
        methods:{
            ...mapMutations('shoppingCart',['delete']),

            deleteItem(index){
                DeleteCommodity({user_id:this.userdata.id,product_id:this.shoppingCartData[index].product_id})
                this.shoppingCartData.splice(index,1)
            },

            datahandler(data){
                for(let item of data.data)
                {
                    this.shoppingCartData.push(item)
                    this.checkBoxList.push(false)
                }
            },

            loadPay(){
                this.$router.push({name:'支付',query:{userId:this.userdata.id}})
            }
        }
    }
</script>

<style scoped lang="scss">
.shoppingcart_container{
    margin: 0 160px 0 160px;
    .shoppingList{
        .shoppingCart_Main{
            height: 40px;
            width: 100%;
            font-size: 14px;
            padding-top: 20px;
            margin-top: 40px;
            color: #4d4d4d;
            border: 1px solid #4d4d4d;
            display: flex;
            justify-content: space-around;
            .shoppingCart_delete{
                &:hover {
                    color: #c65454;
                }
            }
        }
    }
    .shoppingcart-payButton{
        margin-top: 40px;
    }
}
</style>
