<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  
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
    font-size: (100/750*100vw)
  }
  #app{
    width: 100%;
    height: 100%;
    font-size: calc(.16rem*2);
  }
</style>
