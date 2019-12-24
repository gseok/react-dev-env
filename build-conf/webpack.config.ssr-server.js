
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = env => {
  return {
    mode: env && env.NODE_ENV === 'production' ? 'production' : 'development',

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
