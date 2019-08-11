<template>
    <div class="login"> 
        <header class="loginHeader">登录/注册</header>
        <main class="loginMain">
            <div class="con">
                <input v-valid="'phone'" placeholder="请输入姓名" v-model="user" class="user"/>
                <input v-valid="'pwd'" placeholder="请输入密码" v-model="password" show-password class="pwd"/>
                <input v-valid="'code'" placeholder="请输入验证码" v-model="code"  class="code"/>
                <span v-html="this.svg" class="captch" @click="upDataCaptch"></span>
                <el-button type="primary" class="btn" @click="handleLogin">登录</el-button>
                <router-link to="/register">注册</router-link>
            </div>
            
            <transition name="loginbar" v-if="showTipBar"  @after-enter="afterEnter">
                <p class="login-success">登录成功,即将跳转页面....</p>
            </transition>
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
            code:"",
            svg:"",
            showTipBar:false
        }
    },
    computed:{

    },
    methods:{
        handleLogin(){
            let data={username:this.user,password:this.password,captcha:this.code}
            this.$http.post("/api/buyer/user/login",data).then(res=>{
                console.log(res)
                if(res.code===1){
                    this.showTipBar=true
                    window.sessionStorage.setItem("token",res.token)
                     this.$router.push("/translatePage/list")
                }
            }).finally(()=>{
                // 登录失败再次调用
                this.upDataCaptch()
            })
        },
        upDataCaptch(){
            // 每次点击都请求一次验证码
             this.$http.get("/api/buyer/user/captcha").then(res=>{
                console.log(res)
                this.svg=res.data
            })  
        },
        afterEnter(){
            this.$router.push("/translatePage/list")
        }
    },
    created(){
        // 初始化
        this.upDataCaptch()
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
.login{
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
    input{
        width: 100%;
        height: calc(1rem*2);
    }
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
     .captch{
        margin-top: 20px;
    }
}
.login-success{
    position: fixed;
    left: 50%;
    top:50%;
    transform: translate3d(-50%,-50%,0);
    background: #000;
    color: #fff;
    text-align: center;
    line-height: calc(.45rem*2);
    padding: calc(.05rem*2) calc(.2rem*2);
    width: 80%;
    border-radius: calc(.55rem*2);
    z-index: 999;
    opacity: 0.7;
}
.loginbar-enter{
    opacity:0;
}
.loginbar-enter-to{
    opacity: 0.8;
}
.loginbar-enter-active{
    transition: opacity 0.3s ease-in;
}
</style>