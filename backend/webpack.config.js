// webpack.config.js
const path = require('path');

module.exports = {
  mode: 'development', // or 'production'
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

