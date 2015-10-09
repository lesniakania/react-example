var path = require('path');
var Webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var Jade = require('jade');

module.exports = {
  devtool: "source-map",
  entry: [
    path.join(__dirname, 'assets', 'js', 'application.js'),
    path.join(__dirname, 'assets', 'css', 'application.scss')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle-[hash].min.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      }
    ]
  },
  plugins: [
    new Webpack.optimize.OccurenceOrderPlugin(),
    new Webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new ExtractTextPlugin("bundle-[hash].min.css"),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'views', 'index.ejs'),
      inject: 'body',
      filename: 'index.ejs'
    })
  ]
};
