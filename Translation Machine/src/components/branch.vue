<template>
    <div class="branch">
        <div class="branchHeader"> 选择网点</div>
        <div class="branchMain">
            <ul class="branchList" v-for="item in list" :key="item.id">
                <li>{{item.title}}</li>
                <li><i class="iconfont icon-dingwei1"></i><span>{{item.shoppe}}</span></li>
                <li><i class="iconfont icon-Skye"></i><span>{{item.time}}</span></li>
                <li><i class="iconfont icon-Skye"></i><span>{{item.tel}}</span></li>
            </ul>
        </div>
    </div>
</template>
<script>
// 选择网点数据
import branchData from "@/mock/branch.json";
import "../../public/fonts/iconfont.css";
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            list:branchData
        }
    },
    computed:{

    },
    methods:{

    },
    created(){

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
.branch{
    width: 90%;
    height: 90%;
    font-size: calc(.16rem*2);
    display: flex;
    flex-direction: column;
    background: #f3f3f3;
    border-radius: calc(.1rem*2);
}
.branchHeader{
     width: 100%;
     height: calc(.8rem*2);
     display: flex;
     justify-content: center;
     align-items: center;
     line-height: calc(.8rem*2);
}
.branchMain{
    flex: 1;
    overflow: auto;
}
.branchList{
    width: 100%;
    height: calc(1.7rem*2);
    margin-left: calc(.4rem*2);
    li{
        width: calc(3rem*2);
        white-space: wrap;
        line-height: calc(.3rem*2);
        color: #666;
    }
}
</style>