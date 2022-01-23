const HtmlWebpackPlugin = require('html-webpack-plugin')


const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');

const devWebpackConfig = merge(baseConfig, {
  mode: 'development',

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.tem.html',
      title: 'this is the dev title'
    }),
  ]
})

module.exports = devWebpackConfig;