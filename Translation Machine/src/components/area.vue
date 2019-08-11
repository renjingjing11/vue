<template>
    <div class="area" @click.stop>
        <div class="areaHeader">选择邮寄地址</div>
        <div class="areaMain">
            <ol class="navTitle">
                <li>{{proValue}}</li>
                <li>{{cityValue}}</li>
                <li>{{areaValue}}</li>
            </ol>
            <ul class="nav">
                <li>省</li>
                <li>市</li>
                <li>区</li>
            </ul>
            <div class="con">
                 <ul class="prov">
                    <li v-for="(value,key) in prov" :key="key" @click="selectProv(key,value)">{{value}}</li>
                </ul>
                <ul class="city">
                    <li v-for="(value,key) in city" :key="key" @click="selectCity(key,value)">{{value}}</li>
                </ul>
                <ul class="are">
                    <li v-for="(value,key) in area" :key="key" @click="selectArea(key,value)">{{value}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            prov:{},
            city:{},
            area:{},
            lists:null,
            provCode:"",
            proValue:"",
            cityValue:"",
            areaValue:""
        }
    },
    computed:{

    },
    methods:{
        // 点击省
        selectProv(prov,value){
            this.provCode=prov
            this.city={}
            this.area={}
            this.proValue=value
            this.city=this.lists['0,'+prov]
        },
        // 点击市
        selectCity(city,value){
            this.cityValue=value
            this.area=this.lists['0,'+this.provCode+','+city]
            console.log(this.area)
        },
        // 点击区
        selectArea(area,value){
            this.areaValue=value
            this.$emit("select",this.proValue+this.cityValue+this.areaValue)
        }
    },
    created(){
        this.$http.get("/api/buyer/delivery/city").then(res=>{
            this.lists=res.lists
            this.prov=res.lists['0']
        })
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
.area{
    width: 90%;
    height: 80%;
    font-size: calc(.16rem*2);
    display: flex;
    flex-direction: column;
    background: #fff;
}
.areaHeader{
    width: 100%;
    height: calc(.6rem*2);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(.2rem*2);
}
.areaMain{
    flex: 1;
    overflow: auto;
}
.navTitle{
    width: 100%;
    height: calc(.2rem*2);
    display: flex;
    justify-content: center;
    align-items: center;
    background: cornflowerblue;
    color: #fff;
    li{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
.nav{
    width: 100%;
    height: calc(.3rem*2);
    display: flex;
    li{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
.con{
    width: 100%;
    display: flex;
    .prov{
        width: 33.3%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .city{
        width: 33.3%;
    }
    .area{
        width: 33.3%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>