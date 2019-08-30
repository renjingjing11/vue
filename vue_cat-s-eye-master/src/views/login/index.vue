<template>
    <div class="wrap">
        <h4>登陆页面</h4>
        <mt-field label="用户名" placeholder="请输入用户名" :state="usernameStatus" v-model="username"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" :state="usernameStatus" v-model="password"></mt-field>   
        <mt-button type="primary" size="normal" @click="login">登录</mt-button>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    data(){
        return {
            username:"",
            usernameStatus:"",
            password:"",
            passwordStatus:""
        }
    },
    methods:{
        login(){
            if(!/[A-Za-z0-9]{6,10}/.test(this.username)){
                Toast('请输入正确用户名');
            }
        }
    }
}
</script>

<style lang="scss">
    h4{
        width: 100%;
        height: 44px;
        color: #fff;
        font-size: 18px;
        background: #df2d2d;
        text-align: center;
        line-height: 44px;
    }
</style>
