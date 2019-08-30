<template>
    <div class="wrap">
        <header class="header">猫眼电影</header>
        <main class="main">
            <div class="content">
                <router-view/>
            </div>
        </main>
        <footer class="footer">
            <ol class="foot">
                <router-link to="/home/movie/hot" tag="li">电影</router-link>
                <router-link to="/home/cinema" tag="li">影院</router-link>
                <router-link to="/login" tag="li">我的</router-link>
            </ol>
        </footer>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    html.body{
        width: 100%;
        height: 100%;
        font-size: calc(100/750*100vw);
    }
    .wrap{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .header{
        width: 100%;
        height: calc(.5rem*2);
        background: #e54847;
        color: #fff;
        font-size: 18px;
    }
    .main{
        flex: 1;
        overflow: auto;
        .content{
            width: 100%;
            height: 100%;
            margin:0 auto;
        }
    }
    .footer{
        display: flex;
        width: 100%;
        height: 48px;
        border-top: 1px solid #000;
        .foot{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            li{
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
</style>


