'use strict'
import path from 'path'
import webpack from 'webpack'

const rootDir = process.cwd()

const uglifyJs = new webpack.optimize.UglifyJsPlugin({
  compress: { warnings: false }
})

module.exports = {
  entry: [path.join(rootDir, '/dev/index.html'), path.join(rootDir, '/dev/app.jsx')],

  output: {
    path: path.join(__dirname, '/build'),
    filename: 'app.js'
  },

  resolve: {
    extensions: [ '', '.js', '.jsx', '.css', '.sass', '.html' ]
  },

  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel'
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

  plugins: [ uglifyJs ]
}
