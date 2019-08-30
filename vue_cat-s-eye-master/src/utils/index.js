import Cookie from "js-cookie";

let key = "token";

// Cookie.set({"name","value",{express:365}})

// 获取当前的cookie里的token
export function getToken() {
    return Cookie.get("token")
}
// 设置 token
export function setToken() {
    return Cookie.set("token", token, { express: 365 })
}