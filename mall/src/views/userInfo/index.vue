<template>
    <div class="userInfo-container">
        <div class="userInfo-header"></div>
        <div class="userInfo-card">
            <div class="userInfo-card-header">
                <div class="userInfo-card-avatar"></div>
                <div class="userInfo-card-name">
                    <div class="userInfo-card-userName">
                        {{this.userdata.name}}
                        <div class="userInfo-card-tips">
                            {{this.userdata.type===1?'普通用户':'管理员'}}
                        </div>
                    </div>
                    <div class="userInfo-card-id">UserId: #{{this.userdata.id}}</div>
                </div>
                <div class="userInfo-card-exitbutton">
                    <el-button type="plain">退出登录</el-button>
                </div>
            </div>
            <div class="userInfo-card-split"></div>
            <div class="userInfo-card-information">
                <div class="userInfo-card-left">
                    <div class="userInfo-card-item" v-for="item in userinfo" :key="item.icon" >
                        <i :class="item.icon"></i>
                        <div style="margin-left: 10px">{{item.title}}:{{item.text}}</div>
                    </div>
                </div>
                <div class="userInfo-card-right">
                    <div class="userInfo-card-shoppingcart">
                        <div>
                            <h3>我的购物车</h3>
                            <el-tooltip content="您购物车中有新的宝贝等着你">
                                <el-badge is-dot class="shoppingcart" >
                                    <i class="el-icon-shopping-cart-full"></i>
                                </el-badge>
                            </el-tooltip>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {icon,title} from "../../utils/enmu";

    export default {
        name: "index",
        data() {
            return {
                required: ["name", "phone", "address"],
                userinfo: []
            }
        },
        computed: {
            userdata() {
                return JSON.parse(sessionStorage.getItem('userInfo'))
            },
        },
        created() {
            console.log(this.userdata)
            for (let item of this.required) {
                this.userinfo.push({icon: icon[item], text: this.userdata[item], title: title[item]})
            }
            console.log(this.userinfo)
        }
    }
</script>

<style scoped lang="scss">
@import "../../style/animation/animation.css";
.userInfo-container{
    margin-top: 80px;
    .userInfo-header{
        height: 200px;
        background:url("../../assets/userbackground.jpg") center center;
        background-size: cover;
    }
    .userInfo-card{
        height: 600px;
        width: 1000px;
        border: solid 1px #5d5d5d;
        background-color: #fff;
        position: absolute;
        top: 120px;
        left: 280px;
        animation-name: loaderSuccess;
        animation-duration: 3s;
        .userInfo-card-header{
            display: flex;
            align-items: center;
            height: 150px;
            .userInfo-card-avatar{
                height: 100px;
                width: 100px;
                border-radius: 50px;
                background-color: #F2F2F2;
                margin-left: 50px;
            }
            .userInfo-card-name{
                margin-left: 40px;
                .userInfo-card-userName{
                    display: flex;
                    font-size: 20px;
                    font-weight: bold;
                    .userInfo-card-tips{
                        display: flex;
                        align-items: center;
                        text-align: center;
                        font-size: 12px;
                        font-weight: 200;
                        height: 20px;
                        width: 60px;
                        margin-left: 20px;
                        background-color: #42b983;
                        border-radius: 4px;
                        &::before{
                            content: "";
                            display: block;
                            border: 10px solid transparent;
                            border-right-color: #42b983;
                            height: 0;
                            width: 0;
                            margin-left: -18px;
                        }
                    }
                }
                .userInfo-card-id{
                    color: #797373;
                    margin-top: 20px;
                    font-size: 14px;
                }
            }
            .userInfo-card-exitbutton{
               margin-left:400px;
            }
        }
        .userInfo-card-split{
            background-color: #f2f2f2;
            height: 50px;
        }
        .userInfo-card-information{
            margin-top: 20px;
            display: flex;
            .userInfo-card-left{
                width: 300px;
                height: 350px;
                margin-left: 40px;
                border:solid 1px #f2f2f2;
                .userInfo-card-item{
                    display: flex;
                    margin-left: 20px;
                    margin-top: 40px;
                    border-bottom: solid 1px #f2f2f2;
                }
            }
            .userInfo-card-right{
                width: 600px;
                height: 350px;
                border:solid 1px #f2f2f2;
                margin-left: 40px;
                .userInfo-card-shoppingcart{
                    margin-left: 20px;
                }
            }
        }
    }

}
</style>
