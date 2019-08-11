<template>
    <div class="orderPage">
        <header class="oPageHeader">我的订单</header>
        <main class="oPageMain">
            <MyOrder v-for="item in list" :key="item.order_id"
                :order_number="item.order_id"
                :status="item.status"
            />
        </main>
    </div>
</template>
<script>
// 引入我的订单详情
import MyOrder from "@/components/myOrder";
export default {
    props:{

    },
    components:{
        MyOrder
    },
    data(){
        return {
            list:[],
            status:[]
        }
    },
    computed:{

    },
    methods:{

    },
    created(){
        this.$http.post("/api/buyer/order/order",{token:window.sessionStorage.getItem("token")}).then(res=>{
            // console.log(res)
            this.list=res.result.orders
            let a=res.result.orders.find(item=>item.status===0)
            let b=res.result.orders.find(item=>item.status===1)
            let c=res.result.orders.find(item=>item.status===2)
            let d=res.result.orders.find(item=>item.status===3)
            let e=res.result.orders.find(item=>item.status===4)
            let f=res.result.orders.find(item=>item.status===5)
            this.status.push(a,b)
            console.log(this.status)
        })
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
// status:        未付款	已付款   待发货  已发货 已收货  已取消
//order_status	     0	      1	       2      3    4	    5  
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
.orderPage{
    width: 100%;
    height: 100%;
    font-size: calc(.16rem*2);
    display: flex;
    flex-direction: column;
}
.oPageHeader{
    width: 100%;
    height: calc(.5rem*2);
    font-size: calc(.18rem*2);
    display: flex;
    justify-content: center;
    align-items: center;
}
.oPageMain{
    flex: 1;
    overflow: auto;
}
</style>