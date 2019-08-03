<template>
  <div class="about">
      <input type="text" v-model="path">
      <component :is="target"></component>
  </div>
</template>
<script>
import Vue from "vue";
// 组件
let construc=Vue.component("home",{
    render(){
      return <div>this is home page</div>
    }
})
Vue.component("list",{
  render(){
    return <div>this is list page</div>
  }
})
Vue.component("detail",{
  render(){
    return <div>this is detail page</div>
  }
})
//console.log(construc)//ƒ VueComponent (options) {
                         //   this._init(options);
                     // }
export default {
  data(){
     // 路由表
     let routes=[
       {path:"/home",component:"home"},
       {path:"/list",component:"list"},
       {path:"/detail",component:"detail"}
     ]
    return {
      routes,
      path:"/home" //construc  这里可以写变量和字符串
    }
  },
  computed: {
    // 页面改变
    target(){
      // 判断path与这个路由表的path是否一样
      let res=this.routes.find(item=>item.path===this.path)
      if(res){
        return res.component
      }
    }
  },
}
</script>