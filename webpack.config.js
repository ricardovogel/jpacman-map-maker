const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist/js')
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.min.js'
    }
  },
  optimization: {
    minimize: false
  }
}
