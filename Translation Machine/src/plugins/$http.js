import axios from "axios";

// 封装axios
function $http(Vue, options) {
    // console.log(options) //{timeout: 2000} 是main.js 挂载$http第二个参数
    let $httpInstance = axios.create({
        timeout: options.timeout || 3000,
        headers: {
            authorization: "aaa"
        }
    })

    // 拦截器
    // console.log(Object.keys($httpInstance)) // ["request", "getUri", "delete", "get", "head", "options", "post", "put", "patch", "defaults", "interceptors"]
    // $httpInstance.interceptors 包含两个函数 request(请求) Response(响应)
    // 这些方法是es6方法：Object.entries()[可直接查看key&value]  Object.values()[直接查看value值] Object.keys()[直接查看key值]
    console.log($httpInstance.interceptors.response)
    $httpInstance.interceptors.response.use((res) => {
        // console.log(res)
        if (res.status === 200) {
            return res.data
        } else {
            console.error(res.statusText)
            return {
                error: res.statusText
            }
        }
    })

    // 原型属性 Object.defineProperty("目标对象","属性名","config对象,直接写value值即可")
    // Vue.prototype.$http = axios //可被别人的覆盖,容易出现bug 写这个为了查看原型链上是否真正挂载上,可以在main的created打印this
    Object.defineProperty(Vue.prototype, "$http", {
        value: $httpInstance //新的axios
    })
}
export default $http