const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const LoadablePlugin = require('@loadable/webpack-plugin');

const hotMiddlewareScript = `webpack-hot-middleware/client?name=web&path=/__webpack_hmr&timeout=20000&reload=true`;

const getEntry = (target) => {
  return target === 'node' ?
    ['./src/client/App.tsx'] :
    [hotMiddlewareScript, './src/client/index.tsx'];
}

const getConfig = (target, isPrd) => {
  return  {
    target,
    name: target,

    mode: isPrd ? 'production' : 'development',
    devtool: isPrd ? '' : 'inline-source-map',

    entry: getEntry(target),

    output: {
      path: path.resolve(__dirname, `../dist/${target}`),
      filename: '[name].js',
      publicPath: '/',
      libraryTarget: target === 'node' ? 'commonjs2' : undefined,
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

    plugins: target === 'node' ?
    [
      new LoadablePlugin()
    ] :
    [
      new LoadablePlugin(),
      new webpack.HotModuleReplacementPlugin(),
    ],

    externals: target === 'node' ?
    [
      '@loadable/component',
      nodeExternals()
    ] :
    undefined,
  };
}

module.exports = env => {
  const isPrd = env && env.NODE_ENV === 'production';

  return [getConfig('web', isPrd), getConfig('node', isPrd)];
};
