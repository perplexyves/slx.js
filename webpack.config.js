const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
	entry: ['./src/slx.css', './src/slx.js'],
	output: {
		filename: 'slx.min.js',
		library: 'Slx',
		libraryTarget: 'umd',
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'slx.min.css',
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
		],
	},
	optimization: {
		minimize: true,
		minimizer: [
			`...`,
			new CssMinimizerPlugin(),
		],
	},
};