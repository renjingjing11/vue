<template>
    <div class="luyou">
        <div class="nav">
            <router-link to="/home/movie/will" tag="li">北京<i class="iconfont icon-triangle-down"></i></router-link>
            <router-link to="/home/movie/hot" tag="li">正在热映</router-link>
            <router-link to="/home/movie/will" tag="li">即将上映</router-link>
            <router-link to="/home/movie/will" tag="li"><i class="iconfont icon-fangdajing"></i></router-link>
        </div>
        <router-view/>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
.nav{
    width: 100%;
    height: calc(.45rem*2);
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    li{
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 15px;
      font-weight: 700;
      flex: 1;
      
      &:nth-child(1){
          font-size: 15px;
          color: #666;
          font-weight: normal;
          i{
              font-size: 6px;
              color: #aaa;
          }
      }
      &:nth-child(3){
          color: #666;
      }
      &:nth-child(4){
          font-weight: normal;
          i{
               font-size: 20px;
               font-weight: 700;
               color: #ef4238;
          }
      }
    }
  }
  .nav li.active{
          color: #ef4238 !important;
      }
</style>


