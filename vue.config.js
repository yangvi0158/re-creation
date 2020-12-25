module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/re-creation/'
    : '/',
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
