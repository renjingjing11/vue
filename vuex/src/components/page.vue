<template>
    <div class="page">
        <strong class="prev" @click="goToPage(-1)"><</strong>
        <span v-for="(item,index) in pages" :key="index" @click="handleActive(index)" :class="{selected:index===selected}">{{index+1}}</span>
        <strong class="next" @click="goToPage(1)">></strong>
        <input type="text" v-model.number="goValue">
        <button @click="selected=(goValue-1)">跳转</button>
    </div>
</template>
<script>
import Vue from "vue";
let bus=new Vue({})  //每个vue 都是事件机制
export default {
    props:{
        pages:{
            type:Number,
            value:1
        }
    },
    components:{

    },
    data(){
        return {
            selected:0,
            goValue:null
        }
    },
    computed:{

    },
    methods:{
        // 添加高亮 
        handleActive(i){
            this.selected=i
            console.log(this.selected)
            this.$bus.$emit("selectPage",this.selected)
        },
        // 点击 前进< 和 后退>
        // 这块值得学习的地方是点击的是前进和后退,每次下标都是+1||-1,那么可以写同个函数,传-1||1
        // 前进：1+1=2  后退：1+(-1)
        goToPage(n){
            //this.selected:是点击到那页 this.pages：是总页数
            //  console.log(this.selected,this.pages)
            // 假设你走到0+10走到10,,就从0开始走
            if(this.selected+n>=this.pages){
                this.selected=0;
                return;
            }
            if(this.selected+n<0){
                this.selected=this.pages-1
                return ;
            }
           this.selected= this.selected+n

           this.$bus.$emit("selectPage",this.selected)
        },
        // 输入值跳转具体某一页
        // selected(i){
        //     console.log(i)
        // }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
.page{
    display: flex;
    user-select: none;
}
span{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background: #fff;
    border: solid 1px #000;
}
strong{
    display: flex;
    justify-content: center;
    align-items: center;
}
input{
    width: 20px;
}
.selected{
    background: cadetblue;
}
</style>