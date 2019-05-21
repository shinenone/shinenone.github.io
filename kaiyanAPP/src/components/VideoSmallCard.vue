<template>
  <div class="video-small-card">
    <div class="card-image">
      <img v-bind:src="item.data.cover.detail" />
    </div>

    <div class="card-message">
      <div class="card-title">
        <p>{{ item.data.title }}</p>
      </div>

      <div class="card-label">
        <span v-if="item.data.category">#{{ item.data.category }}</span>
        <span v-if="item.data.author.name && item.data.author.name !== 'null'"
          >/</span
        >
        <span
          v-if="item.data.author.name && item.data.author.name !== 'null'"
          class="sift"
          >{{ item.data.author.name }}</span
        >

        <div class="share">
          <a><i class="iconfont icon-icon-test2"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoSmallCard",
  props: ["item"],
  data() {
    return {};
  },
  methods: {
    // goNew: function() {
    //     console.log("xxx");
    // }
  }
};
</script>

<style lang="less">
.video-small-card {
  overflow: hidden;
  padding: 10px 0;
  position: relative;

  .card-image {
    width: 50%;
    float: left;
    border-radius: 5px;
    overflow: hidden;

    img {
      width: 100%;
      display: block;
    }
  }
  .card-message {
    width: 50%;
    padding: 15px 0 10px 10px;
    box-sizing: border-box;
    position: absolute;
    height: 100%;
    top: 0;
    right: 0;

    .card-title {
      position: absolute;
      height: 50%;
      p {
        margin: 0;
        font-size: 14px;
      }
    }

    .card-label {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 25%;
      padding-bottom: 10px;

      span {
        font-size: 13px;
        margin-right: 5px;
        line-height: 20px;
      }

      span.sift {
        display: inline-block;
        padding-top: 1px;
        width: 40%;
        height: 21px;
        overflow: hidden;
        vertical-align: top;
      }

      .share {
        width: 20%;
        position: absolute;
        right: 0;
        bottom: 17px;

        a {
          font-size: 12px;
          line-height: 20px;
        }
      }
    }
  }
}
</style>
