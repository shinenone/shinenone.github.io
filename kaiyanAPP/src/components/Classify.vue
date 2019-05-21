<template>
  <div class="classify">
    <router-link :to="'video-category-details/' + item.data.id">
      <div class="bg">
        <span>{{ item.data.title }}</span>
      </div>
      <img :src="item.data.icon" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Classify",
  props: ["item"]
};
</script>

<style lang="less">
.classify {
  margin: 2px;
  position: relative;
  img {
    width: 100%;
    display: block;
    border-radius: 5px;
  }
  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
  }
  span {
    display: block;
    color: #fff;
    margin: 0 auto;
    text-align: center;
    line-height: 100px;
    font-size: 14px;
  }
}
</style>
