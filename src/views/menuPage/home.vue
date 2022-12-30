<template>
  <div class="main">
    <div class="swiper">
      <div class="swiper-box"></div>
    </div>
    <div class="list">
      <div
        class="item"
        v-for="i in 10"
        :key="i"
      >
        <div class="title">
          <span>标题</span>
        </div>
        <div class="content">
          <span>内容 内容内容内容内容内 容内容内容内容内容内容内容内容内容内容内内容 内容内容内容内容容
            内容内容内容内容内容内容内容内容内容内容容...</span>
        </div>
        <div class="date">
          <div class="icon">
            <i class="el-icon-date"></i>
          </div>
          <div class="text">
            <span>2022-12-06</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {},
  mounted() {},
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  .swiper {
    width: 700px;
    height: 380px;
    margin-top: 21px;
    border-bottom: 1px solid #cecece;
    display: flex;
    justify-content: center;
    .swiper-box {
      width: 600px;
      height: 340px;
      background-color: antiquewhite;
    }
  }
  .list {
    margin-top: 22px;
    width: 700px;
    .item {
      cursor: pointer;
      margin-bottom: 17px;
      border-bottom: 2px solid;
      border-image: linear-gradient(
          100deg,
          #ffffff 0%,
          #cecece 50%,
          #ffffff 100%
        )
        2 2 2 2;
      width: 100%;
      height: 140px;
      &:hover .title {
        color: #2a408e;
      }
      .title {
        font-size: 20px;
        color: #6c6c6c;
      }
      .content {
        margin-top: 18px;
        color: #9d9d9d;
        overflow: hidden;
        text-overflow: ellipsis;
        // white-space: nowrap;
      }
      .date {
        margin-top: 17px;
        display: flex;
        color: #9d9d9d;
        .text {
          margin-left: 10px;
        }
      }
    }
  }
}
</style>