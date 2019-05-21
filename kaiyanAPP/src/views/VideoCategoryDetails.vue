<template>
  <div class="video-category-details" v-if="toLoad">
    <div class="banner">
      <div class="text">
        <div class="button">
          <button @click="goback()" class="goback">
            <i class="iconfont icon-icon-test7"></i>
          </button>

          <button class="share">
            <i class="iconfont icon-icon-test2"></i>
          </button>
        </div>
        <div class="content">
          <div class="title">
            <h2>{{ titleData[1] }}</h2>
          </div>
          <div class="introduce">
            <span>{{ classifyData.data.description }}</span>
          </div>
          <div class="attention">
            <button>+关注</button>
          </div>
        </div>
      </div>
    </div>
    <div class="skip">
      <router-link
        :to="
          '/video-category-details/' +
            this.$route.params.id +
            '/details-recommend'
        "
        >推荐</router-link
      >
      <router-link
        :to="
          '/video-category-details/' + this.$route.params.id + '/details-square'
        "
        >广场</router-link
      >
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "video-category-details",
  data() {
    return {
      classifyData: null,
      titleData: null,
      toLoad: false
    };
  },
  created() {
    axios
      .get("https://api.apiopen.top/videoCategory")
      .then(result => {
        for (let i = 0; i < result.data.result.itemList.length; i++) {
          if (this.$route.params.id == result.data.result.itemList[i].data.id) {
            this.classifyData = result.data.result.itemList[i];
            this.titleData = this.classifyData.data.title.split("#");
          }
        }
        this.toLoad = true;
      })
      .catch(err => {
        console.error(err);
      });
  },
  methods: {
    goback: function() {
      this.$router.push({ path: "/home-discover" });
    }
  }
};
</script>

<style lang="less">
.video-category-details {
  .banner {
    position: relative;
    height: 180px;
    overflow: hidden;
    background-image: url("../assets/bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

    .text {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.35);
      color: #fff;

      .button {
        button {
          background: none;
          border: none;
          position: fixed;
          top: 10px;
          z-index: 999;
          outline: none;
          i {
            color: #000;
            font-size: 18px;
            font-weight: bold;
          }
        }

        .goback {
          border-radius: 50%;
          left: 5px;
        }

        .share {
          right: 5px;
        }
      }

      .content {
        text-align: center;
        padding-top: 30px;

        .title {
          padding: 13px 0;
          h2 {
            margin: 0;
          }
        }
        .introduce {
          span {
            font-size: 13px;
          }
        }
        .attention {
          padding: 10px 0;
          button {
            font-size: 11px;
            background: none;
            border: 1px solid #fff;
            border-radius: 4px;
            color: #fff;
            padding: 2px 12px;
          }
        }
      }
    }
  }

  .skip {
    position: sticky;
    top: 0;
    background: rgb(248, 248, 248);
    overflow: hidden;
    z-index: 9;

    a {
      text-decoration: none;
      color: rgb(68, 68, 68);
      line-height: 40px;
      display: block;
      width: 50%;
      float: left;
      text-align: center;
      font-size: 12px;
    }
  }
}
</style>
