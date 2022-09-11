const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 打包时本地浏览使用 https://cli.vuejs.org/zh/config/#publicpath
  // publicPath: './',
  // axios 跨域
  devServer: {
    proxy: {
      '/api/': {
        target: 'http://www.escook.cn/', // 请求的第三方接口
        changeOrigin: true /* 在本地会创建一个虚拟服务端，然后发送请求的数据,并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题 */,
        // 链接重写
        pathRewrite: {
          /* 替换target中的请求地址，也就是说以后你在请求
            http://127.0.0.1:8888/api/private/v1/这个地址的时候直接写成/api/即可。 */
          '^/api/': ''
        }
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 直接覆盖变量
            'nav-bar-background-color': '#1989fa',
            'nav-bar-text-color': 'white',
            'nav-bar-icon-color': 'white',
            'nav-bar-title-text-color': 'white'
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            // hack: `true; @import "your-less-file-path.less";`,
          }
        }
      }
    }
  }
})
