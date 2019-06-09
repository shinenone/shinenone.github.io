<template>
    <div id="home-discover">
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
            }
        };
    },
    created() {
        axios
            .get(
                "http://api.kele8.cn/agent?url=http://baobab.kaiyanapp.com/api/v5/index/tab/discovery"
            )
            .then(result => {
                this.bannerData = result.data.itemList[0].data.itemList;
            })
            .catch(err => {
                this.bannerData = banner.itemList[0].data.itemList;
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
