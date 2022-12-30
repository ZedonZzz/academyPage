<template>
  <div class="main">
    <el-container>
      <el-aside width="260px">
        <div class="avatar">
          <el-image></el-image>
        </div>
        <div class="info">
          <div class="name">
            <span>姓名</span>
          </div>
          <div class="detail">
            <span>文字简介</span>
          </div>
        </div>
        <div class="menu">
          <el-menu
            :default-active=this.$store.state.pageIndex
            background-color="#eeeeee"
            router
          >
            <el-menu-item index="home">
              <i class="el-icon-s-home"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="results">
              <i class="el-icon-s-flag"></i>
              <span slot="title">科研成果</span>
            </el-menu-item>
            <el-menu-item index="resources">
              <i class="el-icon-download"></i>
              <span slot="title">资源</span>
            </el-menu-item>
            <el-menu-item index="about">
              <i class="el-icon-s-comment"></i>
              <span slot="title">联系我们</span>
            </el-menu-item>
          </el-menu>
        </div>
      </el-aside>
      <el-container>
        <el-header height="45px">
          <div
            class="search"
            @click="inputClick"
            :style="{backgroundColor: inputStatus? 'white':'#eeeeee'}"
          >
            <div class="icon">
              <i class="el-icon-search"></i>
            </div>
            <div class="input">
              <input
                v-if="inputStatus"
                ref="iptRef"
                class="searchInput"
                type="text"
                @blur="inputBlur"
              >
            </div>
          </div>
        </el-header>
        <el-main ref="main">
          <div class="router-view">
            <transition
              name="fade-transform"
              mode="out-in"
            >
              <router-view></router-view>
            </transition>
            <div class="foot">
              <div class="box">
                <span>粤ICP备2020124257号-1</span>
              </div>
            </div>
          </div>
          <div class="infw">
            <div class="latest">
              <div class="title">
                <span>最近更新</span>
              </div>
              <div class="list">
                <div class="item">
                  <span>实时动态更新文字1</span>
                </div>
              </div>
            </div>
            <div class="infd">
              <div class="user-num">
                <div class="title">
                  <span>访客数量:</span>
                </div>
              </div>
              <div class="visit-num">
                <div class="title">
                  <span>访问次数:</span>
                </div>
              </div>
              <div class="latest-visit">
                <div class="title">
                  <span>最近访问时间:</span>
                </div>
              </div>
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputStatus: false,
    }
  },
  methods: {
    inputClick() {
      this.inputStatus = true
      this.$nextTick(() => {
        this.$refs.iptRef.focus()
      })
    },
    inputBlur() {
      this.inputStatus = false
    },
  },
  beforeRouteUpdate(to, from, next) {
    next()
    document.getElementsByClassName('el-main')[0].scrollTop = 0
  },
}
</script>

<style lang="scss" scoped>
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.main {
  .el-container {
    height: 100%;
  }
  .el-aside {
    background-color: #eeeeee;
  }
  .el-header {
    padding: 0;
    margin: 0;
    border-bottom: 1px solid #cecece;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .search {
      width: 189px;
      height: 32px;
      border-radius: 20px;
      margin-right: 100px;
      display: flex;
      align-items: center;
      border: 2px solid #eeeeee;
      transition: background-color 0.5s;
      .icon {
        margin-left: 10px;
      }
      .input {
        .searchInput {
          width: 150px;
          border: 0;
          background-color: #eeeeee;
          outline: none;
          transition: background-color 0.5s;
        }
        .searchInput:focus {
          background-color: white;
        }
      }
    }
  }
  .el-main {
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    height: 2000px;
    .infw {
      width: 295px;
      height: 700px;
      display: flex;
      flex-direction: column;
      .infd {
        display: flex;
        justify-content: center;
        flex-direction: column;
        color: #666666;
        font-size: 14px;
      }
      .latest,
      .infd {
        width: 293px;
        height: 927px;
        flex: auto;
        border-left: 2px solid;
        border-image: linear-gradient(
            0deg,
            #ffffff 0%,
            #cecece 50%,
            #ffffff 100%
          )
          2 2 2 2;
        .title {
          margin-left: 30px;
          margin-top: 10px;
          color: #101010;
        }
        .list {
          margin-left: 30px;
          margin-top: 25px;
          font-size: 14px;
          color: #606060;
          .item {
            cursor: pointer;
            margin-top: 10px;
            &:hover {
              color: #2a408e;
            }
          }
        }
      }
    }
    .router-view {
      height: 100%;
      flex: 1;
      .foot {
        height: 50px;
        display: flex;
        width: 100%;
        font-size: 12px;
        color: #8475a7;
        justify-content: center;
        .box {
          height: 100%;
          display: flex;
          align-items: center;
          width: 700px;
        }
      }
    }
  }
  .avatar {
    width: 100%;
    margin-top: 44px;
    .el-image {
      width: 140px;
      height: 140px;
      border-radius: 50%;
      margin-left: 43px;
    }
  }
  .info {
    margin-left: 75px;
    .name {
      font-size: 36px;
      color: #6c6c6c;
      margin-top: 13px;
    }
    .detail {
      color: #a3a3b8;
      font-size: 16px;
      letter-spacing: 6px;
      margin-top: 13px;
    }
  }
  .menu {
    margin-left: 75px;
    margin-top: 70px;
    .el-menu {
      border: 0;
      .el-menu-item {
        padding: 0 !important;
        font-size: 18px;
        height: 65px;
      }
      .el-menu-item:hover {
        background-color: rgba(247, 247, 247, 0) !important;
      }
      :deep(.is-active) {
        background-color: rgba(255, 255, 255, 0) !important;
        border-right: 2px solid #409eff;
        // box-sizing: border-box;
      }
    }
  }
}
</style>