<template>
    <div>
        <div class="appHeader-list">
            <div class="item" style="margin-left: 48px" @click="loadHome">首页</div>
            <div class="item">
                <el-dropdown @command="loadProduction" >
                    <div >所有产品</div>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item v-for="item in items" :key="item" :command="item">
                            {{item}}
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <div class="link">
                <router-link :to="{name:'产品'}">登录</router-link> | <div>注册</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "app-header",
        data(){
            return{
                items:[
                    'a','b','c','d'
                ]
            }
        },
        methods:{
            loadProduction(command){
                this.$router.push({name:'产品',query:{productName:command}})
            },

            loadHome(){
                this.$router.push({name:'主页'})
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
    }
}
</style>
