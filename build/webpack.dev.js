process.env.NODE = "development";

const path = require("path");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const portfinder = require('portfinder');
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ignoredFiles = require("react-dev-utils/ignoredFiles");
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const baseWebpackConfig = require("./webpack.base");
const { stylesLoader } = require("./loaders/style-loader");

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT);

const devWebpackConfig = webpackMerge(baseWebpackConfig, {
    module: {
        rules: stylesLoader({
            sourceMap: true,
            usePostCss: true
        })
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
      clientLogLevel: "warning",
      historyApiFallback: {
        rewrites: [{
          from: /.*/,
          to: path.posix.join("/", `src/index.html`)
        }]
      },
      hot: true,
      inline: true,
      open: false,
      host: HOST || "localhost",
      port: PORT || 3000,
      contentBase: false,
      compress: true,
      publicPath: "/",
      quiet: true,
      watchOptions: {
        ignored: ignoredFiles("src")
      },
      proxy: {}
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "src/index.html",
        inject: true
      })
    ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || 3000
  portfinder.getPort((err, port) => {
    if (err) {
      return reject(err);
    } else {
      devWebpackConfig.devServer.port = port;
      devWebpackConfig.plugins.push(
        new FriendlyErrorsPlugin({
          compilationSuccessInfo: {
            messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
          }
        })
      );
      return resolve(devWebpackConfig);
    }
  });
});
