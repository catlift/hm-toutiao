<template>
  <div class="home-container">
    <van-nav-bar title="新闻" />

    <van-pull-refresh v-model="refreshing" @refresh="onRefresh" class="article">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <ArticleInfo v-for="item in newsList" :key="item.art_id" :title="item.title" :author="item.aut_name" :com-count="item.comm_count" :time="item.pubdate" :cover="item.cover"></ArticleInfo>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
// 导入 articlesApi.js 的 getArticles 方法
import { getArticles } from '@/api/articlesApi'
// 导入组件
import ArticleInfo from '@/components/Articles/ArticleInfo.vue'

export default {
  name: 'HomeView',
  data() {
    return {
      newsList: [],
      params: {
        page: 1,
        limit: 10
      },
      // 当组件滚动到底部时，会触发 load 事件并将 loading 设置成 true。此时可以发起异步操作并更新数据，数据更新完毕后，将 loading 设置成 false 即可
      loading: true,
      // 若数据已全部加载完毕，则直接将 finished 设置成 true 即可
      finished: false,
      refreshing: false
    }
  },
  methods: {
    async getNews(isRefresh) {
      const { data: res } = await getArticles(this.params.page, this.params.limit)
      // 第一次请求的
      // this.newsList = res
      if (!isRefresh) {
        // 上拉刷新
        // 第 n 次请求, [...arr1, ...arr2] --> 将 arr2 的数据拼接到 arr1
        this.newsList = [...this.newsList, ...res]
      } else {
        // 下拉刷新
        // 第 n 次请求
        this.newsList = [...res, ...this.newsList]
        this.refreshing = false
      }

      // 加载状态结束
      this.loading = false
      // 数据全部加载完成(请求回来的数据是空)
      if (res.length === 0) {
        this.finished = true
      }

      // console.log(res)
    },
    // 文章加载
    onLoad() {
      // console.log('onLoad')
      // 页码加一
      this.params.page += 1
      // 重新发起请求
      this.getNews(false)
    },
    // 下拉刷新
    onRefresh() {
      // console.log('下拉刷新')
      // 页码加一
      this.params.page += 1
      // 表示正在加载
      this.loading = true
      // 重新发起请求
      this.getNews(true)
    }
  },
  created() {
    this.getNews()
  },
  components: {
    ArticleInfo
  }
}
</script>

<style lang="less" scoped>
.home-container {
  /deep/ .van-nav-bar {
    position: fixed;
    top: 0;
    width: 100%;
  }

  .article {
    margin: 46px 0 50px;
  }
}
</style>
