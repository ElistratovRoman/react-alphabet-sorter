'use strict'
import path from 'path'
import webpack from 'webpack'

module.exports = {
  context: path.join(__dirname, 'src'),

  entry: './index.jsx',

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.js',
    library: 'AlphabeticalSorter',
    libraryTarget: 'umd'
  },

  resolve: {
    modulesDirectories: ['node_modules'],
    root: path.join(__dirname, 'src'),
    extensions: ['', '.js', '.jsx', '.css', '.sass', '.json']
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
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel'
      },

      {
        test: /\.sass$/,
        loader: 'style-loader!css-loader!sass?indentedSyntax=sass'
      }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),

    new webpack.NoErrorsPlugin()
  ],

  sassLoader: {
    includePaths: [path.resolve(__dirname, './src')]
  }
}
