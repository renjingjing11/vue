<template>
    <div class="order">
        <ol class="order-left">
            <!-- 在需要点击的盒子设置scrollEl("#"+每个小标题) -->
            <li v-for="item in list" :key="item.id" @click="scrollToEl('#'+item.title)" :class="item.id==index?'activeColor':''">{{item.title}}1</li>
        </ol>
        <!-- 结构  bscroll只对底层盒子有效果 对order-right设置overflow: hidden; ref：获取到dom节点-->
        <div class="order-right" ref="right">
            <div class="content">
                <div class="itemBox" v-for="item in list" :key="item.id">
                    <h4 :id="item.title">{{item.title}}</h4>
                    <div class="con" v-for="item in item.children" :key="item.id">
                        <div class="item-left">
                            <p></p>
                        </div>
                        <ul class="item-right">
                            <li>{{item.title}}</li>
                            <li>价格:{{item.price}}</li>
                            <li>
                               <compute :goods="item"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import data from "@/mock/data.json";
// sub1
import BScroll from "better-scroll";
import compute from "@/components/compute";
export default {
    props:{

    },
    components:{
        compute
    },
    data(){
        return {
            list:data,
            index:1,
        }
    },
    computed:{

    },
    methods:{
        // sub4 针对页面做的操作
        scrollToEl(el){
            this.bscroll.scrollToElement(el,1000)
        }
    },
    created(){
        // sub3  潜在bug
        // this.bscroll.refresh()
    },
    mounted(){
        // sub2 由于mounted生命周期里dom才渲染完成,因此在这里new BScroll
        // console.log(this.$refs.right) //DOM节点
       this.bscroll=new BScroll(this.$refs.right,{
           click:true
       })
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
  display: flex;
  font-size: calc(.18rem*2);
}
.order-left{
    flex: 2.5;
    background: #ccc;
    li{
        width: 100%;
        height: calc(.6rem*2);
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #000;
    }
}
.order-right{
    flex: 7.5;
    overflow: hidden;
    .itemBox{
        width: 100%;
        .con{
            width: 100%;
            height: calc(1.2rem*2);
            display: flex;
            .item-left{
                flex: 4;
                display: flex;
                justify-content: center;
                align-items: center;
                p{
                    width: 90%;
                    height: 85%;
                    background: #ccc;
                }
            }
            .item-right{
                flex: 6;
                li{
                    width: 100%;
                    height: calc(.4rem*2);
                }
            }
        }
    }
}
.activeColor{
    background: #fff;
}
</style>