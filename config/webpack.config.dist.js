const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: path.join(__dirname, '../src/index.js'),

  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'index.js',
    publicPath: '/',
    libraryTarget: 'umd',
  },

  externals: {
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
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
  ],

  resolve: {
    extensions: ['.js', '.css'],
  },
}
