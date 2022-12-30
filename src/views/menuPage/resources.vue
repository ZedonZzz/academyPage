<template>
  <div class="main">
    <div class="weight">
      <div class="title">
        <span>权重下载</span>
      </div>
      <div class="list">
        <div class="item">
          <span>1. weights of YOLO4 trained based on SIXray data set can be downloaded here
          </span>
        </div>
      </div>
      <div class="pagination">
        <el-pagination
          layout="prev, pager, next"
          :total="50"
          page-size="10"
          background
          small
        >
        </el-pagination>
      </div>
    </div>
    <div class="data-set">
      <div class="title">
        <span>数据集下载</span>
      </div>
      <div class="list">
      </div>
      <div class="pagination">
        <el-pagination
          layout="prev, pager, next"
          :total="50"
          background
          small
        >
        </el-pagination>
      </div>
    </div>
    <div class="article">
      <div class="title">
        <span>优秀文章分享</span>
      </div>
      <div class="list">
      </div>
      <div class="pagination">
        <el-pagination
          layout="prev, pager, next"
          :total="50"
          background
          small
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.main {
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  .title {
    font-size: 20px;
    border-bottom: 1px solid #cecece;
    height: 35px;
  }
  .weight,
  .data-set,
  .article {
    width: 800px;
    height: 250px;
    .list {
      height: 180px;
      .item {
        color: #101010;
        font-size: 14px;
        margin-top: 10px;
      }
    }
    .pagination {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
  .weight {
    margin-top: 20px;
  }
}
</style>