<template>
    <div>
        <div class="content">
            <h2>近期最受期待</h2>
            <div class="will">
                <Will v-for="(item,index) in expect" :key="index"
                    :img="item.img"
                    :nm="item.nm"
                    :comingTitle="item.comingTitle"
                    :wish="item.wish"
                ></Will>
            </div>
            <div class="coming">
                <!-- <Coming-List></Coming-List> -->
               <Hot v-for="(item,i) in coming" :key="i" 
                    :img="item.img"
                    :nm="item.nm"
                    :wish="item.wish"
                    :star="item.star"
                    :showInfo="showInfo"
               ></Hot>
            </div>
        </div>
    </div>
</template>
<script>
import Will from "@/components/will"
import axios from "axios"
import Hot from "@/components/hot"
export default {
    components:{
        Will,
        Hot
    },
    data(){
        return {
            expect:[],
            coming:[]
        }
    },
    created(){
        axios.get("/api/expect").then((res)=>{
            console.log(res.data.data.coming)
            this.expect=res.data.data.coming
        })
        axios.get("/api/coming").then(res=>{
            console.log(res.data.data.coming)
            this.coming=res.data.data.coming
        })
    }
}
</script>
<style style="scss">
 .nav{
    width: 100%;
    height: calc(.45rem*2);
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  .nav li{
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
    }
    .content{
        width: 80%;
        margin: 0 0 calc(.12rem*2);
    }
    h2{
        font-size: 14px;
        color: #333;
        margin-top: calc(.1rem*2);
        margin-left: calc(.2rem*2);
    }
    .will{
        display: flex;
        width:92%;
        height: calc(1.91rem*2);
        overflow-x:auto ;
        padding-top: calc(.14rem*2);
        margin: 0 auto;
        line-height: calc(.2rem*2);
    }
    .coming{
        border-top: 9px solid #eee;
    }
    .active{
         color: #ef4238;
    }
</style>

