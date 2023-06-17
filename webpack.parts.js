const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

exports.devServer = () => ({
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
    open: true,
  },
})

exports.clean = () => ({
  plugins: [ new CleanWebpackPlugin() ]
})

exports.page = ({ title }) => ({
  plugins: [
    new HtmlWebpackPlugin({
      title ,
      template: path.join(__dirname, 'src', 'index.html')
    })
  ],
})

exports.loadCSS = () => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'] // styleLoader(cssLoader(input))
      }
    ]
  }
})

// const APP_SOURCE = path.join(__dirname, 'src')

exports.loadJavaScript = () => ({
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        // include: APP_SOURCE,
        use: {
          loader: 'babel-loader',
        }
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
})


// USEAGE EXAMPLE: parts.generateSourceMaps({ type: 'source-map' }),
exports.generateSourceMaps = ({ type }) => ({
  devtool: type
})