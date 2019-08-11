<template>
    <div class="city">
        <div class="nav">
            <input type="text">
        </div>
        <div class="con">
            <ul class="conNav">
                <li>图标</li>
                <li>热门城市</li>
            </ul>
            <div class="conList">
                <span v-for="(item,index) in cityList" :key="index" @click="handleList(item.store_id,item.store_name)">{{item.store_name}}</span>
            </div>
        </div>
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
            cityList:[]
        }
    },
    computed:{

    },
    methods:{
        handleList(id,name){
            this.$router.push({path:"/translateList",query:{store_id:id,cname:name}})
        }
    },
    created(){
        // 城市列表数据

        let cl=window.sessionStorage.getItem("cityList") //这里取出本地存储的数据
        // console.log(cl)
        if(cl!==null){
            this.cityList=JSON.parse(cl) //这个转成javaScript对象才是页面所需要的
            return
        }
        this.$http.get("/api/store/storelist").then(res=>{
            if(res.code==1){
                // console.log(res.result)
                // 缓存数据,防止页面重新请求数据（例子：假如跳转到另个页面，然后返回则不会再次请求数据）
                 window.sessionStorage.setItem("cityList",JSON.stringify(res.result))
                 this.cityList=res.result
            }else{
                alert(res.msg)
            }
           
            // console.log(this.cityList)
        })
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
.city{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-size: calc(.16rem*2);
}
.nav{
    width: 100%;
    height: calc(1rem*2);
    // background: cadetblue;
    input{
        width: 85%;
        height: 50%;
        background: #f3f3f3;
        border: none;
        border-radius: calc(.3rem*2);
        margin: calc(.2rem*2) calc(.3rem*2);
    }
}
.con{
    width: 100%;
    height: 100%;
    .conNav{
        width: 100%;
        height: calc(.6rem*2);
        // border-bottom: 1px solid #000;
        display: flex;
        padding-left: calc(.3rem*2);
        li{
            &:nth-child(1){
                width: calc(.4rem*2);
                height: calc(.4rem*2);
                background: #f3f3f3;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            &:nth-child(2){
                font-size: calc(.2rem*2);
                line-height: calc(.4rem*2);
                margin-left: calc(.1rem*2);
            }
        }
    }
    .conList{
        width: 100%;
        height: calc(4rem*2);
        overflow: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        span{
            width: calc(1.5rem*2);
            height: calc(1.5rem*2);
            background: #d7d7d7;
            border-radius: calc(.1rem*2);
            display: flex;
            justify-content: center;
            align-items: center;
            color: #000;
        }
    }
}
</style>