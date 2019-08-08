<template>
    <div class="home">
        <ul class="ul">
            <li>No</li>
            <li>Nama</li>
            <li>Label</li>
            <li></li>
        </ul>
        <ol class="nav">
            <li></li>
            <li><input type="text" v-model="TabelName"></li>
            <li><input type="text" v-model="TabelLeval"></li>
            <li><button @click="handleSave">save</button></li>
        </ol>
        <Item v-for="(item,index) in pageList" :key="index"
            :item="item"
            :id="index"
        />
        <Page :pages="Math.ceil($store.state.list.length/3)||1"/>
    </div>
</template>
<script>
import Item from "@/components/item.vue"
import Page from "@/components/page.vue";
let id=0;
export default {
    props:{

    },
    components:{
        Item,
        Page
    },
    data(){
        return {
            TabelName:"",
            TabelLeval:"",
            page:0
        }
    },
    computed:{
        pageList(){
            return this.$store.state.list.slice(this.page*3,(this.page+1)*3)
        }
    },
    methods:{
        handleSave(){
            this.$store.commit("saveList",{
                TabelName:this.TabelName,
                TabelLeval:this.TabelLeval
            })
        }
    },
    created(){

    },
    mounted(){
        this.$bus.$on("selectPage",(page)=>{
            console.log(page)
            this.page=page
        })
    }
}
</script>
<style lang="scss">
*{
    padding: 0;
    margin: 0;
    list-style: none;
}
.home{
    width: 600px;
    height: 300px;
    // background: #eee;
    margin: 20px auto;
}
.ul{
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #000;
    li{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
.nav{
    display: flex;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #000;
    li{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>