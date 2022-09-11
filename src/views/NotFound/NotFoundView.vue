<template>
  <div class="notFound">
    <van-nav-bar title="404" />
    <h2>页面不存在</h2>
    <router-link to="/home">返回主页</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFoundView'
}
</script>

<style scoped lang="less">
.notFound {
  text-align: center;
}
</style>
