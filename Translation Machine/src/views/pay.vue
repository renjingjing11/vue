<template>
    <div class="pay">
        <haeder class="payHeader">支付</haeder>
        <main class="payMain">
            <ul class="cout-down">
                <li>剩余支付时间</li>
                <li><span>09</span>分<span>59</span>秒</li>
                <li>订单金额<span>￥500</span></li>
            </ul>
            <ul class="payment">
                <li><span>支付方式</span><span>微信支付</span></li>
                <li><span>租金</span><span>￥{{$route.query.cash}}</span></li>
                <li><span>押金</span><span>￥{{$route.query.cost}}</span></li>
            </ul>
        </main>
        <div class="pay-button" @click="oredrSuccess">
            付款
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

        }
    },
    computed:{

    },
    methods:{
        // 付款成功  需要传递身份令牌[token]和订单号[order_number]
        oredrSuccess(){
            let token=window.sessionStorage.getItem("token")
            let order_number=window.sessionStorage.getItem("order_number")
            this.$http.post("/api/buyer/order/pay",{token:token,order_number:order_number}).then(res=>{
                // console.log(res)
                alert(res.result)
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
.pay{
    width: 100%;
    height: 100%;
    font-size: calc(.16rem*2);
    display: flex;
    flex-direction: column;
}
.payHeader{
    width: 100%;
    height: calc(.5rem*2);
    display: flex;
    justify-content: center;
    align-items: center;
}
.payMain{
    flex: 1;
    overflow: auto;
}
.cout-down{
    width: 100%;
    height: calc(1.5rem*2);
    border-bottom: dashed 1px #000;
    display: flex;
    flex-direction: column;
    li{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        &:nth-child(2){
            span{
                font-size: calc(.3rem*2);
                font-weight: 500;
            }
        }
        &:nth-child(3){
            font-size: calc(.2rem*2);
            color: #aaa;
        }
    }
}
.payment{
    width: 100%;
    height: calc(1.5rem*2);
    margin-top: calc(.5rem*2);
    display: flex;
    flex-direction: column;
    li{
        flex: 1;
        border-bottom: 1px solid #aaa;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: calc(.2rem*2);
        span:nth-child(1){
            flex: 7;
        }
        span:nth-child(2){
            flex: 3;
        }
    }
}
.pay-button{
    width: calc(2rem*2);
    height: calc(.5rem*2);
    background: red;
    position: absolute;
    left:25%;
    bottom: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border-radius: calc(.4rem*2) calc(.4rem*2) calc(.4rem*2) calc(.4rem*2);
}
</style>