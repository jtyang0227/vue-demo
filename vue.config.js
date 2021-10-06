const webpack = require('webpack');
const path =  require('path');

module.exports = {
  css: {
    requireModuleExtension: false,
    loaderOptions: {
      scss: {
        // sass-lader version-8: data가 아닌 prependData, 그리고 그 이상은 additionalData
        prependData: `
          @import "@/assets/scss/_variables.scss";
          @import "@/assets/scss/_mixins.scss";
          @import "@/assets/scss/_common.scss";
          @import "@/assets/scss/_main.scss";
        `
      }
    }
  }
}