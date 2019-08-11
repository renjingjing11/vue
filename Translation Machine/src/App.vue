<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<style lang="scss">
*{
  padding: 0;
  margin: 0;
  list-style: none;
  box-sizing: border-box;
}
html,body{
  width: 100%;
  height: 100%;
}
#app{
  width: 100%;
  height: 100%;
}
.vaild-error{
  border: solid 1px red;
}
</style>
