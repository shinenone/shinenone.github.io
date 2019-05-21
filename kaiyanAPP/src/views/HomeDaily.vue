<template>
    <div class="home-daily" v-if="videoOk">
        <div class="day">
            <div v-for="(item, index) in beforeData" :key="index">
                <div class="title" v-if="item.type == 'textCard'">
                    <h3>{{ item.data.text }}</h3>
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
            videoOk: false
        };
    },
    created() {
        axios
            .get(
                "http://api.kele8.cn/agent?url=http://baobab.kaiyanapp.com/api/v5/index/tab/feed"
            )
            .then(result => {
                this.beforeData = result.data.itemList;
                this.videoOk = true;
            })
            .catch(err => {
                console.error(err);
                this.videoOk = true;
                this.beforeData = homeDailyData.itemList;
            });
    }
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
}
</style>
