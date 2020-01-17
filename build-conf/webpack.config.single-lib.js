const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
  return {
    mode: 'development',
    devtool: "inline-source-map",

    entry: `${__dirname}/../src/client/index-single.tsx`,

    output: {
      path: path.resolve(__dirname, '../dist', 'umd'),
      library: 'MySingleLibStyleComponent',
      libraryTarget: 'umd',
      filename: 'MySingleLibStyleComponent.js',
      umdNamedDefine: true,
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [{
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env'
              ]
            }
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
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: `${__dirname}/../assets/templates/index_single_lib.html`,
      }),
    ],
  };
}
