<template>
    <div class="header">
        <div class="logo">
            <h1>
                <img src="../../assets/logo.png" />zzComponent
            </h1>
        </div>
        <div class="header_menu">
            <li class="menu_item">
                <router-link to="/Main">组件</router-link>
            </li>
            <li class="menu_item">
                <router-link to="/About">文档</router-link>
            </li>
            <li class="menu_item">
                <router-link to="/">首页</router-link>
            </li>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
        }
    },
    methods: {
    }
}
</script>

<style scoped>
    .header {
        height: 70px;
        width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-flow: nowrap;
        border-bottom: 1px solid #dcdfe6;
    }
    .logo {
       flex: .5 0 auto;
    }
    .logo img {
        width: 30px;position: relative;
        top: 10px;
        height: 30px;
        margin-right: 10px;
    }
    .logo h1 {
        text-align: left;
        line-height: 70px;
        font-size: 18px;
        
    }
    .header_menu {
        flex: .5 1 auto;
    }
    .header_menu .menu_item {
        min-width: 80px;
        height: 70px;
        line-height: 70px;
        border-top: 2px solid transparent;
        float: right;
        text-align: center;
    }
    .header_menu .menu_item a {
        display: block;
        height: 70px;
        line-height: 70px;
        font-size: 14px;
    }
    .header_menu .menu_item:hover {
        border-top: 2px solid #0170fe;
        transition:color .3s cubic-bezier(.645,.045,.355,1),border-color .3s cubic-bezier(.645,.045,.355,1),background .3s cubic-bezier(.645,.045,.355,1),padding .15s cubic-bezier(.645,.045,.355,1)
    }
    .header_menu .menu_item:hover a {
        color: #0170fe;
        transition:color .3s cubic-bezier(.645,.045,.355,1),border-color .3s cubic-bezier(.645,.045,.355,1),background .3s cubic-bezier(.645,.045,.355,1),padding .15s cubic-bezier(.645,.045,.355,1)
    }
    .header_menu .menu_item.active {
        border-top: 2px solid #0170fe;
    }
    .header_menu .menu_item.active a {
        color: #0170fe;
    }

</style>