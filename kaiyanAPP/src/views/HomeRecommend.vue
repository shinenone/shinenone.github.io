<template>
    <div class="home-recommend" v-if="toLoad">
        <div class="loading" v-if="loading">
            <svg
                version="1.1"
                id="loader-1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="40px"
                height="40px"
                viewBox="0 0 50 50"
                style="enable-background:new 0 0 50 50;"
                xml:space="preserve"
            >
                <path
                    fill="#000"
                    d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"
                    transform="rotate(138.704 25 25)"
                >
                    <animateTransform
                        attributeType="xml"
                        attributeName="transform"
                        type="rotate"
                        from="0 25 25"
                        to="360 25 25"
                        dur="0.6s"
                        repeatCount="indefinite"
                    ></animateTransform>
                </path>
            </svg>
            <p>{{ loadingText }}</p>
        </div>
        <div class="compile-choiceness">
            <div class="top">
                <div class="text">
                    <h5>{{ titleData.subTitle }}</h5>
                    <h2>{{ titleData.title }}</h2>
                </div>
                <router-link to="home-daily">{{ titleData.rightText }} ></router-link>
            </div>

            <div class="content">
                <swiper :options="swiperOption">
                    <swiper-slide v-for="(item, index) in recommend" :key="index">
                        <VideoCard :item="item"></VideoCard>
                    </swiper-slide>
                </swiper>
            </div>
        </div>

        <div class="view">
            <div v-for="(item, index) in viewData" :key="index">
                <div class="text-card" v-if="item.type === 'textCard'">
                    <h3>{{ item.data.text }}</h3>
                    <span>
                        <i class="iconfont icon-icon-test9"></i>
                    </span>
                </div>

                <div class="follow-card" v-if="item.type === 'followCard'">
                    <VideoFollowCard :item="item.data.content"></VideoFollowCard>
                </div>

                <div class="banner-card" v-if="item.type === 'banner'">
                    <img :src="item.data.image" style="width: 100%">
                </div>

                <div class="view-video-card" v-if="item.type === 'videoSmallCard'">
                    <div @click="goNewVideoPlay(item.data.id)">
                        <VideoSmallCard :item="item"></VideoSmallCard>
                    </div>
                </div>

                <div class="banner-two-card" v-if="item.type === 'banner2'">
                    <img :src="item.data.image">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VideoCard from "@/components/VideoCard.vue";
import VideoSmallCard from "@/components/VideoSmallCard.vue";
import VideoFollowCard from "@/components/VideoFollowCard.vue";
import recommendData from "@/assets/recommendData.json";
import cardData from "@/assets/cardData.json";

export default {
    name: "home-recommend",
    components: {
        VideoCard,
        VideoSmallCard,
        VideoFollowCard
    },
    data() {
        return {
            recommend: null,
            titleData: null,
            swiperOption: {
                slidesPerView: 1.1, //一个slider容器容纳1.1个slider熟练
                spaceBetween: 5, //slider之间的间距
                slidesOffsetBefore: 15, //slider与左边框的预设偏移量
                slidesOffsetAfter: 15 //slider与右边框的预设偏移量
            },
            viewData: [],
            toLoad: false,
            loading: true,
            loadingText: '正在加载中'
        };
    },
    created() {
        axios
            .get(
                "https://baobab.kaiyanapp.com/api/v1/feed?udid=3e7ee30c6fc0004a773dc33b0597b5732b145c04"
            )
            .then(result => {
                this.recommend = result.data.dailyList[0].videoList;
                this.toLoad = true;
                this.loading = false;
            })
            .catch(err => {
                this.recommend = recommendData.dailyList[0].videoList;
                this.toLoad = true;
                this.loading = false;
            });

        axios
            .get(
                "http://api.kele8.cn/agent?url=http://baobab.kaiyanapp.com/api/v5/index/tab/allRec?page=0"
            )
            .then(result => {
                for (let i = 0; i < result.data.itemList.length; i++) {
                    if (i != 0) {
                        this.viewData.push(result.data.itemList[i]);
                    } else {
                        this.titleData = result.data.itemList[i].data.header;
                    }
                }
                this.toLoad = true;
                this.loading = false;
            })
            .catch(err => {
                for (let i = 0; i < cardData.itemList.length; i++) {
                    if (i != 0) {
                        this.viewData.push(cardData.itemList[i]);
                    } else {
                        this.titleData = cardData.itemList[i].data.header;
                    }
                }
                this.toLoad = true;
                this.loading = false;
            });
    },
    methods: {
        goNewVideoPlay: function(i) {
            this.$router.push({ name: "particulars", params: { id: i } });
        }
    }
};
</script>

<style lang="less">
.padLeftRight() {
    padding-left: 15px;
    padding-right: 15px;
}
.loading {
    position: absolute;
    top: 90px;
    left: 0;
    text-align: center;
    width: 100%;
    p {
        font-size: 14px;
        color: #9b9b9b;
    }
}
.home-recommend {
    padding-top: 40px;
    padding-bottom: 100px;
    .compile-choiceness {
        padding-top: 20px;

        .top {
            overflow: hidden;
            padding-bottom: 10px;
            .padLeftRight();

            .text {
                float: left;
                h2,
                h5 {
                    margin: 0;
                }
                h5 {
                    text-transform: uppercase;
                    font-size: 12px;
                    color: #858585;
                }
            }

            a {
                text-decoration: none;
                float: right;
                margin-top: 25px;
                font-size: 14px;
                color: rgb(0, 85, 255);
            }
        }
    }

    .view {
        .padLeftRight();
        padding-top: 15px;

        .text-card {
            padding: 15px 0;
            h3 {
                margin: 0;
                display: inline-block;
                line-height: 25px;
            }
            span {
                font-size: 14px;
                margin-left: 5px;
                line-height: 25px;
                display: inline-block;
                color: #858585;
            }
        }

        .follow-card {
            img {
                width: 100%;
                display: block;
            }
            .share a {
                color: #858585;
            }
        }

        .banner-two-card {
            padding: 10px 0;
            border-top: 1px solid #eee;
            border-bottom: 1px solid #eee;

            img {
                width: 100%;
                display: block;
            }
        }

        .view-video-card {
            span,
            a {
                color: #858585;
            }
        }
    }
}
</style>
