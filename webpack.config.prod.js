const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path:  path.resolve(__dirname, 'build/'),
    filename: 'bundle.js',
    publicPath: '/',
    clean: true,
  },
  module: {
    rules:  [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
        resolve: {
          extensions: ['.js', '.jsx']
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ],
};
