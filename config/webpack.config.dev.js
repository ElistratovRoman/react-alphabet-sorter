const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const host = '0.0.0.0'
const port = '3000'

module.exports = {
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://${host}:${port}`,
    'webpack/hot/only-dev-server',
    path.join(__dirname, '../dev/index.js'),
  ],

  output: {
    path: path.join(__dirname, '../dev/index.js'),
    filename: 'index.js',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },

      {
        test: /\.css$/,
        include: [
          path.resolve('node_modules', 'react-select'),
        ],
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.sass$/,
        exclude: /node_modules/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ],
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),

    new webpack.NamedModulesPlugin(),

    new webpack.HotModuleReplacementPlugin(),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../dev/index.html'),
    }),
  ],

  resolve: {
    extensions: [ '.js', '.css', '.sass' ],

    alias: {
      'react-alphabet-sorter': path.join(__dirname, '../dist'),
    },
  },

  devServer: {
    host,
    port,
    contentBase: path.resolve(__dirname, '../dev'),
    historyApiFallback: true,
    hot: true,
    publicPath: '/',
  },
}
