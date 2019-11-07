var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (env) {
	return {
		mode: env.development ? 'development' : (env.production ? 'production' : 'none'),
		entry: path.resolve(__dirname, 'src/main'),
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'js/bundle.min.js'
		},
		devServer: {
			contentBase: path.resolve(__dirname, 'dist'),
			host: 'localhost',
			port: 3000,
			inline: true,
			open: true
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/i,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['babel-preset-stage-3', 'react']
						}
					},
					include: path.resolve(__dirname, 'src')
				},
				{
					test: /\.css$/i,
					use: ['style-loader', 'css-loader', {
						loader: 'postcss-loader',
						options: {
							plugins: [require('autoprefixer')]
						}
					}]
				},
				{
					test: /\.(jpg|png|gif)$/i,
					use: {
						loader: 'file-loader',
						options: {
							outputPath: 'imgs'
						}
					}
				}
			]
		},
		resolve: {
			extensions: ['.js', '.jsx', '.json', '.css'],
			alias: {
				views: path.resolve(__dirname, 'src/views'),
				store: path.resolve(__dirname, 'src/store'),
				assets: path.resolve(__dirname, 'src/assets'),
				styles: path.resolve(__dirname, 'src/styles'),
				components: path.resolve(__dirname, 'src/components')
			}
		},
		performance: {
			hints: false
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, 'index.html'),
				favicon: path.resolve(__dirname, 'static/favicon.ico'),
				filename: 'index.html',
				inject: true
			})
		]
	}
}