var webpack = require('webpack');

module.exports = {
  entry: './app/js/app.jsx',
  output: {
    path: './app',
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  externals: {
    'react': 'React' 
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};