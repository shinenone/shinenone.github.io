<template>
    <div class="home-daily" v-if="videoOk">
        <div class="canvas" v-if="loading">
            <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="24px"
                height="30px"
                viewBox="0 0 24 30"
                style="enable-background:new 0 0 50 50;"
                xml:space="preserve">
                <rect x="0" y="6.3264" width="4" height="17.3472" fill="#333" opacity="0.2">
                    <animate
                        attributeName="opacity"
                        attributeType="XML"
                        values="0.2; 1; .2"
                        begin="0s"
                        dur="0.6s"
                        repeatCount="indefinite"
                    ></animate>
                    <animate
                        attributeName="height"
                        attributeType="XML"
                        values="10; 20; 10"
                        begin="0s"
                        dur="0.6s"
                        repeatCount="indefinite"
                    ></animate>
                    <animate
                        attributeName="y"
                        attributeType="XML"
                        values="10; 5; 10"
                        begin="0s"
                        dur="0.6s"
                        repeatCount="indefinite"
                    ></animate>
                </rect>
                <rect x="8" y="6.1736" width="4" height="17.6528" fill="#333" opacity="0.2">
                    <animate
                        attributeName="opacity"
                        attributeType="XML"
                        values="0.2; 1; .2"
                        begin="0.15s"
                        dur="0.6s"
                        repeatCount="indefinite"
                    ></animate>
                    <animate
                        attributeName="height"
                        attributeType="XML"
                        values="10; 20; 10"
                        begin="0.15s"
                        dur="0.6s"
                        repeatCount="indefinite"
                    ></animate>
                    <animate
                        attributeName="y"
                        attributeType="XML"
                        values="10; 5; 10"
                        begin="0.15s"
                        dur="0.6s"
                        repeatCount="indefinite"
                    ></animate>
                </rect>
                <rect x="16" y="8.6736" width="4" height="12.6528" fill="#333" opacity="0.2">
                    <animate
                        attributeName="opacity"
                        attributeType="XML"
                        values="0.2; 1; .2"
                        begin="0.3s"
                        dur="0.6s"
                        repeatCount="indefinite"
                    ></animate>
                    <animate
                        attributeName="height"
                        attributeType="XML"
                        values="10; 20; 10"
                        begin="0.3s"
                        dur="0.6s"
                        repeatCount="indefinite"
                    ></animate>
                    <animate
                        attributeName="y"
                        attributeType="XML"
                        values="10; 5; 10"
                        begin="0.3s"
                        dur="0.6s"
                        repeatCount="indefinite"
                    ></animate>
                </rect>
            </svg>
            <p>{{ loadingText }}</p>
        </div>
        <div class="day">
            <div v-for="(item, index) in beforeData" :key="index">
                <div class="title" v-if="item.type == 'textCard'">
                    <h3 v-if="item.data.text!== '今日社区精选'">{{ item.data.text }}</h3>
                </div>

                <div class="cards" v-if="item.type == 'followCard'">
                    <VideoDailyCard :item="item"></VideoDailyCard>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VideoCard from "@/components/VideoCard.vue";
import VideoDailyCard from "@/components/VideoDailyCard.vue";
import homeDailyData from "@/assets/homeDailyData.json";

export default {
    name: "home-daily",
    components: {
        VideoCard,
        VideoDailyCard
    },
    data() {
        return {
            beforeData: [],
            beforeDataTwo: [],
            videoOk: false,
            loading: true,
            loadingText: '加载过于缓慢'
        };
    },
    created() {
        axios
            .get(
                "http://api.kele8.cn/agent?url=http://baobab.kaiyanapp.com/api/v5/index/tab/feed"
            )
            .then(result => {
                this.beforeData = result.data.itemList;
                this.loading = false;
            })
            .catch(err => {
                console.error(err);
                this.beforeData = homeDailyData.itemList;
            });
        this.videoOk = true;
        setTimeout(() => {
            this.loadingText = '服务器过于缓慢'
        }, 7000);
    },
};
</script>

<style lang="less">
.home-daily {
    padding: 40px 10px 60px 10px;
    .day {
        .title {
            margin-top: 20px;
            h3 {
                margin: 0;
                font-size: 20px;
            }
        }
        .cards {
            padding-top: 10px;
            padding-bottom: 5px;
            border-bottom: 1px solid rgb(233, 233, 233);
        }
    }
    .canvas {
        position: absolute;
        top: 200px;
        left: 0;
        width: 100%;
        text-align: center;

        p {
            font-size: 14px;
            color: #9b9b9b;
        }
    }
}
</style>
