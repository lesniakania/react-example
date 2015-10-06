import path from 'path';

module.exports = {
  entry: "./app.js",
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};

