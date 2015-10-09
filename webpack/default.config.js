var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  BundleName: 'bundle',
  Dist: path.join(__dirname, '..', 'dist'),
  Entries: [
    path.join(__dirname, '..', 'assets', 'js', 'application.js'),
    path.join(__dirname, '..', 'assets', 'css', 'application.scss')
  ],
  Loaders: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ["react-hot", "babel-loader"]
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
    }
  ]
};
