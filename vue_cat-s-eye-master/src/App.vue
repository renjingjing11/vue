<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import "./assets/fonts/iconfont.css"
export default {
  name: 'App'
}
</script>

<style lang="scss">
  *{
    padding: 0;
    margin: 0;
    list-style: none;
    box-sizing: border-box;
  }
  html,body,#app{
    width: 100%;
    height: 100%;
    font-size: calc(100/750*100vw)
  }
  .wrap{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-size: 16px;
  }
  .header{
    width: 100%;
    height: calc(.5rem*2);
    background: #e54847;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2{
      font-size: 18px;
      color: #fff;
    }
  }
  
</style>
