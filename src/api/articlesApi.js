// 封装了请求文章的 api 方法

// 导入 axios --> this.$http
import Vue from 'vue'

// console.log(Vue)

export const getArticles = (page, limit) => {
  return Vue.prototype.$http.get('/articles', {
    params: {
      _page: page,
      _limit: limit
    }
  })
}
