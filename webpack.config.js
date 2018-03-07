var path = require('path');

module.exports = {
  entry: './js/app-es6/controllers/UserController.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};