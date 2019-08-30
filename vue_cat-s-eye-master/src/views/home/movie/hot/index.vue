<template>  
    <div class="hot">
        <Hot v-for="(item,index) in movieList" :key="index"
            :img="item.img"
            :nm="item.nm"
            :sc="item.sc"
            :star="item.star"
            :showInfo="item.showInfo"
            :globalReleased="item.globalReleased"
            :id="item.id"
        ></Hot>
    </div>
</template>
<script>
import Hot from "@/components/hot"
import axios from "axios"
import "@/assets/fonts/iconfont.css";
export default {
    data(){
        return {
            movieList:[]
        }
    },
    components:{
        Hot
    },
    created(){
        axios.get("/api/list").then(res=>{
            console.log(res.data.data)
            this.movieList=res.data.data.movieList
        })
    }
}
</script>
<style lang="scss">
    
</style>

