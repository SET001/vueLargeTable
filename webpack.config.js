const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index.js'
	},
	watch: true,
	resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' для webpack 1
    }
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [{ loader: "html-loader", options: { minimize: false } }]
      },
      {
        test: /\.sass$/,
        use: [
          MiniCssExtractPlugin.loader,
          //"style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
}