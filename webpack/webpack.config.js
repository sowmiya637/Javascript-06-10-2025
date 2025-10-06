const path = require('path');

module.exports = {
  entry: './src/index.js',       // starting point
  output: {
    filename: 'bundle.js',       // bundled file
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development'
};
