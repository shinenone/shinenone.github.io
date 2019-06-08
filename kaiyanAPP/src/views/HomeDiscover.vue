<template>
    <div id="home-discover">
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
                xml:space="preserve">
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

        <div class="banner">
            <swiper :options="swiperBannerOption">
                <swiper-slide v-for="(item, index) in bannerData" :key="index">
                    <img :src="item.data.image">
                </swiper-slide>
            </swiper>
        </div>

        <div class="hot-classify">
            <div class="text">
                <h5>热门分类</h5>
                <router-link to>查看全部分类 ></router-link>
            </div>
            <div class="content">
                <swiper :options="swiperClassifyOption">
                    <swiper-slide v-for="(item, index) in hotClassify" :key="index">
                        <Classify :item="item"></Classify>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
import Classify from "@/components/Classify.vue";
import DisData from "@/assets/Discover.json";
import banner from "@/assets/bannerData.json";

export default {
    name: "home-discover",
    components: {
        Classify
    },
    data() {
        return {
            bannerData: null,
            hotClassify: null,
            swiperBannerOption: {
                slidesPerView: 1.1, //一个slider容器容纳1.1个slider熟练
                spaceBetween: 5, //slider之间的间距
                slidesOffsetBefore: 15, //slider与左边框的预设偏移量
                slidesOffsetAfter: 15 //slider与右边框的预设偏移量
            },
            swiperClassifyOption: {
                slidesOffsetBefore: 15, //slider与左边框的预设偏移量
                slidesOffsetAfter: 15, //slider与右边框的预设偏移量
                slidesPerView: 3.3, //多行布局的行数
                slidesPerColumn: 2, //多行布局列数
                slidesPerColumnFill: "column", //布局方式
                freeMode: true //滑动模式
            },
            loading: true,
            loadingText: '正在加载中'
        };
    },
    created() {
        axios
            .get(
                "http://api.kele8.cn/agent?url=http://baobab.kaiyanapp.com/api/v5/index/tab/discovery"
            )
            .then(result => {
                this.bannerData = result.data.itemList[0].data.itemList;
                this.loading = false;
            })
            .catch(err => {
                this.bannerData = banner.itemList[0].data.itemList;
                this.loading = false;
            });

        axios
            .get("https://api.apiopen.top/videoCategory")
            .then(result => {
                this.hotClassify = result.data.result.itemList;
            })
            .catch(err => {
                this.hotClassify = DisData.result.itemList;
            });
    }
};
</script>

<style lang="less">
#home-discover {
    padding-top: 40px;
    padding-bottom: 40px;
    overflow: hidden;

    .loading {
        padding: 70px;
        text-align: center;
        p {
            font-size: 14px;
            color: #9b9b9b;
        }
    }

    .banner {
        overflow: hidden;
        margin: 10px 0;

        .swiper-wrapper {
            img {
                width: 100%;
                display: block;
                border-radius: 5px;
            }
        }
    }

    .hot-classify {
        .text {
            box-sizing: border-box;
            padding: 10px 15px;
            border-top: 1px solid rgb(235, 235, 235);
            width: 100%;
            overflow: hidden;

            h5 {
                margin: 0;
                font-size: 22px;
                float: left;
            }
            a {
                text-decoration: none;
                font-size: 13px;
                font-weight: bold;
                float: right;
                margin-top: 9px;
                color: rgb(0, 85, 255);
            }
        }
        .content {
            .swiper-slide {
                width: 100px;
            }
        }
    }
}
</style>
