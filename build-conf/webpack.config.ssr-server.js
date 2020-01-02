
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = env => {
  const isPrd = env && env.NODE_ENV === 'production';

  return {
    mode: isPrd ? 'production' : 'development',
    devtool: isPrd ? '' : 'inline-source-map',

    target: 'node',
    node: {
      __dirname: false,
    },

    entry: {
      server: `${__dirname}/../src/server/server.tsx`,
    },
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: '[name].js',
      chunkFilename: '[name].js',
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            'babel-loader', 'ts-loader',
          ],
        },
      ],
    },

    resolve: {
      extensions: ['.js', 'jsx', '.ts', '.tsx'],
    },

    externals: [nodeExternals()],
  };
};
