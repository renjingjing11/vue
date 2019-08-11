<template>
    <div class="page">
        <header class="pageHeader">租赁翻译机入口</header>
        <main class="pageMain">
            <router-view></router-view>
        </main>
        <footer class="pageFooter">
            <ul class="ul">
                <router-link :to="{name:'city'}" tag="li" active-class="active">城市</router-link>
                <router-link :to="{name:'order'}" tag="li" active-class="active">订单</router-link>
                <router-link :to="{name:'my'}" tag="li" active-class="active">我的</router-link>
            </ul>
        </footer>
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
           
        }
    },
    computed:{

    },
    methods:{
       
    },
    created(){
        
    },
    mounted(){

    }
}
</script>
<style lang="scss">
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
.page{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-size: calc(.16rem*2);
}
.pageHeader{
    width: 100%;
    height: calc(.5rem*2);
    // border-bottom: 1px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
}
.pageMain{
    height: 100%;
    overflow: hidden;
}
.pageFooter{
    width: 100%;
    height: calc(.5rem*2);
    border-top: solid 1px #000;
    line-height: calc(.5rem*2);
    .ul{
        display: flex;
        justify-content: center;
        align-items: center;
        li{
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}
.active{
    color: cadetblue !important;
}
</style>