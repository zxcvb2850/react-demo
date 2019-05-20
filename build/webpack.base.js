const path = require("path");
const webpack = require("webpack");

const rules = require("./loaders");
const { resolve } = require("./utils")

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-formatter-friendly'),
    emitWarning: true
  }
})

const webpackBaseConfig = {
    // context: path.resolve(__dirname, '../'),
    entry: "./src/index.js",
    output: {
        path: "/",
        filename: "[name].js",
        publicPath: process.env.NODE_ENV === 'production'
          ? "/"
          : "./"
    },
    resolve: {
      extensions: [".js", ".jsx", ".json"],
      alias: {
        "@": resolve("src")
      }
    },
    module: {
      rules: [
        createLintingRule(),
        ...rules
      ]
    },
    node: {
      // prevent webpack from injecting useless setImmediate polyfill because Vue
      // source contains it (although only uses it if it's native).
      setImmediate: false,
      // prevent webpack from injecting mocks to Node native modules
      // that does not make sense for the client
      dgram: 'empty',
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
      child_process: 'empty'
    }
}

module.exports = webpackBaseConfig;
