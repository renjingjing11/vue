<template>
    <div>
        <div class="ol">
            <img :src="img" alt="">
            <p>{{nm}}</p>
            <p>{{comingTitle.split(" ")[0]}}</p>
            <span>{{wish+`人想看`}}</span>
        </div>
    </div>
        
</template>
<script>
export default {
    props:["img","nm","comingTitle","wish"]
}
</script>
<style lang="scss">
        .ol{
            width: 94%;
            margin-right: calc(.1rem*2);
            position: relative;
            img{
            width: calc(.85rem*2);
            height: calc(1.15rem*2);
             }
            p{
                &:nth-child(2){
                    width: calc(.85rem*2);
                    font-size: 13px;
                    color: #222;
                    font-weight: 700;
                    overflow: hidden; 
                    white-space: nowrap; 
                    text-overflow: ellipsis; 
                }
                &:nth-child(3){
                    font-size: 12px;
                    color: #999;
                }
            }
            span{
                display: flex;
                color: #faaf00;
                font-size: 11px;
                position: absolute;
                font-weight: 600;
                bottom: calc(.4rem*2);
                text-align: center;
            }
        }
</style>
