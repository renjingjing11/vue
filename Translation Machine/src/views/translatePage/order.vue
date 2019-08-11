<template>
    <div class="order">
        <div class="orderHeader">
            <div class="orderLeft" @click="goBack">
                <i class="iconfont icon-zuojiantou-01"></i>
            </div>
            <div class="orderRight">
                填写订单
            </div>
        </div>
        <div class="orderMain">
            <div class="shopName">
                <span>商品名称</span>
                <span>{{$route.query.product}}</span>
                <span>X{{$route.query.count}}</span>
            </div>
            <div class="time">
                <ul class="timeUl">
                    <li @click="showCalendar=true"><span>租赁时间:</span><span>{{`${this.startTime}/${this.endTime}`}}</span></li>
                    <li><span>租赁天数</span><span>{{rentdays}}天</span></li>
                    <li>
                        <span>取机方式</span>
                        <span><radio-group v-model="delivery" :options="radiOptions"/></span>
                    </li>
                    <li v-show="delivery===1"><span>选择网点</span><span @click="showBranch=true">></span></li>
                    <li v-show="delivery===0"><span>选择地区:{{this.address}}</span><span @click="showArea=true">></span></li>
                    <li v-show="delivery===0"><span>详细地址</span><span><input type="text" name="" id=""></span></li>
                </ul>
            </div>
            <div class="price">
                <p><span>租赁价格</span><span>￥{{$route.query.price}}/天</span></p>
                <p><span>押金<i>(还机后两天后返还)</i></span><span>1X</span><span>￥{{cash}}/天</span></p>
            </div>
            <div class="people">
                <p><span>联系人</span><span><input type="text" v-model="linkman"></span></p>
                <p><span>手机号</span><span><input type="text" v-model="tel"></span></p>
            </div>
            <div class="bill">
                <span>是否开具发票</span>
                <span>
                    <input type="radio" name="bill" id="">不开发票
                    <input type="radio" name="bill" id="">开发票
                </span>
            </div>
            <div class="agreement">
                 <a href="">点击同意《准儿租赁协议》</a>
            </div>
        </div>
        <div class="orderFooter">
            <ul class="ul">
                <li>应付金额：{{cost}}</li>
                <li @click="handlePay">去支付</li>
            </ul>
        </div>
        <div class="calendar" v-show="showCalendar" @click="showCalendar=false">
            <Calendar range @select="onselect" class="plug"/>
        </div>
        <div class="branchBox" v-show="showBranch" @click="showBranch=false">
            <Branch/>
        </div>
        <div class="areaBox" v-show="showArea" @click.stop="showArea=false">
            <Area @select="getSelect"/>
        </div>
    </div>
</template>
<script>
import "../../../public/fonts/iconfont.css"
// 小程序日历插件
import Calendar from 'mpvue-calendar'
import 'mpvue-calendar/src/browser-style.css'
// radio组件
import Radio from "@/components/radio"
// 选择网点弹框组件
import Branch from "@/components/branch"
// 选择具体地理位置
import Area from "@/components/area"
export default {
    props:{

    },
    components:{
        Calendar,
        RadioGroup:Radio,
        Branch,
        Area
    },
    data(){
        return {
            // 展示日历弹框
            showCalendar:false,
            // 展示选择网点弹框
            showBranch:false,
            // 展示具体地理位置
            showArea:false,
            // 天数
            rentdays:1,
            // 日历开始时间
            startTime:"",
            // 选取日历结束时间
            endTime:"",
            // 传给radio组件的参数
            radiOptions:[{text:"邮寄",value:1},{text:"自取",value:0}],
            // radio数据双向绑定
            delivery:0,
            // 详细具体位置
            address:"",
            // 押金
            cash:20,
            // 联系人
            linkman:"",
            // 手机号码
            tel:"",
            // 订单号码
            order_number:null
        }
    },
    computed:{
         // 应付金额
        cost(){
            let {price,count}=this.$route.query
            return this.rentdays*price*count+this.rentdays*500
        }
    },
    // // 监听是一个对象
    // watch:{
    //     delivery(n,o){
    //         console.log(n,o) //n:是新值 o:是旧值
    //     }
    // },
    methods:{
        // 返回上一页
        goBack(){
            this.$router.go(-1)
        },
        // 选中日历期间
        onselect(start,end){
            // console.log(start,end) //start:[2019, 8, 23]  end:[2019, 8, 23, __ob__: Observer] 
            // 容错处理
            if(start&&end){
                // 本来是数组：[2019, 8, 23的形式,然后把他转成 2019-7-23
                 this.startTime=`${start[0]}-${start[1]-1}-${start[2]}` //2019-7-23
                 this.endTime=`${end[0]}-${end[1]-1}-${end[2]}`
                //  getTime是获取时间戳，他是毫秒
                 let startTime=new Date(this.startTime).getTime()
                 let endTime=new Date(this.endTime).getTime()
                //  console.log(endTime-startTime) // 86400000/1000/60/60/24 /1000是秒/60分/60小时/24天
                this.rentdays=(endTime-startTime)/1000/60/60/24+1
            }
        },
        // 子组件想父组件传递参数 首先在子组件定义函数($emit传递函数),在父组件@传递的函数="父组件函数"
        getSelect(address){
            this.address=address
        },
        // 去支付页面
        handlePay(){
            // 跳转支付页面需要后台返回order_number
            let token=window.sessionStorage.getItem("token")
            let {goods_id,store_id,count}=this.$route.query
            this.$http.post("/api/buyer/order/create",
                {token:token,
                 cart:JSON.stringify([{goods_id:goods_id,sku:JSON.stringify(this.cash),count:Number(count)}]),
                 receiver_name:this.linkman,
                 receiver_address:this.address,
                 receiver_phone:this.tel,
                 store_id:store_id
                }
            ).then(res=>{
                // console.log(res.order_number)
                window.sessionStorage.setItem("order_number",res.order_number)
            })
            this.$router.push({path:"/myOrder",query:{cash:this.cash,cost:this.cost}})
            console.log(JSON.stringify([{goods_id:goods_id,sku:JSON.stringify(this.cash),count:Number(count)}]))
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
.order{
    width: 100%;
    height: 100%;
    font-size: calc(.16rem*2);
    display: flex;
    flex-direction: column;
}
.orderHeader{
    width: 100%;
    height: calc(.5rem*2);
    // border-bottom: 1px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
    .orderLeft{
        flex: 0.5;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .orderRight{
        flex: 9.5;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
.orderMain{
    flex: 1;
    overflow: auto;
}
.shopName{
    width: 100%;
    height: calc(.8rem*2);
    background: #f3f3f3;
    font-size: calc(.16rem*2);
    display: flex;
    justify-content: center;
    align-items: center;
    span{
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
        }
    }
}
.time{
    width: 100%;
    height: calc(3rem*2);
    background: #f3f3f3;
    margin-top: calc(.2rem*2);
    font-size: calc(.16rem*2);
}
.timeUl{
    display: flex;
    flex-direction: column;
    padding-left: calc(.2rem*2);
    li{
        width: 100%;
        height: calc(.6rem*2);
        border-bottom: 1px solid #d7d7d7;
        display: flex;
        justify-content: center;
        align-items: center;
        &:nth-child(1){
            span:nth-child(1){
                flex: 3;
            }
            span:nth-child(2){
                flex: 7;
            }
        }
        &:nth-child(2){
            span:nth-child(1){
                flex: 8;
            }
            span:nth-child(2){
                flex: 2;
            }
        }
        &:nth-child(3){
            border-bottom:none;
            span:nth-child(1){
                flex: 7;
            }
            span:nth-child(2){
                flex: 3;
            }
        }
        &:nth-child(4){
            span:nth-child(1){
                 flex: 9;
            }
             span:nth-child(2){
                flex: 1;
            }
        }
        &:nth-child(5){
                display: flex;
            span:nth-child(1){
                flex: 9;
            }
            span:nth-child(2){
                flex: 1;
            }
        }
        &:nth-child(6){
                display: flex;
            span:nth-child(1){
                flex: 3;
            }
            span:nth-child(2){
                flex: 7;
            }
        }
    }
}
.price{
    width: 100%;
    height: calc(1.2rem*2);
    background: #f3f3f3;
    margin-top: calc(.2rem*2);
    padding-left: calc(.2rem*2);
    font-size: calc(.16rem*2);
    display: flex;
    flex-direction: column;
    p:nth-child(1){
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        span{
            &:nth-child(1){
                flex: 7;
            }
            &:nth-child(2){
                flex: 3;
            }
        }
    }
    p:nth-child(2){
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        span{
            &:nth-child(1){
                flex: 5;
                i{
                    font-size: calc(.14rem*2);
                }
            }
            &:nth-child(2){
                flex: 2;
            }
             &:nth-child(3){
                flex: 3;
            }
        }
    }
}
.people{
    width: 100%;
    height: calc(1.2rem*2);
    background: #f3f3f3;
    margin-top: calc(.2rem*2);
    padding-left: calc(.2rem*2);
    font-size: calc(.16rem*2);
    display: flex;
    flex-direction: column;
    p:nth-child(1){
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        span{
            &:nth-child(1){
                flex: 3;
            }
            &:nth-child(2){
                flex: 7;
            }
        }
    }   
    p:nth-child(2){
         flex: 1;
         display: flex;
         justify-content: center;
         align-items: center;
          span{
            &:nth-child(1){
                flex: 3;
            }
            &:nth-child(2){
                flex: 7;
            }
        }
    }
}
.bill{
    width: 100%;
    height: calc(.5rem*2);
    background: #f3f3f3;
    margin-top: calc(.2rem*2);
    display: flex;
    span:nth-child(1){
        flex: 4;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    span:nth-child(2){
        flex: 6;
        display: flex;
        justify-content: center;
        align-items: center;
        input:nth-child(1){
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        input:nth-child(2){
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}
.agreement{
    width: 100%;
    height: calc(.6rem*2);
    display: flex;
    justify-content: center;
    align-items: center;
}
.orderFooter{
    width: 100%;
    height: calc(.7rem*2);
    line-height: calc(.7rem*2);
    .ul{
        display: flex;
        justify-content: center;
        align-items: center;
        li{
            &:nth-child(1){
                flex: 7;
                background: #808080;
                border-radius: calc(.4rem*2)  0 0 calc(.4rem*2);
                padding-left: calc(.2rem*2);
                color: #fff;
            }
            &:nth-child(2){
                flex: 3;
                background: #e30000;
                color: #fff;
                 border-radius:0 calc(.4rem*2) calc(.4rem*2) 0;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
}
.calendar{
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.branchBox{
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.areaBox{
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>