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
            <div class="shoppingCart_Main" v-for="(item,index) in shoppingCart" :key="index">
                <el-checkbox v-model="checkAll">全选</el-checkbox>
                <div style="margin-right: 300px">{{item.title}}</div>
                <div>{{item.price}}</div>
                <div>{{item.number}}</div>
                <div>{{item.sum}}</div>
                <div class="shoppingCart_delete" @click="deleteItem(index)">删除</div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState,mapMutations} from 'vuex'
    export default {
        name: "index",
        data(){
          return{
              checkAll:false,
              checkList:[]
          }
        },
        computed:{
            ...mapState('shoppingCart',['shoppingCart'])
        },
        async created() {
            // if(!this.$store.state.userInfo.length)
            // {
            //     await this.$message.warning('您还没有登录，无权查看购物车')
            //     this.$router.back()
            // }

        },
        methods:{
            ...mapMutations('shoppingCart',['delete']),
            deleteItem(index){
                    this.delete({index:index})
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
}
</style>
