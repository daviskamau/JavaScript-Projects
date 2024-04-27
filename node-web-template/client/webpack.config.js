const path = require('path')
const { getMode } = require('../shared/dev')

module.exports = {
  mode: getMode(),
  target: 'web',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist/public'),
    filename: 'client.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
