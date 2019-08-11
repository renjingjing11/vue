<template>
    <div class="itemList" @click="handleDetail">
        <ul class="left">
            <li>{{author}}</li>
            <li>￥<span>{{price}}/天</span></li>
        </ul>
        <div class="right">
            <p><img :src="img_url" alt=""></p>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        "img_url":{
            type:String
        },
        "author":{
            type:String
        },
        "price":{
            type:Number
        },
        "rank":{
            type:String
        }, 
        "store_id":{
            type:String
        },
        "goods_id":{
            type:String
        }
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
        handleDetail(i,area,price){
            this.$router.push({path:"/productDetail",query:{store_id:this.store_id,cname:this.$route.query.cname,goods_id:this.goods_id,price:this.price}})
        }
    },
    created(){
        
    },
    mounted(){

    }
}
</script>
<style  lang="scss">
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
.itemList{
    width: 100%;
    height: calc(1.6rem*2);
    display: flex;
    margin-top: calc(.2rem*2);
    margin-right: calc(.2rem*2);
    // background: cadetblue;
    .left{
        flex: 4.5;
        padding-left: calc(.2rem*2);
        li{
            &:nth-child(1){
                font-size: calc(.16rem*2);
            }
            &:nth-child(2){
                margin-top: calc(.5rem*2);
                font-size: calc(.18rem*2);
                color: red;
            }
        }
    }
    .right{
        flex: 5.5;
        display: flex;
        justify-content: center;
        align-items: center;
        p{
            width: 90%;
            height: 100%;
            background: #d7d7dd;
            border-radius: calc(.1rem*2);
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>