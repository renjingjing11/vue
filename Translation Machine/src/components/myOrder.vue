<template>
    <div class="my-order">
        <ul class="my-nav">
            <li>订单编号</li>
            <li>{{order_number}}</li>
            <li :class="status===1?'paid':'unpaid'">{{status==1?"已付款":"未付款"}}</li>
        </ul>
        <div class="my-con">
            <div class="con-left">
                <p></p>
            </div>
            <ol class="con-right">
                <li>日本经济套餐</li>
                <li>租期：2018-05-01至2018-06-01</li>
                <li>￥511</li>
            </ol>
        </div>
        <ul class="my-foot">
            <li></li>
            <li @click="returnBack">支付</li>
            <li>联系客服</li>
        </ul>
        <p>提示:请于2019-09-09 00:00点之前还机</p>
    </div>
</template>
<script>
export default {
    props:{
        order_number:{
            type:String
        },
        status:{
            type:Number
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
        returnBack(){
            this.$http.post("/api/buyer/order/pay",{token:window.sessionStorage.getItem("token"),order_number:this.order_number}).then(res=>{
                alert("支付成功")
            })
        }
    },
    created(){
        console.log(this.status)
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
.my-order{
    width: 100%;
    height: calc(2.7rem*2);
    font-size: calc(.16rem*2);
    display: flex;
    flex-direction: column;
    background: #f3f3f3;
    border-radius: calc(.1rem*2)  calc(.1rem*2)  calc(.1rem*2)  calc(.1rem*2);
    margin-top: calc(.2rem*2);
}
.my-nav{
    display: flex;
    width: 100%;
    height: calc(.35rem*2);
    margin-top: calc(.1rem*2);
    li{
        &:nth-child(1){
            flex: 3;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &:nth-child(2){
            flex: 5;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &:nth-child(3){
            flex: 2;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #666;
            color: #fff;
            border-radius: calc(.2rem*2) calc(.2rem*2) calc(.2rem*2) calc(.2rem*2);
        }
    }
}
.my-con{
    display: flex;
    width: 100%;
    height: calc(1.3rem*2);
    margin-top: calc(.2rem*2);
    border-bottom: 1px solid #989898;
    .con-left{
        flex: 4;
        display: flex;
        justify-content: center;
        align-items: center;
        p{
            width: 85%;
            height: 80%;
            background: #d7d7d7;
            border-radius: calc(.1rem*2);
        }
    }
    .con-right{
        flex: 6;
        display: flex;
        flex-direction: column;
        li{
           flex: 1;
           overflow: hidden;
           text-overflow:ellipsis;
           white-space: nowrap;
           &:last-child{
               font-size: calc(.2rem*2);
               color: red;
           }
        }
    }
}
.my-foot{
    display: flex;
    width: 100%;
    height: calc(.35rem*2);
    margin-top: calc(.2rem*2);
    li{
        &:nth-child(1){
            flex: 5;
        }
         &:nth-child(2){
            flex: 2.5;
            background: #fff;
            border-radius: calc(.2rem*2) calc(.2rem*2) calc(.2rem*2) calc(.2rem*2);
            border: solid 1px red;
            color: red;
            display: flex;
            justify-content: center;
            align-items: center;
        }
         &:nth-child(3){
            flex: 2.5;
            background: #fff;
            border-radius: calc(.2rem*2) calc(.2rem*2) calc(.2rem*2) calc(.2rem*2);
            border: solid 1px #989898;
            color: #989898;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 calc(.1rem*2);
        }
    }
}
p{
    width: 100%;
    height: calc(.4rem*2);
    font-size: calc(.12rem*2);
    color: #989898;
    display: flex;
    justify-content: center;
    align-items: center;
}
.paid{
    color: #fff !important;
    background: red !important;
}
.unpaid{
    background: #666 !important;
}
</style>