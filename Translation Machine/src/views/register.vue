<template>
    <div class="register"> 
        <header class="loginHeader">登录/注册</header>
        <main class="loginMain">
            <div class="con">
                <el-input v-model="user" placeholder="请输入电话号码" class="user"></el-input>
                <el-input placeholder="请输入密码" v-model="password" show-password class="pwd"></el-input>
                <el-button type="primary" class="btn" @click="handleRegister">注册</el-button>
            </div>
        </main>
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            user:"",
            password:"",
            code:""
        }
    },
    computed:{

    },
    methods:{
        handleRegister(){
            this.$http.post("/api/buyer/user/register",{username:this.user,password:this.password}).then(res=>{
                console.log(res)
                if(res.code==1){
                    this.$router.push("/login")
                }
            })
        }
    },
    created(){
        
    },
    mounted(){
        
    }
}
</script>
<style scoped lang="scss">
*{
    padding: 0;
    margin: 0;
    list-style: none;
}
html,body{
    width: 100%;
    height: 100%;
    font-size: calc(100/750*100vw);
}
.register{
    width: 100%;
    height: 100%;
    font-size: calc(.16rem*2);
    display: flex;
    flex-direction: column;
    background: #ebebec;
}
.loginHeader{
    width: 100%;
    height: calc(.5rem*2);
    display: flex;
    justify-content: center;
    align-items: center;
}
.loginMain{
    flex: 1;
    overflow: auto;
}
.con{
    width: 80%;
    height: 80%;
    margin: 0 auto;
    .user{
        margin-top: 20px;
    }
    .pwd{
        margin-top: 20px;
    }
    .btn{
       width: 100%;
       height: 10%;
       margin-top: 20px;
    }
    .code{
        margin-top: 20px;
        width: 50%;
    }
}
</style>