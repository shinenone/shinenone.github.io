<template>
    <div id="app">
        <router-view></router-view>

        <div class="item" v-show="!$route.meta.navHide">
            <ul>
                <li>
                    <router-link to="/">
                        <i class="iconfont icon-icon-test10"></i>
                        <span>{{ site[0].name }}</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="community">
                        <i class="iconfont icon-icon-test13"></i>
                        <span>{{ site[1].name }}</span>
                    </router-link>
                </li>
                <li class="special">
                    <i class="iconfont icon-plus-circle-fill"></i>
                </li>
                <li>
                    <router-link to="inform">
                        <i class="iconfont icon-icon-test11"></i>
                        <span>{{ site[2].name }}</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="my">
                        <i class="iconfont icon-icon-test12"></i>
                        <span>{{ site[3].name }}</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import "./assets/iconfont/iconfont.css";
export default {
    name: "app",
    data() {
        return {
            site: [
                { name: "首页", highLight: true },
                { name: "社区", highLight: false },
                { name: "通知", highLight: false },
                { name: "我的", highLight: false }
            ]
        };
    }
};
</script>

<style lang="less">
body {
    margin: 0;
    background: #fff;
}
a {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-user-select: none;
    -moz-user-focus: none;
    -moz-user-select: none;
}
#app {
    .item {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: 99;

        ul {
            padding: 0;
            margin: 0;
            overflow: hidden;
            background: #f1f1f1;

            li {
                padding: 7px 0;
                list-style: none;
                float: left;
                width: 20%;
                text-align: center;
                background: #f1f1f1;

                a {
                    text-decoration: none;
                    color: #303030;

                    i {
                        font-size: 20px;
                    }

                    span {
                        display: block;
                        font-size: 8px;
                    }
                }
            }
            li.special {
                position: relative;
                height: 100%;
                padding-top: 15px;

                i {
                    font-size: 20px;
                }
            }
        }
    }
}
</style>
