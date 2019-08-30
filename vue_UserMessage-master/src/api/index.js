// import { resolve } from "url";

//获取用户
export let getList = () => {
    return fetch("/api/list").then(res => res.json())
}

// 更新用户
export let upData = parmas => {
    return fetch("/api/updata", {
        body: JSON.stringify(parmas),
        methods: 'PUT',
        headers: {
            "content-type": "application/json"
        }
    }).then(res => res.json())
}

// 添加用户
export let addList = parmas => {
    console.log(parmas)
    return fetch("/api/add", {
        body: JSON.stringify(parmas),
        methods: 'POST',
        headers: {
            "content-type": "application/json"
        }
    }).then(res => res.json())
}

// 删除用户
export let delList = parmas => {
    return fetch("/api/delete", {
        body: JSON.stringify(parmas),
        methods: 'DELETE',
        headers: {
            "content-type": "application/json"
        }
    }).then(res => res.json())
}