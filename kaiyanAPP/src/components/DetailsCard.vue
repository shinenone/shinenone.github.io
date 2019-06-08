<template>
    <div class="details-card">
        <div class="author">
            <div class="author-portrait">
                <img :src="item.data.content.data.author.icon">
            </div>

            <div class="author-message">
                <div class="author-name">
                    <p>{{ item.data.content.data.author.name }}</p>
                </div>
                <div class="author-title">
                    <p>发布:</p>
                    <p>{{ item.data.content.data.title }}</p>
                </div>
            </div>
        </div>
        <div class="video-label">
            <div class="video-comment">
                <p>{{ item.data.content.data.description }}</p>
            </div>
            <div class="label">
                <span
                    v-for="(items, index) in item.data.content.data.tags"
                    :key="index"
                >{{ items.name }}</span>
            </div>
        </div>
        <div class="video">
            <video controls preload="none" :poster="item.data.content.data.cover.feed">
                <source :src="item.data.content.data.playUrl">
            </video>
        </div>
        <div class="interact">
            <div class="like">
                <span>
                    <i class="iconfont icon-icon-test4"></i>
                    {{ item.data.content.data.consumption.shareCount }}
                </span>
            </div>
            <div class="comment">
                <span>
                    <i class="iconfont icon-icon-test"></i>
                    {{ item.data.content.data.consumption.replyCount }}
                </span>
            </div>
            <div class="time">
                <span>{{ Math.floor(item.data.content.data.duration/60) }}</span>
                <span>:</span>
                <span
                    v-if="item.data.content.data.duration - Math.floor(item.data.content.data.duration/60)*60 < 10"
                >0</span>
                <span>{{ item.data.content.data.duration - Math.floor(item.data.content.data.duration/60)*60 }}</span>
            </div>
            <div class="share">
                <span>
                    <i class="iconfont icon-icon-test2"></i>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "details-card",
    props: ["item"],
    data() {
        return {};
    }
};
</script>

<style lang="less">
.button() {
    color: rgb(154, 154, 154);
    i {
        font-size: 15px;
        font-weight: bold;
        padding-left: 3px;
        padding-right: 5px;
    }
    span {
        font-size: 13px;
    }
}
.details-card {
    padding-top: 25px;
    padding-bottom: 15px;
    border-bottom: 1px solid rgb(238, 238, 238);

    .author {
        overflow: hidden;

        .author-portrait {
            width: 13%;
            float: left;
            img {
                width: 100%;
                display: block;
                border-radius: 50%;
            }
        }

        .author-message {
            width: 87%;
            float: left;
            box-sizing: border-box;
            padding-left: 15px;

            .author-name {
                height: 18px;
                overflow: hidden;
                p {
                    font-size: 14px;
                    font-weight: bold;
                    margin: 0;
                    line-height: 18px;
                }
            }

            .author-title {
                overflow: hidden;
                height: 25px;
                p {
                    margin: 5px 0 0 0;
                    float: left;
                    line-height: 20px;
                    font-size: 13px;

                    &:first-child {
                        color: rgb(137, 137, 137);
                        width: 15%;
                    }

                    &:last-child {
                        color: #000;
                        width: 70%;
                        font-weight: bold;
                    }
                }
            }
        }
    }

    .video-label {
        padding: 5px 0;
        .video-comment {
            p {
                margin: 0;
                font-size: 13px;
                color: #000;
                text-align: justify;
            }
        }
        .label {
            padding: 10px 0;
            span {
                font-size: 13px;
                color: rgb(0, 149, 255);
                padding: 3px 5px;
                margin-right: 6px;
                background: rgb(204, 237, 253);
                border-radius: 3px;
            }
        }
    }

    .video {
        video {
            width: 100%;
        }
    }

    .interact {
        overflow: hidden;
        padding: 10px 0;
        .like {
            width: 30%;
            float: left;
            .button();
        }
        .comment {
            width: 30%;
            float: left;
            .button();
        }
        .time {
            width: 30%;
            float: left;
            .button();
        }
        .share {
            width: 10%;
            float: left;
            .button();
        }
    }
}
</style>
