<template>
    <div class="userInfo-container">
        <div class="userInfo-header"></div>
        <div class="userInfo-card">
            <div class="userInfo-card-header">
                <div class="userInfo-card-avatar"></div>
                <div class="userInfo-card-name">
                    <div class="userInfo-card-userName">
                        傅继鹏
                        <div class="userInfo-card-tips">
                            普通客户
                        </div>
                    </div>
                    <div class="userInfo-card-id">UserId: #222</div>
                </div>
                <div class="userInfo-card-exitbutton">
                    <el-button type="plain">退出登录</el-button>
                </div>
            </div>
            <div class="userInfo-card-split"></div>
            <div class="userInfo-card-information">
                <div class="userInfo-card-left">
                    <div class=""></div>
                </div>
                <div class="userInfo-card-right"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import {icon,title} from "../../utils/enmu";

    export default {
        name: "index",
        data(){
            return{
                required:["name","phone","address"],
                userinfo:[]
            }
        },
        computed:{
            userdata(){
                return this.$store.state.userInfo
            }
        },
        created() {
            console.log(this.$store.state.userInfo)
           for(let item of this.required)
           {
               this.userinfo.push({icon: icon[item],text:this.$store.state.userInfo[item] ,title: title[item]})
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
                            position: absolute;
                            left: 252px;
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
            }
            .userInfo-card-right{
                width: 600px;
                height: 350px;
                border:solid 1px #f2f2f2;
                margin-left: 40px;
            }
        }
    }

}
</style>
