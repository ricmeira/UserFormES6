var path = require('path');

module.exports = {
  entry: './js/app-es6/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};