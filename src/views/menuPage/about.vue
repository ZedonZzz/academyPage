<template>
  <div class="main">
    <div class="team-img">

    </div>
    <div class="info">
      <div class="phone">
        <div class="icon">
          <i class="el-icon-phone"></i>
        </div>
        <div class="content">
          <div class="title">
            <span>Phone</span>
          </div>
          <div class="text">
            <span>13243000000</span>
          </div>
        </div>
      </div>
      <div class="email">
        <div class="icon">
          <i class="el-icon-message"></i>
        </div>
        <div class="content">
          <div class="title">
            <span>Email</span>
          </div>
          <div class="text">
            <span>1008611111@qq.com</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  .team-img {
    width: 600px;
    height: 340px;
    background-color: antiquewhite;
    margin-top: 21px;
  }
  .info {
    width: 470px;
    justify-content: space-between;
    display: flex;
    margin-top: 100px;
    .icon {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: #1990ff;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 17px;
      i {
        color: white;
        font-size: 19px;
      }
    }
    .email,
    .phone {
      display: flex;
      .content {
        height: 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 14px;
      }
    }
  }
}
</style>