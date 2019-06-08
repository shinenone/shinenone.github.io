<template>
  <div class="particulars" v-if="videoOk">
    <div class="bg">
      <button @click="goBack()" class="goback">
        <i class="iconfont icon-icon-test7"></i>
      </button>
      <div class="video-play" v-if="isrefresh">
        <video controls preload="auto" :poster="videoData.coverForDetail">
          <source :src="videoData.playUrl" />
        </video>
      </div>

      <div class="text">
        <h4>{{ videoData.title }}</h4>
        <span>#{{ videoData.category }}</span>
        <span v-if="videoData.author.description !== null">/</span>
        <span v-if="videoData.author.description !== null">开眼精选</span>

        <p>{{ videoData.description }}</p>
        <p
          class="descriptionPgc"
          v-if="
            videoData.descriptionPgc &&
              videoData.description !== videoData.descriptionPgc
          "
        >
          {{ videoData.descriptionPgc }}
        </p>
      </div>

      <div class="interaction">
        <div class="interaction-item">
          <i class="iconfont icon-icon-test4"></i>
          <span>{{ videoData.consumption.collectionCount }}</span>
        </div>
        <div class="interaction-item">
          <i class="iconfont icon-icon-test2"></i>
          <span>{{ videoData.consumption.shareCount }}</span>
        </div>
        <div class="interaction-item">
          <i class="iconfont icon-icon-test"></i>
          <span>{{ videoData.consumption.replyCount }}</span>
        </div>
        <div class="interaction-item">
          <i class="iconfont icon-icon-test3"></i>
          <span>缓存</span>
        </div>
      </div>

      <!-- 发布者信息 -->
      <div class="author-message">
        <div class="portrait">
          <img :src="videoData.author.icon" />
        </div>
        <div class="message">
          <h5>{{ videoData.author.name }}</h5>
          <div class="description">
            <span>{{ videoData.author.description }}</span>
          </div>
        </div>
        <div class="attention">
          <button>+关注</button>
        </div>
      </div>

      <!-- 相关推荐 -->
      <div class="recommendation">
        <div v-for="(item, index) in recommendData" :key="index">
          <div class="recommendation-title" v-if="item.type === 'textCard'">
            <span>{{ item.data.text }}</span>
          </div>

          <div
            @click="goNewVideoPlay(item.data.id)"
            v-if="item.type === 'videoSmallCard'"
          >
            <VideoSmallCard :item="item"></VideoSmallCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VideoSmallCard from "@/components/VideoSmallCard.vue";

export default {
  name: "particulars",
  components: {
    VideoSmallCard
  },
  data() {
    return {
      videoData: null,
      playInfo: null,
      recommendData: [],
      videoOk: false,
      isrefresh: true
    };
  },
  created() {
    this.getNewData();
  },
  methods: {
    goBack: function() {
      this.$router.push({ name: "home-recommend" });
    },
    goNewVideoPlay: function(i) {
      this.$router.push({ name: "particulars", params: { id: i } });
    },
    getNewData: function() {
      axios
        .get(
          "https://baobab.kaiyanapp.com/api/v1/video/" + this.$route.params.id
        )
        .then(result => {
          this.videoData = result.data;
        })
        // .catch(err => {
        //   console.error(err);
        // });

      axios
        .get(
          "https://baobab.kaiyanapp.com/api/v4/video/related?id=" +
            this.$route.params.id +
            "&f=iphone&vc=4800&udid="
        )
        .then(result => {
          this.recommendData = result.data.itemList;
          this.videoOk = true;
          this.isrefresh = true;
        })
        .then(() => {
          document.querySelectorAll(".bg")[0].style.paddingTop =
            document.querySelectorAll(".video-play")[0].offsetHeight + "px";
          document.querySelectorAll(".particulars")[0].style.backgroundImage =
            "url(" + this.videoData.coverBlurred + ")";
        })
        .catch(err => {
          this.videoOk = true;
          this.isrefresh = true;
        });
    }
  },
  watch: {
    $route() {
      this.isrefresh = false;
      this.getNewData();
    }
  }
};
</script>

<style lang="less">
@grayFontColor: #dcdcdc;
.particulars {
  background: rgb(77, 118, 118);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;

  .bg {
    background: rgba(0, 0, 0, 0.65);
    padding-bottom: 50px;

    .goback {
      background: none;
      border: none;
      position: fixed;
      top: 5px;
      left: 5px;
      z-index: 999;
      outline: none;
      background: #2a2a2a;
      border-radius: 50%;
      padding: 3.6px 5px;
      i {
        color: #fff;
        font-size: 18px;
        font-weight: bold;
      }
    }
    .video-play {
      background: #000;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 99;
      video {
        width: 100%;
        display: block;
      }
    }
    .text {
      margin: 10px 0;
      padding: 0 15px;
      h4 {
        margin: 0;
        color: white;
        font-size: 15px;
      }
      span {
        font-size: 13px;
        line-height: 30px;
        color: @grayFontColor;
        margin-right: 5px;
      }
      p {
        margin: 0;
        color: @grayFontColor;
        text-align: justify;
        font-size: 13px;
      }
      p.descriptionPgc {
        margin-top: 10px;
        padding: 10px 0;
        border-top: 1px solid rgb(64, 64, 64);
      }
    }
    .interaction {
      width: 92%;
      height: 30px;
      margin: 0 auto;
      overflow: hidden;
      padding-bottom: 15px;

      .interaction-item {
        width: 25%;
        height: 30px;
        float: left;
        i {
          font-size: 18px;
          font-weight: bold;
          padding: 0 5px;
          color: #fff;
          line-height: 30px;
        }
        span {
          padding: 0 5px;
          font-size: 13px;
          color: @grayFontColor;
          line-height: 30px;
        }
      }
    }

    .author-message {
      overflow: hidden;
      border-top: 1px solid rgb(64, 64, 64);
      border-bottom: 1px solid rgb(64, 64, 64);
      padding: 15px;
      position: relative;

      .portrait {
        width: 15%;
        float: left;
        background: lightcoral;

        img {
          width: 100%;
          display: block;
          border-radius: 50%;
        }
      }
      .message {
        box-sizing: border-box;
        float: left;
        width: 67%;
        padding-left: 15px;
        padding-top: 5px;
        h5 {
          margin: 0;
          color: white;
          font-size: 14px;
          line-height: 20px;
        }
        .description {
          height: 20px;
          overflow: hidden;
          span {
            color: @grayFontColor;
            font-size: 12px;
            line-height: 20px;
          }
        }
      }
      .attention {
        position: absolute;
        width: 45px;
        height: 22px;
        right: 15px;
        top: 50%;
        margin-top: -11px;

        button {
          border: 1px solid #fff;
          border-radius: 4px;
          color: #fff;
          font-size: 10px;
          padding: 3px 5px;
          z-index: 9;
          background: none;
          outline: none;
        }
      }
    }

    .recommendation {
      padding: 20px 15px;

      .recommendation-title {
        padding: 5px 0;
        span {
          font-size: 14px;
          color: #fff;
        }
      }

      .video-small-card {
        .card-title p {
          color: #fff;
        }
        .card-label span {
          color: @grayFontColor;
        }
        .share {
          color: @grayFontColor;
        }
      }
    }
  }
}
</style>
