<template>
    <div class="list">
        <!-- query传来的参数 可以直接在页面$route.query.cname使用 -->
        <header class="listHeader">{{$route.query.cname}}</header>
        <main class="listMain">
            <itemList v-for="(item,index) in productList" :key="index"
                :img_url="item.img_url"
                :author="item.cat"
                :price="item.market_price"
                :rank="item.rank"
                :store_id="item.store_id"
                :goods_id="item.goods_id"
            />
        </main>
    </div>
</template>
<script>
import itemList from "../components/itemList";
export default {
    props:{

    },
    components:{
       itemList
    },
    data(){
        return {
            productList:[]
        }
    },
    computed:{

    },
    methods:{
    
    },
    created(){
        console.log(this.$route.params.sid)
        this.$http.post("/api/store/goods/list",{store_id:this.$route.query.store_id}).then(res=>{
            console.log(res)
            this.productList=res.result
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
.list{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-size: calc(.16rem*2);
    // background: #ebebec;
}
.listHeader{
    width: 100%;
    height: calc(.5rem*2);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(.2rem*2);
}
.listMain{
    flex: 1;
    overflow: auto;
}
</style>