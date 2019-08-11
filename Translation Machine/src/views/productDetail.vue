<template>
    <div class="detail">
        <header class="detailHeader">商品详情</header>
        <main class="detailMain">
            <div class="nav"></div>
            <ul class="headline">
                <li>{{product}}</li>
                <li>￥<span>{{price}}/天</span></li>
            </ul>
            <ol class="navBar">
                <li></li>
                <li></li>
                <li></li>
            </ol>
            <div class="content">
                <h4></h4>
                <div class="imgcon">
                    <p></p>
                    <div class="swiper-box">
                        <img>
                    </div>
                </div>
            </div>
        </main>
        <footer class="detailFooter">
            <div class="left">
                <div class="con">
                    <span @click="handleCount('-')">-</span>
                    <span>{{this.count}}</span>
                    <span @click="handleCount('+')">+</span>
                </div>
            </div>
            <div class="right" @click="goOrder">立即预定</div>
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
           detaiList:[],
           count:0,
           product:"",
           price:this.$route.query.price
        }
    },
    computed:{

    },
    methods:{
        // 去支付
       goOrder(){
           let {store_id,goods_id,cname,price}=this.$route.query
           this.$router.push({path:"/order",query:{store_id:store_id,product:this.product,goods_id:goods_id,price:price,count:this.count}})
       },
        //数量加减
        handleCount(type){
            if(type=="+"){
                this.count++
            }else if(type=="-"){
                if(this.count==0){
                    this.count=0
                    return
                }
                this.count--
            }
        }      
    },
    created(){
        let id=this.$route.query.store_id
        this.$http.post("/api/store/goods/list",{store_id:id}).then(res=>{
            console.log(res)
            this.detaiList=res.result[0]
            this.product=res.result[0].goods_name
            console.log(this.detaiList)
        })
    },
    mounted(){
        // 代理多个接口解决办法
        // axios.get("http://localhost:3000/deatilApi/detailList").then(res=>{
        //     console.log(res.data.data)
        //     console.log(this.$route.query.id)
        //     let id=Number(this.$route.query.id)
        //     let list=res.data.data.find(item=>{
        //         return item.id===id
        //     })
        //      this.detailList=list
        //     console.log(list)
        // })
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
.detail{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-size: calc(.16rem*2);
    background: #ebebec;
}
.detailHeader{
    width: 100%;
    height: calc(.6rem*2);
    // border-bottom: 1px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
}
.detailMain{
    flex: 1;
    overflow: auto;
}
.nav{
    width: 90%;
    height: calc(3.5rem*2);
    background: #d7d7d7;
    border-radius: calc(.1rem*2);
    margin: 0 auto;
}
.headline{
    width: 100%;
    height: calc(.5rem*2);
    display: flex;
    justify-content: center;
    align-items: center;
}
.navBar{
    width: 100%;
    height: calc(.3rem*2);
    display: flex;
    justify-content: center;
    align-items: center;
    li{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        &:nth-child(4){
            flex: 1.5;
        }
    } 
}
.content{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top:calc(.2rem*2);
    .swiper-box{
        width: 100%;
        height: calc(2rem*2);
        img{
            width: 100%;
            height: 100%;
        }
    }
}
.detailFooter{
    width: 100%;
    height: calc(.6rem*2);
    display: flex;
    .left{
        flex: 5;
        background: #989898;
        border-radius: calc(.3rem*2) 0 0 calc(.3rem*2);
        display: flex;
        justify-content: center;
        align-items: center;
        .con{
            display: flex;
            font-size: calc(.22rem*2);
            span{
                &:nth-child(1){
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: calc(.35rem*2);
                    height: calc(.35rem*2);
                    background: #d7d7d7;
                    border-radius: 50%;
                }
                &:nth-child(2){
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: calc(.35rem*2);
                    height: calc(.35rem*2);
                }
                &:nth-child(3){
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: calc(.35rem*2);
                    height: calc(.35rem*2);
                    background: #d7d7d7;
                    border-radius: 50%;
                }
            }
        }
    }
    .right{
        flex: 5;
        background: red;
        border-radius: 0 calc(.3rem*2) calc(.3rem*2) 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: calc(.18rem*2);
        color: #fff;
    }
}
</style>