<template>
  <div class="video-follow-card">
    <div class="card-image">
      <router-link :to="'particulars/' + item.data.id">
        <img v-bind:src="item.data.cover.feed" />
      </router-link>
    </div>

    <div class="author">
      <div class="portrait">
        <img :src="item.data.author.icon" />
      </div>

      <div class="author-message">
        <div class="card-title">
          <h4>{{ item.data.title }}</h4>
        </div>

        <div class="card-label">
          <span>{{ item.data.author.name }}</span>
          <span v-if="item.data.category">/</span>
          <span v-if="item.data.category">#{{ item.data.category }}</span>
        </div>

        <div class="share">
          <a><i class="iconfont icon-icon-test2"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "video-follow-card",
  props: ["item"],
  data() {
    return {};
  }
};
</script>

<style lang="less">
@fontColor: #858585;

.video-follow-card {
  padding: 0 3px;
  overflow: hidden;
  .card-image {
    a {
      display: block;
    }
    img {
      width: 100%;
      display: block;
    }
  }

  .author {
    overflow: hidden;
    padding: 10px 0;

    .portrait {
      width: 15%;
      float: left;
      border-radius: 50%;
      overflow: hidden;

      img {
        width: 100%;
        display: block;
      }
    }

    .author-message {
      box-sizing: border-box;
      width: 85%;
      float: left;
      padding-left: 15px;
      position: relative;
      overflow: hidden;

      .card-title {
        width: 80%;
        overflow: hidden;
        height: 20px;
        padding: 3px;

        h4 {
          font-size: 14px;
          line-height: 20px;
          margin: 0;
        }
      }

      .card-label {
        span {
          color: #858585;
          font-size: 12px;
          margin-right: 5px;
        }
      }

      .share {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 10%;
        a {
          line-height: 48px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
