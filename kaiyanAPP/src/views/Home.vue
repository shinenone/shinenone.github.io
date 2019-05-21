<template>
    <div class="home">
        <div class="nav">
            <div class="nav-item">
                <router-link
                    v-for="(item, index) in tabs"
                    :key="index"
                    :to="item.name"
                    class="tab-item"
                >{{ item.title }}</router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "home",
    data() {
        return {
            tabs: [
                { title: "发现", name: "home-discover" },
                { title: "推荐", name: "home-recommend" },
                { title: "日报", name: "home-daily" }
            ]
        };
    }
};
</script>

<style lang="less">
.home {
    .nav {
        background: #f8f8f8;
        border-bottom: 1px solid #f4f4f4;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 99;

        .nav-item {
            width: 60%;
            margin: 0 auto;
            overflow: hidden;
            .tab-item {
                line-height: 45px;
                font-size: 12px;
                display: block;
                width: 33.3333%;
                float: left;
                text-align: center;
                text-decoration: none;
                color: #9b9b9b;
                font-weight: bold;

                &.router-link-active {
                    position: relative;
                    color: #303030;

                    &::after {
                        content: "";
                        display: block;
                        width: 12px;
                        height: 3px;
                        background: #303030;
                        position: absolute;
                        bottom: 5px;
                        left: 50%;
                        margin-left: -6px;
                    }
                }
            }
        }
    }
}
</style>
