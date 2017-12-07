const path = require('path');

module.exports = {
  // indica el contexto desde donde se ejecutara 'webpack' que es el root del proyecto
  context: __dirname,
  entry: './js/ClientApp.jsx',
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  // el directorio desde donde servira el webpack-dev-server
  devServer: {
    publicPath: '/public/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true,
  },
  // el enforce: pre indica que esta regla se ejecutara primero
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
    ],
  },
};
