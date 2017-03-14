// 🎌 WE'RE USING WEBPACK TO TRANSPILE AND ROLL UP MODULES 🎌

module.exports = {
  entry: {
    // 🎌 OUR SOURCE FILE 🎌
    jsSource: './js/source.js'
  },
  output: {
    // 🎌 OUR DESTINATION 🎌
    filename: './js/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
    }
  }
}
