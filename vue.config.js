module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(frag|vert)$/,
          loader: 'raw-loader'
        }
      ]
    }
  }
}
