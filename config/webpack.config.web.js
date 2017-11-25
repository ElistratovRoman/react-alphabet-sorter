const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    path.join(__dirname, '../dev/index.js'),
  ],

  output: {
    path: path.join(__dirname, '../web'),
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

    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
        sequences: true,
        dead_code: true,
        conditionals: true,
        booleans: true,
        unused: true,
        if_return: true,
        join_vars: true,
        drop_console: true,
        drop_debugger: true,
      },
      output: {
        comments: false,
      },
    }),
  ],

  resolve: {
    extensions: [ '.js', '.css', '.sass' ],

    alias: {
      'react-alphabet-sorter': path.join(__dirname, '../dist'),
    },
  },
}
