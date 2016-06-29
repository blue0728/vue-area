'use strict'

var path = require("path");
var webpack = require("webpack");

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
			exclude: /node_modules|vue\/dist/,
			loader: 'babel'
		}]
	},
	babel: {
		presets: ['es2015', 'stage-0'],
		plugins: ['transform-runtime']
	},
	plugins: []
};