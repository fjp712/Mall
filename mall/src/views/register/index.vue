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
            <div class="">

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return{
                src:require('@/assets/avatar.png')
            }
        },
        methods:{
            canPreview(event){
                this.src=URL.createObjectURL(event.target.files[0])
            }
        }
    }
</script>

<style scoped lang="scss">
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
        justify-content: center;
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
                    font-size: 15px;
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
    }
}
</style>
