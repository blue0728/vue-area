'use strict'

var path = require("path");
var webpack = require("webpack");

module.exports = {
	entry: {
		app: ['./main.js']
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "app.js",
		publicPath: 'dist'
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