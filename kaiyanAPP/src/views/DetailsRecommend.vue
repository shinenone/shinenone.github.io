<template>
  <div class="details-recommend">
    <div class="update">
      <h3>最近更新</h3>
      <DetailsCard
        v-for="(item, index) in DetailsData"
        :key="index"
        :item="item"
      ></DetailsCard>
    </div>
  </div>
</template>

<script>
import DetailsCard from "@/components/DetailsCard.vue";
export default {
  name: "details-recommend",
  components: {
    DetailsCard
  },
  data() {
    return {
      DetailsData: null
    };
  },
  created() {
    axios
      .get(
        "https://api.apiopen.top/videoCategoryDetails?id=" +
          this.$route.params.id
      )
      .then(result => {
        this.DetailsData = result.data.result;
      })
      .catch(err => {
        console.error(err);
      });
  }
};
</script>

<style lang="less">
.details-recommend {
  padding: 0 15px 30px 15px;

  .update {
    h3 {
      margin: 0;
      margin-top: 15px;
    }
  }
}
</style>
