<template>
  <div class="video-card">
    <router-link :to="'particulars/' + item.id">
      <img :src="item.coverForFeed" />
    </router-link>

    <div class="author">
      <div class="author-photo">
        <img :src="item.author.icon" class="author" />
      </div>

      <div class="author-message">
        <div class="author-title">
          <h4>{{ item.title }}</h4>
        </div>
        <span>{{ item.slogan }}</span>
      </div>

      <div class="share">
        <a><i class="iconfont icon-icon-test2"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoCard",
  props: ["item"]
};
</script>

<style lang="less">
.video-card {
  a {
    display: block;
  }
  img {
    width: 100%;
    display: block;
  }

  .author {
    overflow: hidden;
    padding: 10px 0;

    .author-photo {
      width: 13%;
      float: left;
      img {
        display: block;
        border-radius: 50%;
        padding: 0;
        margin: 0;
      }
    }
    .author-message {
      width: 67%;
      padding-left: 15px;
      float: left;

      .author-title {
        width: 100%;
        overflow: hidden;
        height: 20px;
        padding: 2px 0;

        h4 {
          font-size: 14px;
          line-height: 20px;
          margin: 0;
        }
      }

      span {
        font-size: 13px;
        margin: 0;
        line-height: 20px;
        color: #6e6e6e;
      }
    }

    .share {
      width: 10%;
      float: right;
      a {
        line-height: 48px;
        font-size: 12px;
      }
    }
  }
}
</style>
