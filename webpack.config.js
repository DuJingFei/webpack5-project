const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            // 将css 打包到独立文件中
            'style-loader', 
            
            // css-loader按照CommonJS规范，将样式文件输出到JS中
            'css-loader'
          ]
        },
        {
          test: /\.less$/i,
          use: [
            // 将css 打包到独立文件中
            'style-loader', 
            // css-loader按照CommonJS规范，将样式文件输出到JS中
            'css-loader',
  
            'less-loader',
          ]
        }
      ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}