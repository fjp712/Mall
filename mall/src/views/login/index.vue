<template>
    <div style="margin-top: 80px" class="login_container" >
        <div class="login_card">
            <div class="login_input">
                <span>账户：</span>
                <el-input
                    clearable
                    placeholder="请输入账户"
                    style="width: 200px"
                    v-model="username"
                ></el-input>
            </div>
            <div class="login_input">
                <span>密码：</span>
                <el-input
                    placeholder="请输入密码"
                    show-password
                    v-model="password"
                    clearable
                    style="width: 200px"
                >

                </el-input>
            </div>
            <div class="login_button">
                <el-button type="primary" style="width: 160px" @click="userLogin">登录</el-button>
                <el-button  @click="userRegister">注册</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import {login} from "./service";
    export default {
        name: "index",
        data(){
            return{
                password:'',
                username:''
            }
        },
        methods:{
           async userLogin(){
              let result= await login({username:this.username,password:this.password})
              if(result.data.code===200)
              {
                  this.$router.push({name:'主页'})
                  sessionStorage.setItem('user',result.data.data[0].toString())
              }
            },
            userRegister(){
               this.$router.push({name:'注册'})
            }
        }
    }
</script>

<style scoped lang="scss">
.login_container{
    background: url("../../assets/background.png") center center;
    background-size: cover;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .login_card{
        width: 300px;
        height: 350px;
        background-color: #fff;
        box-shadow: 4px 5px 4px #5d5d5d;
        .login_input::v-deep{
            margin-left: 25px;
            margin-top: 40px;
            display: flex;
            align-items: center;
            .el-input__inner{
                border: transparent;
                border-radius: 0;
                border-bottom: solid 1px #5d5d5d;
            }
        }
        .login_button{
            display: flex;
            justify-content: center;
            margin-top: 60px;
        }
    }
}
</style>
