module.exports = {
  entry: {
    jsSource: './js/source.js'
  },
  output: {
    filename: './js/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      }
    ]
  }
}
