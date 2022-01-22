const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin').default;

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
            //'style-loader', 
            MiniCssExtractPlugin.loader,
            // css-loader按照CommonJS规范，将样式文件输出到JS中
            'css-loader',

            'postcss-loader',
          ]
        },
        {
          test: /\.less$/i,
          use: [
            // 将css 打包到独立文件中
            MiniCssExtractPlugin.loader,
            // css-loader按照CommonJS规范，将样式文件输出到JS中
            'css-loader',
  
            'postcss-loader',
            
            'less-loader',
          ]
        }
      ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    })
  ]
}