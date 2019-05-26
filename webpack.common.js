const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  resolve: {
    alias: { 
      '@': path.resolve(__dirname, 'src/')
    },
    extensions: [".js", ".vue", ".json"]
  },
  externals: {  
    jquery: 'jQuery',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/, 
        loader: 'babel-loader'
       
      }, {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        include: [path.resolve(__dirname, 'src/')],
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'image/[name]_image.[ext]'
            }
          }, {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false
              },
              webp: {
                quality: 75
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'wills-react-pro', 
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html'),
      inject: true,
      // inject: 'head',
      // inject: 'false',
    }),
    new CleanWebpackPlugin()
  ]
}