const path = require('path')
const { getMode } = require('../shared/dev')

module.exports = {
  mode: getMode(),
  target: 'node',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'server.bundle.js'
  }
}
