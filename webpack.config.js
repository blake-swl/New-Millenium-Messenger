const path = require('path');

module.exports = {
  entry: path.resolve('./client/src'),
  output: {
    path: path.resolve('./client/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  mode: 'development'
}