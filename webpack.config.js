var path = require('path');

module.exports = {
  entry: './js/app-es6/controllers/UserController.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ["es2015"]
            }
          }
        }
      ]
  },
  stats: {
      colors: true
  },
  devtool: 'source-map'
};