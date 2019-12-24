const path = require('path');
const webpack = require('webpack');

const hotMiddlewareScript = `webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true`;

module.exports = env => {
  const isPrd = env && env.NODE_ENV === 'production';
  return {
    mode: isPrd ? 'production' : 'development',
    devtool: isPrd ? '' : 'inline-source-map',

    entry: [hotMiddlewareScript, './src/client/index.tsx'],

    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: '[name].js',
      publicPath: '/',
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: ['babel-loader', 'ts-loader'],
        },
      ],
    },

    resolve: {
      extensions: ['.js', 'jsx', '.ts', '.tsx'],
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
  };
};
