<template>
    <div class="compute">
        <span v-show="count!==0" @click="showNum(-1)">-</span>
        <span v-show="count!==0">{{count}}</span>
        <span @click="showNum(1)">+</span>
    </div>
</template>
<script>
// let cart={} 是全局变量与window.cart效果是一样的
window.cart={}
export default {
    props:["goods"],
    components:{

    },
    data(){
        return {
            count:0
        }
    },
    computed:{

    },
    methods:{
       showNum(num){
           this.count+=num

        //这是用window.cart写的步骤一：

        //     //首先拷贝一份 
        //    let goods = {...this.goods};
        //    //在新变量赋值数据  
        //    goods.count = this.count
        //     //把cart[key值]=修改过count后的数据    
        //    cart[this.goods.id]=goods
        //    console.log(window.cart)

        //   eventBus.$emit("upData",window.cart)

          this.$store.commit("changeList",{...this.goods,count:this.count})
       }
    },
    created(){
        // console.log(this)
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">

</style>