<template>
  <div class="main">
    <div class="thesis">
      <div class="title">
        <span>论文</span>
      </div>
      <div class="list">
        <div
          class="year"
          v-for="i in data"
          :key="i"
        >
          <div class="content">
            <span>{{ i.year }}</span>
          </div>
          <div
            class="item"
            v-for="k in i.data"
            :key="k.title"
          >
            <span>{{ k.title }}</span>
          </div>
        </div>
      </div>
      <div class="pagination">
        <el-pagination
          layout="prev, pager, next"
          :total="50"
          page-size="10"
        >
        </el-pagination>
      </div>
    </div>
    <div class="patent">
      <div class="title">
        <span>专利</span>
      </div>
      <div class="list">
        <div
          class="year"
          v-for="i in data"
          :key="i"
        >
          <div class="content">
            <span>{{ i.year }}</span>
          </div>
          <div
            class="item"
            v-for="k in i.data"
            :key="k.title"
          >
            <span>{{ k.title }}</span>
          </div>
        </div>
      </div>
      <div class="pagination">
        <el-pagination
          layout="prev, pager, next"
          :total="50"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          year: '2022',
          data: [
            {
              title:
                '[1] Haigang Zhang, et al. Deep Learning.IEEE trans.On Cybermetics,2022[Code][PDF]',
            },
            {
              title:
                '[1] Haigang Zhang, et al. Deep Learning.IEEE trans.On Cybermetics,2022[Code][PDF]',
            },
            {
              title:
                '[1] Haigang Zhang, et al. Deep Learning.IEEE trans.On Cybermetics,2022[Code][PDF]',
            },
            {
              title:
                '[1] Haigang Zhang, et al. Deep Learning.IEEE trans.On Cybermetics,2022[Code][PDF]',
            },
            {
              title:
                '[1] Haigang Zhang, et al. Deep Learning.IEEE trans.On Cybermetics,2022[Code][PDF]',
            },
            {
              title:
                '[1] Haigang Zhang, et al. Deep Learning.IEEE trans.On Cybermetics,2022[Code][PDF]',
            },
          ],
        },
        {
          year: '2021',
          data: [
            {
              title:
                '[1] Haigang Zhang, et al. Deep Learning.IEEE trans.On Cybermetics,2022[Code][PDF]',
            },
            {
              title:
                '[1] Haigang Zhang, et al. Deep Learning.IEEE trans.On Cybermetics,2022[Code][PDF]',
            },
            {
              title:
                '[1] Haigang Zhang, et al. Deep Learning.IEEE trans.On Cybermetics,2022[Code][PDF]',
            },
            {
              title:
                '[1] Haigang Zhang, et al. Deep Learning.IEEE trans.On Cybermetics,2022[Code][PDF]',
            },
            {
              title:
                '[1] Haigang Zhang, et al. Deep Learning.IEEE trans.On Cybermetics,2022[Code][PDF]',
            },
            {
              title:
                '[1] Haigang Zhang, et al. Deep Learning.IEEE trans.On Cybermetics,2022[Code][PDF]',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  .title {
    font-size: 20px;
    border-bottom: 1px solid #cecece;
    height: 35px;
  }
  .thesis,
  .patent {
    width: 800px;
    height: 400px;
    .list {
      height: 300px;

      .year {
        margin-top: 10px;
        .content {
          color: #bababa;
          font-size: 14px;
        }
        .item {
          cursor: pointer;
          font-size: 13px;
          margin-top: 5px;
          &:hover {
            color: #2a408e;
          }
        }
      }
    }
    .pagination {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
  .thesis {
    margin-top: 20px;
  }
}
</style>