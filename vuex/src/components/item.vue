<template>
    <div class="item">
        <ol class="ol">
            <li>{{id}}</li>
            <li><span v-show="this.flag2">{{item.TabelName}}</span><span v-show="this.flag"><input type="text" v-model="newName"></span></li>
            <li><span v-show="this.flag2">{{item.TabelLeval}}</span><span v-show="this.flag"><input type="text" v-model="newLavel"></span></li>
            <li><button @click="handleChange">{{this.flag?"save":"edit"}}</button><button @click="handleDel">delete</button></li>
        </ol>
    </div>
</template>
<script>
export default {
    //第一种方式：props接受是数组:["",""]这种方式比较简单
    //第二种方式：props接受是对象：{"":{type:type类型}}
    props:{
        item:{
            type:Object
        },
        id:{
            type:Number
        }
    },
    components:{

    },
    data(){
        return {
            itemList:[],
            flag:false,
            flag2:true,
            newName:"",
            newLavel:""
        }
    },
    computed:{

    },
    methods:{
        handleDel(){
           this.$store.commit("delList",this.id)
        },
        handleChange(){
            this.flag=!this.flag
            this.flag2=!this.flag2
            this.$store.commit("changeList",{
                TabelName:this.newName,
                TabelLeval:this.newLavel,
                id:this.id
            })
        }
    },
    created(){
         
    },
    mounted(){
       
    }
}
</script>
<style lang="scss">
.ol{
    display: flex;
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #000;
    li{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>