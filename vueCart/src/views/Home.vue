<template>
  <div class="home">
    <header class="header">
      <div class="title">
        购物车
      </div>
        <ul class="nav">
           <router-link to="/home/order" tag="li" active-class="active">点菜</router-link>
           <router-link to="/home/ping" tag="li" active-class="active">评价</router-link>
           <router-link to="/home/shop" tag="li" active-class="active">商家</router-link>
        </ul>
    </header>
    <main class="main">
      <router-view></router-view>
    </main>
    <footer class="footer">
      <span>总数量:{{$store.getters.totalPrice}}</span> <!-- {{totalNum}} -->
      <span>总价格：{{$store.getters.cost}}</span> <!-- {{totalPrice}} -->
    </footer>
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
      totalNum:0,
      totalPrice:0
    }
  },
  computed:{

  },
  methods:{

  },
  created(){
    // window.cart写的步骤二：

    // console.log(window.cart)  在这里根本打印不到 为什么？  由于是父子所以不能实时更新
    eventBus.$on('upData', (params) => {
         console.log(params)
         console.log(Object.entries(params))  //返回数组
        let Num=0,Price=0
        Object.entries(params).forEach(item=>{
            Num+=item[1].count
            Price+=item[1].count*item[1].price
        })
        this.totalNum=Num
        this.totalPrice=Price
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
.home{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: calc(.16rem*2);
}
.header{
  width: 100%;
  height: calc(.8rem*2);
  .title{
    width: 100%;
    height: calc(.4rem*2);
    border-bottom: 1px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nav{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(.4rem*2);
    line-height: calc(.4rem*2);
    li{
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
.main{
  flex: 1;
  overflow: auto;
}
.footer{
  width: 100%;
  height: calc(.5rem*2);
  border-top: solid 1px #000;
}
.active{
  color: cornflowerblue;
}
</style>
