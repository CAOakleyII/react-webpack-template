var webpack = require('webpack');
var path = require("path");

module.exports = {
    context: '/repos/see-play',
    entry: [
      'webpack-dev-server/client?http://localhost:8080',
      './src/app.js'
    ],
    output: {
        path:  '/repos/see-play',
        filename: 'bundle.js',
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.ProvidePlugin({
          React: 'react'
      }),
      new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': '"DEBUG"'
        }
      })
    ],
    module: {
        rules: [
          {
              test: /\.jsx?$/,
              use: ['react-hot-loader', 'babel-loader'],
              include: '/repos/see-play/src',
          },
          {
              test: /\.less$/,
              use: [
                  "style-loader",
                  "css-loader",
                  "less-loader"
              ]
          }
        ]
    },
    devServer: {
      hot: true,
      contentBase: './'
    }
};
