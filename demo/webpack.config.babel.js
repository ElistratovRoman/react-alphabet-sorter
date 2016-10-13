'use strict'
import webpack from 'webpack'
import path from 'path'

module.exports = {
  entry: {
    demo: [
      'webpack-hot-middleware/client',
      path.resolve(__dirname, 'index.jsx')
    ]
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    publicPath: '/build/'
  },

  stats: {
    colors: true
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.sass']
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      },

      {
        test: /\.sass$/,
        loader: 'style-loader!css-loader!sass?indentedSyntax=sass'
      },

      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}
