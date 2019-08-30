<template>
    <div class="hot-item" @click="goDetail()">
        <div class="item-left">
            <img :src="img" alt="">
        </div>
        <div class="item-right">
            <h3>{{nm}}</h3>
            <ol class="ol">
                <li>{{sc?"观众评"+sc:"暂无影评"}}</li>
                <!-- <li>{{wish+`人想看`}}</li> -->
                <li>{{star}}</li>
                <li>{{showInfo}}</li>
            </ol>
            <p :class="globalReleased?'red':'blue'">{{globalReleased?"购买":"预售"}}</p>
        </div>
    </div>
</template>
<script>
export default {
    props:["img","nm","sc","star","showInfo","globalReleased","wish","id"],
    data(){
        return {
            statu:""
        }
    },
    methods:{
        goDetail(){
            this.$router.push({path:`/detail/${this.id}`,parmas:{}})
        }
    }
}
</script>
<style lang="scss">
    .hot-item{
        padding: calc(.12rem*2) calc(.14rem*2) calc(.12rem*2) calc(.12rem*2);
        height: calc(1.14rem*2);
        // background: cadetblue;
        display: flex;
        .item-left{
            flex: 2;
            img{
                width: calc(.64rem*2);
                height: calc(.9rem*2);
            }
        }
        .item-right{
            position: relative;
            flex: 8;
            // padding: calc(.12rem*2) calc(.14rem*2) calc(.12rem*2) 0;
            border-bottom: 1px solid #eee;
            h3{
                font-size: 17px;
                color: #333;
                font-weight: 700;
            }
            .ol{
                width: calc(2.07rem*2);
                line-height: calc(.22rem*2);
                li{
                    &:nth-child(1){
                        font-size: 14px;
                        color: #666;
                    }
                    &:nth-child(2){
                        font-size: 13px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        color: #666;
                    }
                    &:nth-child(3){
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        color: #666;
                    }
                    &:nth-child(3){
                        font-size: 13px;
                        color: #666;
                    }
                }
            }
            p{
                position: absolute;
                right: calc(.2rem*2);
                top: calc(.3rem*2);
                width: 47px;
                height: 27px;
                line-height: 28px;
                text-align: center;
                box-sizing: border-box;
                background-color: #f03d37;
                color: #fff;
                border-radius: 4px;
                white-space: nowrap;
                font-size: 12px;
                cursor: pointer;
            }
        }
    }
    .red{
        background: #f03d37 !important;
    }
    .blue{
        background: cadetblue !important;
    }
</style>

