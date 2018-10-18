
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.css",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "html", "index.html"),
      filename: path.resolve(__dirname, "dist", "index.html")
    })
  ],
  module: {
    rules: [
      {
        test: /\.s?css$/, 
        use: [
          "style-loader", MiniCssExtractPlugin.loader, "css-loader", "sass-loader"
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i, 
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images/',
              publicPath: "./images" 
            }
          },
          {
            loader: "image-webpack-loader",
          }
        ]
      }
    ]
  }
}