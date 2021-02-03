const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './public/js'),
    filename: 'bundle.js'
  },
  target: ['web', 'es5'],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    ie: '11'
                  }
                }
              ]
            ]
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
    publicPath: '/js/',
    port: 53535,
    watchContentBase: true
  },
  devtool: 'source-map'
}
