<template>
    <div class="radio">
        <span v-for="(item,index) in options" :key="item.value" @click="toggleRadio(index,item.value)">
            <span class="radio-button" :class="{'active':index==sub}"></span>
            <span class="radio-text">{{item.text}}</span>
        </span>
    </div>
</template>
<script>
export default {
    // 自定义事件v-model必须写
         model: {
            prop: 'checked',
            event: 'change'
        },
    props:{
        // 接受order页面传来大参数
        options:{
            type:Array,
            required:true
        },
        checked: Number  //sub1
    },
    components:{

    },
    data(){
        return {
            sub:0
        }
    },
    computed:{

    },
    methods:{
        toggleRadio(i,value){
            this.sub=i
            this.$emit("change",value)
        },
    },
    created(){
        if(this.options.length<2){
            throw Error("数组的长度不能少于2条")
        }
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
.radio{
    width: 100%;
    height: 100%;
    font-size: calc(.16rem*2);
    display: flex;
    flex-direction: column;
}
.radio-button{
    display: inline-block;
    width: calc(.2rem*2);
    height: calc(.2rem*2);
    border-radius: 100%;
    border: solid 1px #ccc;
}
.radio-button.active{
    position: relative;
}
.radio-button.active:after{
    content:"";
    position: absolute;
    width: calc(.1rem*2);
    height: calc(.1rem*2);
    background: cornflowerblue;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%,-50%,0);
    border-radius: 100%;
}
</style>