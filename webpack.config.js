'use strict'

var path = require("path");
var webpack = require("webpack");
var pkg = require('./package.json');
var banner = `${pkg.name} v${pkg.version}\n${pkg.description}\n${pkg.homepage}\n@author ${pkg.author}`;

module.exports = {
	entry: {
		'vue-area': path.join(__dirname, 'src/vue-area.vue')
	},
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '/',
		library: 'vueArea',
		libraryTarget: 'umd',
		filename: "[name].js"
	},
	module: {
		loaders: [{
			test: /\.vue$/,
			loader: 'vue',
		}, {
			test: /\.js$/,
			loader: 'babel',
			exclude: /node_modules/
		}]
	},
	babel: {
		presets: ['es2015', 'stage-0'],
		plugins: ['transform-runtime']
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.BannerPlugin(banner)
	]
};