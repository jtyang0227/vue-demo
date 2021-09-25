const webpack = require('webpack');
const path =  require('path');

module.exports = {
  css: {
    requireModuleExtension: false,
    loaderOptions: {
      scss: {
        // sass-lader version-8: data가 아닌 prependData, 그리고 그 이상은 additionalData
        prependData: `
          @import "@/assets/styles/_variables.scss";
          @import "@/assets/styles/_mixins.scss";
          @import "@/assets/styles/_common.scss";
          @import "@/assets/styles/_main.scss";
        `
      }
    }
  }
}



//
// module.exports = {
//   lintOnSave : false,
//   publicPath: process.env.NODE_ENV === 'production'
//     ? process.env.APP_BASE_URL
//     : '/',
//   outputDir: path.resolve(__dirname, "../" + "main/resources/static"),
//   configureWebpack: {
//     plugins: [
//       new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
//     ],
//     resolve: {
//       alias: {
//         vue$: 'vue/dist/vue.common.js',
//         '@': path.join(__dirname, 'src/')
//       }
//     },
//     devtool: 'source-map',
//     devServer: {
//       host: '0.0.0.0',
//       port: 80,
//       clientLogLevel: 'debug',
//       proxy: {
//         '/api' : {
//           target: 'http://tcs.happymoney.co.kr',
//           ws: true,
//           changeOrigin: true
//         },
//       }
//     },
//   },
//   pluginOptions: {
//     i18n: {
//       locale: 'kor',
//       fallbackLocale: 'kor',
//       localeDir: 'locales',
//       enableInSFC: false
//     }
//   }
// }