<template>
    <div class="register_container">
        <div class="register_card">
            <div class="register-avatar">
                <img :src="src" alt="头像预览" class="register-avatar-image">
                <div class="register-upload">
                    <div class="register_button">上传</div>
                    <input type="file" accept="image/*" class="register-avatar-input" @change="canPreview">
                </div>
            </div>
            <div class="register_form">
                <div class="register_item">
                    昵称：<el-input placeholder="请输入昵称" v-model="userInfo.nickName"></el-input>
                </div>
                <div class="register_item">
                    电话：<el-input placeholder="请输入电话" v-model="userInfo.phoneNumber"></el-input>
                </div>
                <div class="register_item">
                    密码：<el-input placeholder="请输入密码" v-model="userInfo.password" ></el-input>
                </div>
                <div>

                </div>
                <el-button type="primary" class="register_form_button" @click="uploadData">注册</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "../../utils/axios";
    export default {
        name: "index",
        data(){
            return{
                src:require('@/assets/avatar.png'),
                userInfo:{
                    nickName:'',
                    phoneNumber:'',
                    password:'',
                    file:''
                }
            }
        },
        methods:{
            canPreview(event){
                this.userInfo.file=event.target.files[0]
                console.log(this.file)
                this.src=URL.createObjectURL(event.target.files[0])
            },
            uploadData(){
                if(!(this.userInfo.phoneNumber.length===11&&/\d+/g.test(this.userInfo.phoneNumber)))
                {
                    this.$message.warning('请输入正确格式的电话号码')
                    return;
                }
                let form=new FormData()
                form.append('name',this.userInfo.nickName)
                form.append('phone',this.userInfo.phoneNumber)
                form.append('password',this.userInfo.password)
                form.append('avatar',this.userInfo.file)
                console.log(form.get('avatar'))
                axios.post('/api/user/register',form,{
                    'Content-Type': 'multipart/form-data'
                }).then((data)=>{
                    if(data.data.code===300)
                        this.$message.warning('该手机号已经被注册')
                    else
                    {
                        this.$message.success('注册成功')
                        this.$router.push({name:'登录'})
                    }
                }).catch((e)=>{
                    this.$message.error(e.message)
                })
            }
        }
    }
</script>

<style scoped lang="scss">
 @import "../../style/animation/animation.css";
.register_container{
    height: 100vh;
    margin-top: 80px;
    background: url("../../assets/shoppingcart.jpg") center center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    .register_card{
        background-color: #fff;
        width: 500px;
        height: 600px;
        box-shadow: 4px 2px 3px #5d5d5d;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        animation-name: loaderSuccess;
        animation-duration: 3s;
        .register-avatar{
            display: flex;
            justify-content: center;
            .register-avatar-image{
                width: 150px;
                height: 150px;
                margin-top: 20px;
                border-radius: 75px;
            }
            .register-upload{
                position: relative;
                .register_button{
                    font-weight: bold;
                    font-size: 12px;
                    background-color: #e3cdb6;
                    height: 40px;
                    width: 40px;
                    border-radius: 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top: 120px;
                    margin-left: -30px;
                }
                .register-avatar-input{
                    position: absolute;
                    top:120px;
                    left: 0;
                    opacity: 0;

                }
            }
        }
        .register_form::v-deep{
            margin-top: 60px;
            .register_item{
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 14px;
                margin-top: 20px;
                .el-input{
                    width: 300px;
                }
                .el-input__inner {
                    height: 30px;
                    width: 300px;
                    border: transparent;
                    border-radius: 0;
                    border-bottom: 1px solid #5d5d5d;
                }
            }
            .register_form_button{
                margin-left: 90px;
                margin-top: 50px;
                width: 60%;
            }
        }
    }
}
</style>
