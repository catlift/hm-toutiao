<template>
  <div class="article-item">
    <template name="title">
      <div class="article-title">
        <span>{{ title }}</span>
        <!-- 一图片 -->
        <img :src="cover.images" alt="" v-if="cover.type === 1" />
      </div>
    </template>

    <!-- 三图片 -->
    <div class="article-images" v-if="cover.type === 3">
      <img :src="item" alt="" v-for="(item, index) in cover.images" :key="index" />
    </div>

    <template name="label">
      <div class="article-footer">
        <span>作者 {{ author }}</span>
        <span>{{ comCount }} 评论</span>
        <span>发布日期 {{ time }}</span>
        <!-- 关闭按钮 -->
        <van-icon name="cross" />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ArticleInfo',
  props: {
    // 文章标题
    title: {
      type: String,
      require: true,
      default: ''
    },
    // 作者
    author: {
      type: String,
      default: ''
    },
    // 评论数
    comCount: {
      type: [String, Number],
      default: 0
    },
    // 发布时间
    time: {
      type: String,
      default: ''
    },
    // 封面的信息对象
    cover: {
      type: Object,
      // 通过 default 函数,返回 cover 属性的默认值
      default: () => {
        return { type: 0 }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.article-item {
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  border-bottom: 1px solid #ebedf0;

  > div:nth-child(n + 2) {
    margin-top: 5px;
  }

  .article-title {
    display: flex;
    flex-direction: row;

    img {
      width: 110px;
      height: 62px;
    }
  }

  .article-images {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    img {
      width: 110px;
      height: 62px;
    }
  }

  .article-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    color: #a49b9b;
  }
}
</style>
