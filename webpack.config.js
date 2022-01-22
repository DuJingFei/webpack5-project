const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin').default;
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

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
          test: /\.(png|jpe?g)$/i,
          use: {
            loader: 'url-loader',
            options: {
              limit: 80 * 1024,
              esModule: false
            }
          }
        },
        {
          test: /\.(html|htm)$/i,
          use: {
            loader: 'html-loader',
            options: {
              esModule: false
            }
          }
        },
        {
          test: /\.css$/i,
          use: [
            // 将css 打包到独立文件中
            //'style-loader', 
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../'
              }
            },
            
            // css-loader按照CommonJS规范，将样式文件输出到JS中
            'css-loader',

            'postcss-loader',
          ]
        },
        {
          test: /\.less$/i,
          use: [
            // 将css 打包到独立文件中
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../'
              }
            },
            // css-loader按照CommonJS规范，将样式文件输出到JS中
            'css-loader',
  
            'postcss-loader',

            'less-loader',
          ]
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    // 按需加载
                    useBuiltIns: 'usage',
                    // core-js 版本
                    corejs: 3,
                    // targets: 'defaults'，允许我们制定兼容浏览器版本
                    targets: {
                      chrome: '58',
                      ie: '9',
                      firefox: '60',
                      safari: '10',
                      edge: '17'
                    }
                  }
                ]
              ]
            }
          }
        }
      ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new CssMinimizerPlugin(),

    new HtmlWebpackPlugin({
      template: './src/index.tem.html',
      title: 'this is the temp title'
    }),
  ]
}