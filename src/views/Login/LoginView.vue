<template>
  <div class="login-container">
    <van-nav-bar title="登录" left-text="返回" left-arrow @click-left="onClickLeft" />

    <van-form @submit="onSubmit">
      <van-field v-model="from.mobile" name="mobile" label="手机号" placeholder="请输入您的手机号" :rules="rules.moblie" />
      <van-field v-model="from.code" type="password" name="code" label="密码" placeholder="请输入您的密码" :rules="rules.code" />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      // 表单数据绑定
      from: {
        mobile: '',
        code: ''
      },
      // 定义表单中手机号和密码的规则检测
      rules: {
        // 手机号
        moblie: [
          { required: true, message: '请填写您的手机号' },
          // 11 位手机号的校验规则
          { pattern: /^1\d{10}$/, message: '请填写正确的手机号', trigger: 'onBlur' }
        ],
        // 密码
        code: [{ required: true, message: '请填写您的密码' }]
      }
    }
  },
  methods: {
    // 返回 /home
    onClickLeft() {
      this.$router.back()
    },
    // 登录提交数据
    onSubmit(values) {
      this.$toast('登录成功')

      // 存储 token，一般登录成功的话，会返回 'Bearer xxxx...', 这里就随便放一点数据
      localStorage.setItem('hm-tt-token', 'Bearer xxxx')

      // 跳转路由
      this.$router.replace('/user')
    }
    // async login() {
    //   // 还需要获取验证码
    //   const { data: res } = await this.$http.post('/v1_0/authorizations', this.from)

    //   console.log(res)
    // }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  /deep/ .van-nav-bar {
    background-color: #1989fa;

    .van-nav-bar__left * {
      color: white;
    }

    .van-nav-bar__title {
      color: white;
    }
  }
}
</style>
