<template>
    <div>
        <div class="appHeader-list">
            <div class="item" style="margin-left: 48px" @click="loadHome">首页</div>
            <div class="item">
                <el-dropdown @command="loadProduction" >
                    <div >所有产品</div>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item v-for="item in options" :key="item.id" :command="item">
                            {{item.type_name}}
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <div class="link">
                <div class="shoppingcart" @click="loadshoppingcart"><i class="el-icon-shopping-cart-1">购物车</i></div>
                <div v-if="!loginJudge">
                    <router-link :to="{name:'登录'}">登录</router-link> | <router-link :to="{name:'注册'}">注册</router-link>
                </div>
                <div v-else class="avatar" @click="loaderUserInfo">
                    <img :src="userInfo.avatar" style="height: 100%;width: 100%;border-radius: 30px">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "../utils/axios";
    export default {
        name: "app-header",
        data(){
            return{
                items:[
                    'a','b','c','d'
                ],
                loginJudge:false,
                options:[]
            }
        },
        computed:{
            login(){
               return  sessionStorage.getItem('usertoken').length
            },
            userInfo(){
                return JSON.parse(sessionStorage.getItem('userInfo'))
            }
        },
        watch:{
            login:{
                immediate:true,
                handler(val){
                    this.loginJudge = val > 0;
                }
            }
        },
        created() {
            this.getProductOptions()
        },
        methods:{
            loadProduction(command){
                if(!this.$route.path.includes('production'))
                {
                    this.$router.push({name:'产品',query:{productName:command.type_name,typeId:command.id}})

                }
                else
                {
                    this.$router.replace({name:'产品',query:{productName:command.type_name,typeId:command.id}})
                    window.location.reload()
                }

            },

            loadHome(){
                this.$router.push({name:'主页'})
            },

            loadshoppingcart(){
                this.$router.push({name:'购物车',query:{userId:1}})
            },

            loaderUserInfo(){
                this.$router.push({name:'用户信息'})
            },

            async getProductOptions(){
                const data=await axios.get("/api/producttype/getall")
                for(let item of data.data.data){
                    this.options.push(item)
                }
            }
        }
    }
</script>

<style scoped lang="scss">
.appHeader-list{
    display: flex;
    top: 0;
    align-items: center;
    position: fixed;
    z-index: 1;
    background-color: #fff;
    width: 100vw;
    height: 80px;
    font-size: 14px;
    color: #606266;
    .item{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 200px;
        &:hover {
            cursor: pointer;
            background-color: #e3cdb6;
        }
    }
    .link{
        height: 100%;
        display: flex;
        align-items: center;
        flex-grow: 1;
        justify-content: flex-end;
        margin-right: 48px;
        .shoppingcart{
            margin-right:36px ;
            &:hover{
                cursor: pointer;
            }
        }
        .avatar{
            height: 40px;
            width: 40px;
            border-radius: 30px;
            background-color: #f2f2f2;
            display: flex;
            justify-content: center;
            align-items: center;
            &:hover{
                cursor: pointer;
            }
        }
    }
}
</style>
