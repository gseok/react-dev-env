const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: "inline-source-map",

  entry: `${__dirname}/../src/client/index.tsx`,

  devServer: {
    publicPath: '/',
    port: 3000,
    hot: true,
    open: true,
    inline: true,
    disableHostCheck: true,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{
          loader: 'babel-loader',
        }, {
          loader: 'ts-loader',
        }],
      },
    ],
  },

  resolve: {
    extensions: ['.js', 'jsx', '.ts', '.tsx'],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: `${__dirname}/../assets/templates/index_dev.html`,
    }),
  ],
}