const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');
const AutoDllPlugin = require('autodll-webpack-plugin');

let devConfig = {
  mode: 'development',
  output: {
    filename: 'main_[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    host: '127.0.0.1',
    port: 8989,
    overlay: {
      warnings: true,
      errors: true
    },
    publicPath: '/',
    proxy: {
      "/j": { 
        target: "https://read.douban.com",
        changeOrigin: true,
        secure: false,
        // http://m.maoyan.com/ajax/search?kw=捉妖记&cityId=10
        // https://read.douban.com/j/suggest_v2?q=nice
      },
    },
    quiet: true,
    watchOptions: {
      poll: true, 
      ignored: /node_modules/,
      aggregateTimeout: 300
    }
  },
  module: {
    rules: [
      {
        test: /\.(sc|c|sa)ss$/,
        loader: [
          'style-loader', 
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          'postcss-loader', 
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new AutoDllPlugin({
      filename: '[name]_chunk.js',
      inherit: false,//当为false时，速度更快；当为true时，可以打开webpack没有压缩过的源码sourcemap调试
      inject: true,
      debug: true,
      entry: {
        appVendor: [
          'axios',
          'lodash'
        ]
      }
    })
  ]
}

module.exports = merge(common, devConfig);