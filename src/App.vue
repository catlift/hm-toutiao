<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>

    <van-tabbar route active-color="#ee0a24" inactive-color="#000">
      <van-tabbar-item replace to="/home" icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item replace to="/user" icon="user-circle-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
#app {
  // /deep/ .van-nav-bar {
  //   background-color: #1989fa;

  //   .van-nav-bar__left * {
  //     color: white;
  //   }

  //   .van-nav-bar__title {
  //     color: white;
  //   }
  // }

  /deep/ .van-tabbar-item {
    // background-color: #1989fa;
  }
}
</style>
