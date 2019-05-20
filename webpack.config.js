const webpack = require("webpack")

module.exports = {
	entry: "./src/index.js",
	output: {
		path: __dirname + "/dist",
		publicPath: "/",
		filename: "bundle.js"
	},
	resolve: {
		extensions: ["*", ".js", ".jsx", ".json"]
	},
	module: {
		rules: [
			{
				test: /.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"]
			},
			{
				test: /.(js)$/,
				exclude: /node_modules/,
				use: [ {
					loader: "eslint-loader"	,	
					options: {
						formatter: "eslint-formatter-friendly"
					}
				}]
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		contentBase: "./dist",
		hot: true
	}
}