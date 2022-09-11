<template>
  <div class="user-container">
    <van-notice-bar left-icon="volume-o" scrollable text="这就是一个不完整的项目！" />

    <div class="uHeader">
      <van-image round width="10rem" height="10rem" fit="cover" src="">
        <template v-slot:loading>
          <van-loading type="spinner" size="20" />
        </template>
      </van-image>
      <div class="uname">uname</div>
      <div class="tag">
        <ul>
          <li>关注</li>
          <li>动态</li>
          <li>粉丝</li>
        </ul>
      </div>
    </div>

    <div class="middle">
      <ul>
        <li @click="notFound"><van-icon name="edit" /><span>编辑资料</span><van-icon name="arrow" /></li>
        <li @click="notFound"><van-icon name="comment-circle-o" /><span>在线客服</span><van-icon name="arrow" /></li>
        <li @click="loginOut"><van-icon name="setting-o" /><span>退出登录</span><van-icon name="arrow" /></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserView',
  methods: {
    loginOut() {
      this.$toast.success('退出登录')
      // 清空 token
      localStorage.removeItem('token')

      // 跳转页面
      this.$router.replace('/login')
    },
    notFound() {
      this.$toast('没有开发这个功能')
    }
  }
}
</script>

<style lang="less" scoped>
.user-container {
  .uHeader {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
    background-color: #1989fa;

    .uname {
      margin-top: 5px;
      font-size: 30px;
      color: white;
    }

    .tag {
      width: 100%;
      padding: 10px 0;

      ul {
        display: flex;
        justify-content: space-around;
        color: white;
      }
    }
  }

  .middle {
    ul {
      display: flex;
      flex-direction: column;
      padding: 10px;

      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        border-bottom: 1px solid #ebedf0;
        height: 30px;

        .van-icon {
          font-size: 30px;
        }

        span {
          flex: 1;
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
