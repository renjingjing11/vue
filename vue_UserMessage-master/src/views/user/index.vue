<template>
        <el-container class="container">
        <el-header class="header">
            <el-row>
                <p>1702E班级：莫莫莫</p> 
           </el-row>
        </el-header>
        <el-container>
            <el-aside>
                 <el-menu
                    default-active="1"
                    class="menu"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                    <el-submenu index="1">
                        <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>用户管理</span>
                        </template>
                        <el-menu-item-group>
                        <el-menu-item>
                            <router-link to="/user/list" tag="span" class="list">用户列表</router-link>
                        </el-menu-item>
                        <el-menu-item>
                            <router-link to="/user/add" tag="span" class="add">添加列表</router-link>
                        </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
         </el-container>
    </el-container>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .container{
        height: 100%;
    }
    .header{
        background-color: lightslategray;
        font-size: calc(.2rem);
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .menu{
        height: 100%;
    }
    .router-link-active{
        color: cornflowerblue;
    }
    .list{
        display: flex;
        width: 100%;
    }
    .add{
        display: flex;
        width: 100%;
    }
</style>

